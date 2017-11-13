import React, {Component} from 'react';
import TopPhotographerItem from './TopPhotographerItem';
import _ from 'lodash';

export default class TopPhotographerList extends Component {
    render() {
        const props = _.omit(this.props, 'photographers');

        return _.map(this.props.photographers, (photographer, index) =>
            <TopPhotographerItem
                key={index} {...photographer} {...props}
                photographers={this.props.photographers}
            />
        );
    }

}