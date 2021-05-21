import React, { Component } from 'react';

class ExactGif extends Component {
constructor(props){
    super(props)
    this.state ={
        gif: ''
    }

}  
    render() {
        return (
            <div>
              <div><img src={this.props.gifURL}/></div>
            </div>
        );
    }
}

export default ExactGif;