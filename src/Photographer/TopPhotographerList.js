import React, {Component} from 'react';
import ReactStars from 'react-stars';
import PhotographerPhoto from '../Home/PhotographerPhoto';
import PhotographerInfo from '../Home/PhotographerInfo';
import _ from 'lodash';

export default class TopPhotographerList extends Component {
  render() {
    const props = _.omit(this.props, 'photographers');

    return _.map(this.props.photographers, (photographer, index) =>
      <PhotographerInfo
        key={index} {...photographer} {...props}
        photographers={this.props.photographers}
      />
    );
  }

}