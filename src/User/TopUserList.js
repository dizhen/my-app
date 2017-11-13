import React, {Component} from 'react';
import TopUserItem from './TopUserItem.js';
import _ from 'lodash';

export default class TopUserList extends Component {
    render() {
        const props = _.omit(this.props, 'users');

        return _.map(this.props.users, (user, index) =>
            <TopUserItem
                key={index}
                user={user}
                {...props}
            />
        );
    }

}