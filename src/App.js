//import logo from './logo.svg';
import './App.css';

import GithubLookupBar from './components/GithubLookup';
import GithubLookupSearch from './components/GithubLookupSearch';
function App() {
  return (
    <div className="App">

      <GithubLookupBar/>
      <GithubLookupSearch/>
    </div>
  );
}

export default App;
