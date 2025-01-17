import logo from './logo.svg';
import './Propstask';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Propstask from './Propstask'; 
import Statetask from './Statetask';
function App() {
  return (
    // <Firstcomponent name="React"/>
    // <Secondcomponent/>
    <div>
      <Propstask name="John Doe" age={30} location="New York" />
      <Propstask name="Jane Smith" age={25} location="London" />
    </div>
    // <Statetask/>

  );
}

export default App;
