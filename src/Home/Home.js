import React, {Component} from 'react';
import PhotographerInfo from './PhotographerInfo';
import PhotographerPhoto from './PhotographerPhoto';
import _ from 'lodash';
import UserItem from './UserItem';

import TopPhotographerList from '../Photographer/TopPhotographerList';

export default class Home extends Component {
  // renderPhotographersInfo() {
  //   const props = _.omit(this.props, 'photographers');
  //
  //   return _.map(this.props.photographers, (photographer, index) =>
  //     <PhotographerInfo
  //       key={index} {...photographer} {...props}
  //       photographers={this.props.photographers}
  //     />
  //   );
  // }

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
            <div className="">
              <h1>Hello, world!</h1>
              <p>Search over 10000 top photographers in the world. Find the right photographer for your
                special occasion. </p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-3 col-xs-12 test">
            Photographer of the week
            AI BAO BAO
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9 col-sm-9 col-xs-12 test">
            <TopPhotographerList
              photographers={this.props.photographers}
            />
          </div>
          <div className="col-lg-3 col-sm-3 col-xs-12 test">
            <div className="card card-inverse card-primary">
              <h2>Top 10 Users</h2>
              {this.renderUsers()}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
