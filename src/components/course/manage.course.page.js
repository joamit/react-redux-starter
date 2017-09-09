import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/course.actions';
import CourseForm from './course.form';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.saveCourse = this.saveCourse.bind(this);
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    render() {
        return (
            <CourseForm course={this.state.course}
                        onSave={this.saveCourse}
                        onChange={this.updateCourseState}
                        errors={this.state.errors}
                        allAuthors={this.props.authors}/>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    let course = {
        title: '',
        watchHref: '',
        authorId: '',
        category: '',
        length: '',
        id: ''
    };
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormatterForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormatterForDropDown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);