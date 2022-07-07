import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
  return {
    count: state.counter
  }
}

// this is not needed
function App(props) {
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter props={props} />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default connect(mapStateToProps)(App);
