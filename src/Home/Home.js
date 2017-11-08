import React, {Component} from 'react';
import PhotographerInfo from './PhotographerInfo';
import PhotographerPhoto from './PhotographerPhoto';
import _ from 'lodash';

export default class Home extends Component {
    renderPhotographersInfo(){
        const props = _.omit(this.props, 'photographers');

        return _.map(this.props.photographers, (photographer, index) =>
            <PhotographerInfo
                key={index} {...photographer} {...props}
                photographers={this.props.photographers}
            />
        );
    }
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
                                <div className="col-sm-2 test">
                                    {this.renderPhotographersInfo()}
                                </div>
                                <div className="col-sm-10">
                                    <PhotographerPhoto/>
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
