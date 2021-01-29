// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = "Click me!";
  const labelText = "Enter name:";
  const style = {
    backgroundColor: 'blue',
    color: 'white'
  };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"></input>
      <button style={style}>{buttonText}</button>
    </div>
  );
}

// Create React component
ReactDOM.render(
  <App />,
  document.getElementById('root')
);