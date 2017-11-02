import React, {Component} from 'react';
import Home from './Home';
import Navigation from '../Navigation/Navigation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <Home/>
            </div>
        );
    }
}

export default App;
