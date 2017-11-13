import React, {Component} from 'react';
import ReactStars from 'react-stars';
import PhotographerPhoto from './PhotographerPhoto';

export default class PhotographerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    const photographer = this.props;
    return (
      <div className="">

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
                   src={require("./blank-profile-picture.png")}
                   resizemode="contain"
              />
              <ReactStars value={photographer.rating}/>
              <p align='center'>{photographer.name}</p>
            </div>
            <div className="col-sm-10">
              <PhotographerPhoto/>
            </div>

            <div className="col-12">
              {photographer.latestPost}
            </div>
          </div>
      </div>
    );
  }
}
