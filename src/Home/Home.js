import React, {Component} from 'react';
import TopPhotographerList from '../Photographer/TopPhotographerList';
import TopUserList from '../User/TopUserList';

export default class Home extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-xs-12 test">
                        <div className="jumbotron">
                            <h1>Hello, world!</h1>
                            <p>Search over 10000 top photographers in the world. Find the right photographer for your
                                special occasion. </p>
                            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-xs-12 test">
                        Photographer of the week
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-xs-12 test">
                        <TopPhotographerList
                            photographers={this.props.photographers}
                        />
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-12 test">
                        <h2>Top 10 Users</h2>
                        <TopUserList
                            users={this.props.users}
                        />
                    </div>
                </div>
            </div>
        )
            ;
    }
}
