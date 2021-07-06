import React from 'react';
import ReactDOM from 'react-dom';

const name=React.createElement('h1',{style:{color:"blue"}},"Debargha Das");
const address=React.createElement('h2',null,"Kolkata, India");
const phno=React.createElement('h2',null,"9007081469");
const city=React.createElement('h2',null,"Kolkata");
const tech=React.createElement('ol',null,[React.createElement("li",null,"JAVA"),React.createElement("li",null,"PYTHON"),
React.createElement("li",null,"JAVASCRIPT")]);
const hobbies=React.createElement('ol',null,[React.createElement("li",null,"Watching Anime"),React.createElement("li",null,"PYTHON"),
React.createElement("li",null,"Reading Detective Novels")]);
ReactDOM.render([name,address,phno,city,tech,hobbies],document.getElementById("root"));
