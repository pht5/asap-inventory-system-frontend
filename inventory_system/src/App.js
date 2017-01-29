import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  buttonClick() {
    console.log("login button clicked")
  }

  render() {

    var UsernameInput = React.createClass({
      getInitialState: function() {
        return {
          value: ""
        };
      },

      handleChange: function(evt) {
        this.setState({
          value: evt.target.value
        });
      },

      render: function() {
        return <input value={this.state.value} onChange={this.handleChange} />;
      }
    });


    return (

      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Login</h2>
      </div>

      Username: <UsernameInput />

      <button onClick={(e) => this.buttonClick(e)}>
        Log In
        </button>

      </div>
    );
  }
}

/*<p className="App-intro">
Two fields are gonna go here once I know what I am doing
</p>*/
export default App;
