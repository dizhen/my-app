import React, {Component} from 'react';
import ReactStars from 'react-stars'

export default class PhotographerInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const photographer = this.props;
        return (
            <div className="container">
                <img style={{
                    align: 'center',
                    flex: 1,
                    height: 100,
                    width: 100,
                    borderWidth: 1,
                    borderRadius: 75
                }}
                     src={require('./blank-profile-picture.png')}
                     resizeMode='contain'
                />
                <ReactStars value={photographer.rating}/>
                <p align='center'>{photographer.name}</p>
            </div>
        );
    }
}
