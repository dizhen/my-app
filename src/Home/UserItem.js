import React, {Component} from 'react';

export default class UserItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <img style={{
                            align: 'left',

                            height: 50,
                            width: 50,

                        }}
                             src={require('./blank-profile-picture.png')}

                        />
                    </div>
                    <div className="col-lg-4">
                        <h5>{user.name}</h5>
                        <p><span className="glyphicon glyphicon-fire"></span>{user.followersCount}</p>
                    </div>
                    <div className="col-lg-4" align="right">
                        <button type="submit" className="btn btn-default">
                            <span className="glyphicon glyphicon-plus"></span> + follow
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
