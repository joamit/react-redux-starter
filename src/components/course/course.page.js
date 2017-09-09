import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseList from './course.list';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course/');
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Available Courses</h1>
                <div className="form-group text-right">
                    <input type="submit"
                           value="Add New Course"
                           className="btn btn-success"
                           onClick={this.redirectToAddCoursePage}/>
                </div>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursePage);