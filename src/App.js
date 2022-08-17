import './App.css';
import {Header} from './Header';
import {InputAge} from './inputAge';
import {useState} from 'react';
import {Users} from './Users';

function App() {

  const [age, setAge] = useState();

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="App">
      <Header/>
      <hr/>
      <p className="title"> Age input</p>
      <input type="number" className="myInput" placeholder="Enter your age" onChange={handleAgeChange}/>
      <InputAge yourAge={age}/>
      <hr/>
      <Users/>
    </div>
  );
}

export default App;
