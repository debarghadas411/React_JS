import React from 'react';
import ReactDOM from 'react-dom';
function NameList(props){
    const myLists = props.myLists;
    const listItems = myLists.map((myList)=><li>{myList}</li>);
    return (
        <div>
            <h2>Rendering List inside component</h2>
            <ul>{listItems}</ul>
        </div>);
}
const myLists = ["Peter","Sachin","Kevin"];
ReactDOM.render(<NameList myLists={myLists}/>,document.getElementById("root"));

/*
in react Lists are just <li></li> tags which we used to print the array values using the arreayhelper method
key: it is used to show the index ammped with every array value insidethe array. you can have unique keys only but with different values
 */