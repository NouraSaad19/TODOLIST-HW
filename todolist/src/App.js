import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  // listAdd=()=>{
  //   let textList = document.getElementById("text");
  //   let ul = document.getElementById("list")
  //   let li = document.createElement("li")
  //   li.appendChild(document.createTextNode(textList.value))
  //   ul.appendChild(li)
  // }


  state={
    tasks: []
  }

  listAdd=()=>{
  
    this.setState({tasks: this.state.tasks.concat(document.getElementById("InputTask").value)});
  }
    
  
  render(){
    let todoList = this.state.tasks.map((task) => {
      return <li>{task}</li>
  
    });
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
       <input id="InputTask" type="text"/>
      <button onClick={this.listAdd} type="button">add</button>
      <ul>
        {todoList}
      </ul>
    </div>
  );}
}

export default App;

