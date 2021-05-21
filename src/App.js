import './App.css';
import SmartHeader from './Components/SmartHeader'
import Footer from './Components/Footer'
import SearchBox from './Components/SearchBox';
import Random1 from './Components/Random1';
import Random2 from './Components/Random2';
// import { Router, Switch } from 'react-router';
// import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SearchAnime from './Components/SearchAnime';
import AnimeSongs from './Components/AnimeSongs';

function App() {
  return (
    <div className="App">
      <Router>
      <SmartHeader/>
      <Switch>
      <Route exact path='/' component ={SearchBox}/>
      <Route path='/byanime' component={SearchAnime}/>
      <Route path='/music' component={AnimeSongs} />
      </Switch>
      </Router>
      <Random1/>
      <Random2/>
      <Footer/>
      
    
    </div>
  );
}

export default App;
