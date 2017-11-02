import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-12 test">
                            <a href="#">
                                About Us
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 test">
                            <a href="#">
                                Our Team
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 test">
                            <a href="#">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}