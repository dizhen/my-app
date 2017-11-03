import React, {Component} from 'react';
import PhotographerInfo from './PhotographerInfo';
import PhotographerPhoto from './PhotographerPhoto';

export default class Home extends Component {
    render() {
        return (
            <div className="">

                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-xs-12 test">
                        <div className="jumbotron">
                            <h1>Hello, world!</h1>
                            <p>Search over 10000 top photographers in the world. Find the right photographer for your
                                special occasion. </p>
                            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-12 test">
                        Photographer of the week
                        AI BAO BAO
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-xs-12 test">
                        <div class="card card-inverse card-primary">
                            <div className="row">
                                <div className="col-sm-3">
                                    <PhotographerInfo></PhotographerInfo>
                                </div>
                                <div className="col-sm-9">
                                    <PhotographerPhoto></PhotographerPhoto>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-12 test">
                        <div class="card card-inverse card-primary">
                            <p>Top 10 Users</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
