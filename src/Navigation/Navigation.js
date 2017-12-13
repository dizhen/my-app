import React, {Component} from 'react';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        };
    }

    onLoginClick() {
        this.setState({loggedin: true});
    }

    onLogoutClick() {
        this.setState({loggedin: false});
    }

    renderLogInSection() {
        if (!this.state.loggedin) {
            return (
                <div>
                    <button type="submit" className="btn-warning">
                        sign up
                    </button>
                    <button type="submit" className="btn-success" onClick={this.onLoginClick.bind(this)}>
                        log in
                    </button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button type="submit" className="btn-success" onClick={this.onLogoutClick.bind(this)}>
                        log out
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="row test">
                <nav className="navbar navbar-default">

                    <div className="navbar-header test">
                        <a className="navbar-brand" href="#">XingYing</a>
                    </div>

                    <div>
                        <ul className="nav navbar-nav test">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">My profile</a></li>
                            <li><a href="#">My albums</a></li>
                        </ul>
                    </div>

                    <div className="nav navbar-right test">
                        {this.renderLogInSection()}
                    </div>

                </nav>
            </div>
        );
    }
}