import Header from './components/Header';
import ToDoManager from './components/ToDoManager';

const App = (props) =>  (
    <div>
      <Header title={props.appTitle} />
      <ToDoManager />
    </div>
  );
  
export default App;
