import React, {Component} from 'react';

export default class TopUserItem extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="row">
                <div className="col-lg-3">
                    <img style={{
                        align: 'left',
                        height: 50,
                        width: 50,
                    }}
                         src={require('../Home/blank-profile-picture.png')}
                         alt="user profile"
                    />
                </div>
                <div className="col-lg-4">
                    <h5>{user.name}</h5>
                    <p><span className="glyphicon glyphicon-fire"></span>{user.followersCount}</p>
                </div>
                <div className="col-lg-4" align="right">
                    <button
                        className="btn btn-default">
                        + follow
                    </button>
                </div>
            </div>
        );
    }
}
