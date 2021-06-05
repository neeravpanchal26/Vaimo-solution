// Default imports
import React, {Component} from "react";
import './App.css';

//Custom imports
import Routes from './routes/routes';
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className='App'><Routes/></div>
        )
    }
}

// State management
const mapStateToProps = (state) => {
    return state;
};

// Default export
export default connect(mapStateToProps)(App);
