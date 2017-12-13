import React, {Component} from 'react';
import PhotographerNameHeadshot from './PhotographerNameHeadshot';
import TopPhotographerPhotos from './TopPhotographerPhotos';

export default class SuperPhotographerContainer extends Component {
    render() {
        const superPhotograsher = this.props.superPhotograsher;
        return (
            <div>
                <PhotographerNameHeadshot
                    photographer={superPhotograsher}
                />
                <TopPhotographerPhotos
                    photos={superPhotograsher.photos}
                />
            </div>

        );
    }
}