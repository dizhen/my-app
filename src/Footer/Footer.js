import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row mt-sm-5 text-center">
          <div className="col-sm-3 col-xs-12 mt-lg-5">
            <a href="#">
              关于星影
            </a>
          </div>
          <div className="col-sm-3 col-xs-12 mt-lg-5">
            <a href="#">
              联系星影
            </a>
          </div>
          <div className="col-sm-3 col-xs-12 mt-lg-5">
            <a href="#">
              加入星影
            </a>
          </div>
          <div className="col-sm-3 col-xs-12 mt-lg-5">
            <a href="#">
              常见问题
            </a>
          </div>
          <p className="mx-auto mt-md-4">Copyright © 2017 XYBL.com All Rights Reserved. 星影部落 版权所有</p>
        </div>
      </footer>
    );
  }
}