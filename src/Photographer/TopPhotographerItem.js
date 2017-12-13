import React, {Component} from 'react';
import ReactStars from 'react-stars';
import TopPhotographerPhotos from './TopPhotographerPhotos';
import PhotographerNameHeadshot from './PhotographerNameHeadshot';

export default class TopPhotographerItem extends Component {
    render() {
        const photographer = this.props.photographer;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2 test">
                        <PhotographerNameHeadshot photographer={photographer}/>
                    </div>
                    <div className="col-sm-10">
                        <TopPhotographerPhotos
                            photos={photographer.photos}
                        />
                    </div>

                    <div className="col-12">
                        {photographer.latestPost}
                    </div>
                </div>
            </div>
        );
    }
}
