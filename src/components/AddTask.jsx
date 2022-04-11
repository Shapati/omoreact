import React, { Component } from 'react';

class addTask extends Component{

  state={
    desc: ''
  }

  render(){
    return(
      
      <div className='row mt-3'>
          <div className='col-md-10'>
            <input
              className='form-control'
              type='text'
              onChange={(e) => this.setState({ desc: e.target.value })}
            />
          </div>
          <div className='col-md-2'>
                    <img
                        style={{ width: `30px` }}
                        src={require('./assets/plus.png')}
                        alt='add'
                        onClick={ () =>
                            this.props.handleAdd({

                                id: Date.now(),

                                description: this.state.desc,
                                
                                done: false,
                            })
                        }
                    />
                </div>
      </div>
    
    )
  }
}

export default addTask