import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent';
import HocComponent from './HocComponent';

function App() {
  const WrappedComponent = HocComponent(TestComponent, {class_name: 'otherClass'});
  return (
    <div className="App">
      <TestComponent foo="bar" className="someClass">Insert Text</TestComponent>
      <br />
      <WrappedComponent foo="newBar" className="testClass">Insert HOC wrapped text</WrappedComponent>
      <br />
      <WrappedComponent className="testClass" render={mergedNames => (
        <p className={mergedNames}>Render prop example</p>
      )}/>
    </div>
  );
}

export default App;
