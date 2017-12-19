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
                <nav className="col navbar navbar-toggleable-md navbar-light bg-faded">
                    <a className="navbar-brand" href="#"><img
                        src="https://cdn.worldvectorlogo.com/logos/elastic-x-pack.svg"
                        width={60} height={60}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">首页</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">个人主页</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">我的相册</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success mr-sm-2">登录</button>
                            <button className="btn btn-outline-success">注册</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}