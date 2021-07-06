// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/*
const name=React.createElement('h1',{style:{color:"blue"}},"Debargha Das");
const address=React.createElement('h2',null,"Kolkata, India");
const phno=React.createElement('h2',null,"9007081469");
const city=React.createElement('h2',null,"Kolkata");
const tech=React.createElement('ol',null,[React.createElement("li",null,"JAVA"),React.createElement("li",null,"PYTHON"),
React.createElement("li",null,"JAVASCRIPT")]);
const hobbies=React.createElement('ol',null,[React.createElement("li",null,"Watching Anime"),React.createElement("li",null,"PYTHON"),
React.createElement("li",null,"Reading Detective Novels")]);
ReactDOM.render([name,address,phno,city,tech,hobbies],document.getElementById("root"));
*/
import React from 'react';
import Header from './Header';
import Posts from './Posts';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Posts />
    </div>
  );
};

export default App;

//export default App;
