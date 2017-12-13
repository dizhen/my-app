import React, {Component} from 'react';
import ReactStars from 'react-stars';

export default class PhotographerNameHeadshot extends Component {
    render() {
        const photographer = this.props.photographer;
        return (
            <div className="test">
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
        );
    }
}
