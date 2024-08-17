import './App.css';
import MyComponent from './Components/FirstClassComponent/FirstClassComponent';
import Create from './Components/FirstFunctionalComponent/FirstFunctional Component';
import MyInfo from './Components/SecFunctionalComponentWithProps/WithProps';
import ClassProps from './Components/SecClassComponentWithProps/WithProps';
import SubscriptionComponent from './Components/StateFulComponent/StateComponent';
function App() {
  return (
    <div className="App">
      {/*
      //Task 1
      <MyComponent />
      //task 2
      <Create />
      //Task 3
      <MyInfo name="Ahmed Amin" age={23} skill="React" hobbies={["Gaming", "Singing", "Writng"]} />
      //Task 4
      <ClassProps course1="React.js" course2="JavaScript" children="I enjoyed learning these courses" />
      */}
      {/* Task 5 */}
      <SubscriptionComponent />
    </div>
  );
}

export default App;
