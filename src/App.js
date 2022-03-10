import logo from './logo.svg';
import Contact from './Components/Contact';
import Education from './Components/Education';
import LandingPage from './Components/LandingPage';
import LandingPageDemo from './Components/LandingPageDemo';
import Preview from "./Components/Preview"
import SamplePreview from './Components/SamplePreview';
import WorkHistory from './Components/WorkHistory';
import NavBar from './Components/NavBar';
import Firebasetest from './Firebasetest';
import Register from './Components/register';
import Signin from './Components/Signin';
import Signout from './Components/Signout';
import Templates from "./Components/Templates";
import DummyPreview from "./Components/DummyPreview";
// import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,Switch,Link
 } from 'react-router-dom';
import Store from "./Store"
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

<Switch>

<Route path="/" exact component={LandingPage}></Route>
<Route path="/land" exact component={LandingPageDemo}></Route>
<Route path="/contact" exact component={Contact}></Route>
<Route path="/education" exact component={Education}></Route>
<Route exact path="/preview" component={SamplePreview}></Route>
<Route exact path="/final" component={Preview}></Route>
<Route exact path="/workhistory" component={WorkHistory}></Route>
<Route exact path="/test" component={Firebasetest}></Route>
<Route exact path="/Register" component={Register}></Route>
<Route exact path="/templates" component={Templates}></Route>
<Route exact path="/signout" component={Signout}></Route>
<Route exact path="/signin" component={Signin}></Route>
<Route exact path="/dummy" component={DummyPreview}></Route>
      {/* <Contact></Contact> */}
</Switch>
    </div>
  );
}

export default App;
