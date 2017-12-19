import React, {Component} from 'react';
import TopPhotographerList from '../Photographer/TopPhotographerList';
import TopUserList from '../User/TopUserList';
import SuperPhotographerContainer from '../Photographer/SuperPhotographerContainer';

export default class Home extends Component {


    render() {
        const superPhotographer = this.props.superPhotographer;

        return (
            <div>
                <h1 className="text-center my-4">星影部落，全球最大的摄影师与用户对接平台</h1>
                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-xs-12 test">
                        <img style={{
                            maxHeight: '480px',
                            width: '100%',
                        }}
                             src={require('../Res/Img/world_map_2.png')}
                             alt="user profile"
                        />
                    </div>

                    <div className="col-lg-3 col-sm-3 col-xs-12 test">
                        <SuperPhotographerContainer
                            superPhotograsher={superPhotographer}
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-9 col-xs-12 test">
                        <h2>热门摄影师</h2>

                        <TopPhotographerList
                            photographers={this.props.photographers}
                        />

                    </div>
                    <div className="col-sm-3 col-xs-12 test">
                        <h2>热门用户</h2>
                        <div className="card">
                            <div className="card-block">
                                <TopUserList
                                    users={this.props.users}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
            ;
    }
}
