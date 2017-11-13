import React, {Component} from 'react';
import PhotographerInfo from './PhotographerInfo';
import _ from 'lodash';
import UserItem from './UserItem';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.renderPhotographers = this.renderPhotographers.bind(this);
        this.renderUsers = this.renderUsers.bind(this);
    }

    renderPhotographers(){
        const props = _.omit(this.props, 'photographers');

        return _.map(this.props.photographers, (photographer, index) =>
            <PhotographerInfo
                key={index} {...photographer} {...props}
                photographers={this.props.photographers}
            />
        );
    }

    renderUsers() {
        const props = _.omit(this.props, 'users');

        return _.map(this.props.users, (user, index) =>
            <UserItem
                key={index} {...user} {...props}
                users={this.props.users}
            />
        );
    }

    render() {
        return (
            <div>
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
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-xs-12 test">
                        <div class="card card-inverse card-primary">
                            <div className="row">
                                {this.renderPhotographers()}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-12 test">
                        <div class="card card-inverse card-primary">
                            <h2>Top 10 Users</h2>
                            {this.renderUsers()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
