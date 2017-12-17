import React, {Component} from 'react';
import ReactStars from 'react-stars';
import TopPhotographerPhotos from './TopPhotographerPhotos';
import PhotographerNameHeadshot from './PhotographerNameHeadshot';

export default class TopPhotographerItem extends Component {
  render() {
    const photographer = this.props.photographer;
    return (
      <div className="card mb-sm-3">
        <div className="card-block">

          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-2 test">
                  <PhotographerNameHeadshot photographer={photographer}/>
                </div>
                <div className="col-md-10 test">
                  <TopPhotographerPhotos
                    photos={photographer.photos}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="test">{photographer.latestPost}</p>

        </div>
      </div>
    );
  }
}
