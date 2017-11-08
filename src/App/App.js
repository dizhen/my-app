import React, {Component} from 'react';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const photographers = [
    {
        id: 0,
        name: 'SunXu',
        style: 'wedding',
        rating: 5
    },
    {
        id: 1,
        name: 'DongShuo',
        task: 'business',
        rating: 4.5
    },
    {
        id: 2,
        name: 'LanCo',
        task: 'family',
        rating: 4
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photographers
        };
    }

    render() {
        return (
            <div className="App">
                <Navigation/>
                <Home
                    photographers = {this.state.photographers}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
