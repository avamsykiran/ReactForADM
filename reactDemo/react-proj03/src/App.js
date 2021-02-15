import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import ItemForm from './components/ItemForm';

function App() {
  return (
    <Router>
      <Header title="Inventory" tagLine="a json-server,axios and react demo" />
      <Switch>
        <Route exact path="/">
          <ItemsList />
        </Route>
        <Route path="/add" component={ItemForm} />          
        <Route path="/edit/:id" component={ItemForm} />          
      </Switch>
    </Router>
  );
}

export default App;
