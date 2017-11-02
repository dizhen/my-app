import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-sm-6 col-xs-12 test">
                        Left column
                    </div>
                    <div className="col-lg-10 col-sm-6 col-xs-12 test">
                        Right column
                    </div>
                </div>
                <h1>This is HOME!</h1>
            </div>
        );
    }
}
