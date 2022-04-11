import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        description: 'Buy food!',
        done: false,
      },
      {
        id: 2,
        description: 'Pay for rent!',
        done: false,
      },
      {
        id: 3,
        description: 'Save the world man!',
        done: false,
      },
    ],
  };

  addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });

  doneTask = (id) =>
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === id ? { ...el, done: !el.done } : el
      ),
    });
    
    deleteTask = (id) =>
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id),
    });
  
  render() {
    
    return (
      <div className="App">
      
      <div className='row justify-content-center'>
            <h1>Here is a list of what you should do</h1>
        </div>

        <TodoList
          todos={this.state.tasks}
          handleDelete={this.deleteTask}
          handleDone={this.doneTask}
        />

        <AddTask handleAdd={this.addTask} />

      </div>
    )
  }
}



export default App;