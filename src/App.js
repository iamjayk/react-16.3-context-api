import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component {
   state = {
      name: 'Ajay',
      age: 100,
      cool: true
    }
  render() {
    return (
        <MyContext.Provider value={{
          state: this.state,
          growAYearOlder: () => this.setState({ 
            age: this.state.age + 1 
          }),
        }}>
        {this.props.children}
        </MyContext.Provider>
      )
  }
}

const Family = (props) => (
  <div className="family">
  <Person />
  </div>
  )

class Person extends Component {
  render(){
    return (
      <div className="Person">
          <MyContext.Consumer>
              {(context) => (
                  <React.Fragment>
                  <p>Age: {context.state.age}</p>
                  <p>Name: {context.state.name}</p>
                  <button onClick={context.growAYearOlder}
                  >++</button>
                  </React.Fragment>
                )}
          </MyContext.Consumer>
      </div>
      )
  }  
}


class App extends Component {
 
  render() {
    return (
      <MyProvider>
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 16.3 Context API Example</h1>
        </header>
       
        <Family name={this.props.name}/>
      </div>
      </MyProvider>
    );
  }
}


export default App;
