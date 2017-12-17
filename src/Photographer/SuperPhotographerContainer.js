import React, {Component} from 'react';
import PhotographerNameHeadshot from './PhotographerNameHeadshot';
import TopPhotographerPhotos from './TopPhotographerPhotos';

export default class SuperPhotographerContainer extends Component {
  render() {
    const superPhotograsher = this.props.superPhotograsher;
    return (

      <div className="card">
        <div className="card-block">
            <div className="row">
            <div className="col-lg-6">
              <PhotographerNameHeadshot
                photographer={superPhotograsher}
              />
            </div>
            <div className="col-lg-6">
              <p>国籍：美国</p>
              <p>语言：英语</p>
              <p>城市：纽约</p>
              <p>题材：婚纱</p>
            </div>
            <div className="col-12">
              <TopPhotographerPhotos
                photos={superPhotograsher.photos}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}