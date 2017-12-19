import React, {Component} from 'react';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const superPhotographer = {
  name: '理查德',
  style: 'family',
  rating: 5,
  latestPost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
  "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
  "penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  profileImg: require("../Res/Img/photographer/richard.jpeg"),
  photos: [
    {
      src: require('../Res/Img/wedding/1.jpg'),
      thumbnail: require('../Res/Img/wedding/1.jpg'),
      thumbnailWidth: 140,
      thumbnailHeight: 110,
    },
    {
      src: require('../Res/Img/wedding/2.jpg'),
      thumbnail: require('../Res/Img/wedding/2.jpg'),
      thumbnailWidth: 140,
      thumbnailHeight: 110,
    },
    {
      src: require('../Res/Img/wedding/3.jpg'),
      thumbnail: require('../Res/Img/wedding/3.jpg'),
      thumbnailWidth: 190,
      thumbnailHeight: 110,
    },
    {
      src: require('../Res/Img/wedding/4.jpg'),
      thumbnail: require('../Res/Img/wedding/4.jpg'),
      thumbnailWidth: 90,
      thumbnailHeight: 110,
    },
  ]
};

const photographers = [
  {
    id: 0,
    name: '兰蔻工作室',
    style: 'children',
    rating: 5,
    latestPost: "相机不是个冰冷的机器,它像笔一样, 使用它的人有多出色,它就有多出色,它可以 成为头脑和心灵的展现。" +
    "拿到一个新的机身或者镜头能够激发你对摄影的热情。如果你总是使用广角" +
    "或普通的镜头，或许可以试试长焦。试着从另一个视角去观察每个人物，即使相同的场景，" +
    "还是会捕捉到不同的幸福画面。",
    profileImg: require("../Res/Img/photographer/male1.jpg"),
    photos: [
      {
        src: require('../Res/Img/children/1.jpg'),
        thumbnail: require('../Res/Img/children/1.jpg'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/children/2.jpg'),
        thumbnail: require('../Res/Img/children/2.jpg'),
        thumbnailWidth: 70,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/children/7.jpg'),
        thumbnail: require('../Res/Img/children/7.jpg'),
        thumbnailWidth: 70,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/children/8.jpg'),
        thumbnail: require('../Res/Img/children/8.jpg'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/children/4.jpg'),
        thumbnail: require('../Res/Img/children/4.jpg'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      }
    ]
  },
  {
    id: 1,
    name: '孙旭',
    task: 'travel',
    rating: 4.5,
    latestPost: "一位摄影家如果愿意观察，愿意创造美好的形象，就必须认识非常熟悉的" +
    "寻常事物的价值。你的观察力并不会因为你远离家乡而加强。如果连终日出现在身边的事物都" +
    "视而不见，那么，你就跑到摩洛哥的丹吉尔去，又能看到什么呢？那里的拍摄题材可能迥然不同，" +
    "但如果你没有敏锐的观察力，不能获得题材的真谛，并通过照片加以表现，单靠拍摄地点的奇特是无济于事的。",
    profileImg: require("../Res/Img/photographer/male.jpeg"),
    photos: [
      {
        src: require('../Res/Img/travel/4.jpg'),
        thumbnail: require('../Res/Img/travel/4.jpg'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/travel/5.jpeg'),
        thumbnail: require('../Res/Img/travel/5.jpeg'),
        thumbnailWidth: 140,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/travel/3.jpeg'),
        thumbnail: require('../Res/Img/travel/3.jpeg'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/travel/7.jpg'),
        thumbnail: require('../Res/Img/travel/7.jpg'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      }
    ]
  },
  {
    id: 2,
    name: '董硕',
    task: 'business',
    rating: 4,
    latestPost: "我们拍摄合影都是双机拍。之前我会紧临受众提醒他们拍摄次数和每次的拍摄意图。" +
    "当我用击掌的方式提醒大家安静准备拍摄时，我已经站在主摄机的旁边请大家看镜头了。全部过程语言" +
    "组织紧凑、我的提醒与目的相结合，再配合以适当的动作在很短时间内会沟通得很好。现场会很安静、" +
    "有序。当然严肃活泼也是要的，尤其是你希望大家笑对镜头时。此时的提醒是幽默式的，用一句话足矣。",
    profileImg: require("../Res/Img/photographer/female.jpg"),
    photos: [
      {
        src: require('../Res/Img/business/1.JPG'),
        thumbnail: require('../Res/Img/business/1.JPG'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/business/2.JPG'),
        thumbnail: require('../Res/Img/business/2.JPG'),
        thumbnailWidth: 140,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/business/3.JPG'),
        thumbnail: require('../Res/Img/business/3.JPG'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      },
      {
        src: require('../Res/Img/business/4.JPG'),
        thumbnail: require('../Res/Img/business/4.JPG'),
        thumbnailWidth: 150,
        thumbnailHeight: 100,
      }
    ]
  }
];

const users = [
  {
    id: 0,
    name: 'cola',
    rank: 1,
    followersCount: 286572

  },
  {
    id: 1,
    name: 'sprite',
    rank: 2,
    followersCount: 195342

  },
  {
    id: 2,
    name: 'gantea',
    rank: 3,
    followersCount: 58915

  },
  {
    id: 3,
    name: 'mary',
    rank: 4,
    followersCount: 36455

  },
  {
    id: 4,
    name: 'kitie',
    rank: 5,
    followersCount: 25438

  },
  {
    id: 5,
    name: 'sandy',
    rank: 6,
    followersCount: 12511

  },
  {
    id: 6,
    name: 'banaba',
    rank: 7,
    followersCount: 5235

  },
  {
    id: 7,
    name: 'iphone',
    rank: 8,
    followersCount: 4319

  },
  {
    id: 8,
    name: 'xiaomi',
    rank: 9,
    followersCount: 3218

  },
  {
    id: 9,
    name: 'kitie',
    rank: 10,
    followersCount: 2900

  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superPhotographer,
      photographers,
      users,
      loggedInUser: null
    };

    this.login = this.login.bind(this);
  }

  login(user) {
    this.setState({loggedInUser: user});
  }

  render() {
    return (
      <div className="container-fluid">
        <Navigation/>

        <Home
          superPhotographer={this.state.superPhotographer}
          photographers={this.state.photographers}
          users={this.state.users}
          login={this.login}
        />

        <Footer/>
      </div>
    );
  }
}

export default App;
