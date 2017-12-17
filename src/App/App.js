import React, {Component} from 'react';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const photographers = [
    {
        id: 0,
        name: 'SunXu',
        style: 'wedding',
        rating: 5,
        latestPost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
        "penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        photos: [
            {
                src: "https://placeimg.com/480/480/animals",
                thumbnail: "https://placeimg.com/480/480/animals",
                thumbnailWidth: 480,
                thumbnailHeight: 480,
            },
            {
                src: "https://placeimg.com/480/320/animals",
                thumbnail: "https://placeimg.com/480/320/animals",
                thumbnailWidth: 480,
                thumbnailHeight: 320,
            }
        ]
    },
    {
        id: 1,
        name: 'DongShuo',
        task: 'business',
        rating: 4.5,
        latestPost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
        "penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        photos: [
            {
                src: "https://placeimg.com/360/480/animals",
                thumbnail: "https://placeimg.com/360/480/animals",
                thumbnailWidth: 360,
                thumbnailHeight: 480,
            },
            {
                src: "https://placeimg.com/360/360/animals",
                thumbnail: "https://placeimg.com/360/360/animals",
                thumbnailWidth: 360,
                thumbnailHeight: 360,
            },
            {
                src: "https://placeimg.com/240/360/animals",
                thumbnail: "https://placeimg.com/240/360/animals",
                thumbnailWidth: 240,
                thumbnailHeight: 360,
            },
        ]
    },
    {
        id: 2,
        name: 'LanCo',
        task: 'family',
        rating: 4,
        latestPost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
        "penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        photos: [
            {
                src: "https://placeimg.com/320/320/animals",
                thumbnail: "https://placeimg.com/320/320/animals",
                thumbnailWidth: 320,
                thumbnailHeight: 320,
            },
            {
                src: "https://placeimg.com/480/320/animals",
                thumbnail: "https://placeimg.com/480/320/animals",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
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
                    photographers = {this.state.photographers}
                    users = {this.state.users}
                    login={this.login}
                />

                <Footer/>
            </div>
        );
    }
}

export default App;
