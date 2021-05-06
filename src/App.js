import Home from './components/Home';
import Details from './components/Details';
import {Route, Switch} from 'react-router-dom';

const App = () => {

  return(
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/details" component={Details} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
