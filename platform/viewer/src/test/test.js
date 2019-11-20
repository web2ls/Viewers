import React, {Component} from 'react';

class Test extends Component{
  handleClick = event => {
    console.log('Comcponent click');
  }

  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
}


export default Test;