import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  listAdd=()=>{
    let textList = document.getElementById("text");
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(textList.value))
    ul.appendChild(li)
  }
  render(){
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
       <input id="text" type="text"/>
      <button onClick={this.listAdd} type="button">add</button>
      <ul id="list"></ul>
    </div>
  );}
}

export default App;

