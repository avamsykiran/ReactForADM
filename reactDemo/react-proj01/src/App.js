import './App.css';
import ArithmeticForm from './ArithmeticForm';
import TitleForm from './TitleForm';

var App = () => {
  return (
    <div>
      <header className="jumbotron">
        <h1>My First React Application</h1>
      </header>
      <TitleForm />
      <ArithmeticForm/>
    </div>
  );
}

export default App;
