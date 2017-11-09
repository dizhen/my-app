import React, {Component} from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header test">
                        <a className="navbar-brand" href="#">XingYing</a>
                    </div>

                    <div>
                        <ul className="nav navbar-nav test" >
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">My profile</a></li>
                            <li><a href="#">My albums</a></li>
                        </ul>
                    </div>

                    <div className="nav navbar-right test">
                            <button type="submit" className="btn-warning">register</button>
                            <button type="submit" className="btn-success">sign in</button>
                    </div>
                </div>
            </nav>
        );
    }
}