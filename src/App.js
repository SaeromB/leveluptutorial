import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    toggle: true
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img scr={logo} className="App-logo" alt="logo" />
            <Welcome text="This is React"/>
        </header>
          <p className="App-intro">This is props</p>
            {this.state.toggle &&
            <p>This should show and hide</p>
            }
          <button>Show / Hide</button>
      </div>
    )
  }
}

class Welcome extends Component {
  render(){
    const{text}=this.props;
    return(
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;