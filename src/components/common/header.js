import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <IndexLink className="navbar-brand" to="/">ReactStarter</IndexLink>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/course">Manage Course</Link></li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
