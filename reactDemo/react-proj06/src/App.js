import React from 'react';
import Header from './components/Header';
import ToDoManager from './components/ToDoManager';

const App = (props) =>  (
    <React.Fragment>
      <Header title={props.appTitle} />
      <ToDoManager />
    </React.Fragment>
  );
  
export default App;
