import React, {Component} from 'react';
import ReactStars from 'react-stars';
import TopPhotographerPhotos from './TopPhotographerPhotos';

export default class TopPhotographerItem extends Component {
    render() {
        const photographer = this.props.photographer;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2 test">
                        <img style={{
                            align: 'center',
                            flex: 1,
                            height: 100,
                            width: 100,
                            borderWidth: 1,
                            borderRadius: 75
                        }}
                             src={require("../Home/blank-profile-picture.png")}
                             resizemode="contain"
                             alt="photographer profile"
                        />
                        <ReactStars value={photographer.rating}/>
                        <p align='center'>{photographer.name}</p>
                    </div>
                    <div className="col-sm-10">
                        <TopPhotographerPhotos
                            photos = {photographer.photos}
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
