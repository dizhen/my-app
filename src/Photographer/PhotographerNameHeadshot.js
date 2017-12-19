import React, {Component} from 'react';
import ReactStars from 'react-stars';


const styles = {
  headshotStyle: {
    flex: 1,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 75
  },
  size: {
    minWidth: '102px'
  }
};

export default class PhotographerNameHeadshot extends Component {
  render() {
    const photographer = this.props.photographer;
    return (
      <div className="test text-center" style={styles.size}>
        <img style={styles.headshotStyle}
             src={require("../Home/blank-profile-picture.png")}
             alt="photographer profile"
        />
        <div style={{display: 'inline-block'}}><ReactStars value={photographer.rating}/></div>
        <p>{photographer.name}</p>
      </div>
    );
  }
}
