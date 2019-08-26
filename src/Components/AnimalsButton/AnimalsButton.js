import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AnimalsButton extends Component {

    handleClick = () => {
        this.props.history.push('/animals');
    }

    render() {
        return (
            <button onClick={this.handleClick}>Go To Animals</button>
        )
    }
}

export default withRouter(AnimalsButton);