import React, {Component} from 'react';
import AnimalsButton from '../AnimalsButton/AnimalsButton';

class Plants extends Component {

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>PLANTS</h1>
        <AnimalsButton />
      </div>
    )
  }
}

export default Plants;