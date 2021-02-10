import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Header from './components/Header';
import LifeCycleDemo1 from './components/LifeCycleDemo1';
import NavBar from './components/NavBar';
import ToDoManager from './components/ToDoManager';

const App = (props) =>  (
    <Router>
      <Header title={props.appTitle} />
      <NavBar />
      
      <Switch>
        <Route path="/" exact>
          <LifeCycleDemo1 />
        </Route>
        <Route path="/todos">
          <ToDoManager />
        </Route>
      </Switch>
    </Router>
  );
  
export default App;
