import React from "react";
import './Todo.css'
const Todo =(
  {task : {description, id , done},
    handleDelete,
    handleDone,}
) =>{

  return(
    <div className='row'>
            <div className='col-md-8'>
                <span className={ done ? 'done' : 'unDone' }> {description}</span>
            </div>
            <img
                    style={{ width: `25px` }}
                    src={require('./assets/delete.png')}
                    alt='edit'
                    onClick={() => handleDelete(id)}
            />
          <div className='col-md-1 justify-content-center'>
                <img
                    style={{ width: `25px` }}
                    src={require('./assets/questionmark.jpeg')}
                    alt='done'
                    onClick={() => handleDone(id)}
                />
            </div>
    </div>
  )
}

export default Todo