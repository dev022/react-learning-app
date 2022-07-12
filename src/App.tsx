import React from 'react';
import { Component } from 'react';
import './App.css';
// import Counter from './components/counter';
// import CounterList from './components/counterList';
// import FinalCounterList from './components/finalCounterList';
// import SignUpForm from './components/signUp';
// import Navbar from './components/navbar';

// interface AppProps {

// }

// interface AppState {

// }

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("App- constructor");
  }

  componentDidMount() {
    console.log("App - mounted");
  }

  render() {
    console.log("App - rendered");
    return (
      // if you want to use multiple component / thing which will be return then.
      // way1 : all should be inside one main div
      // way2 : all should be inside React.Fragment

      <React.Fragment>
        {/* <CounterList /> */}
        {/* <Navbar />
          <div className='finalCounterListPage'>
              <FinalCounterList />
          </div>
          <div className='signUpPage'>
            <SignUpForm />
          </div> */}
      </React.Fragment>
    );
  }
}

export default App;