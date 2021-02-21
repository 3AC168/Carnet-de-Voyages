import React from 'react';

export class Button extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.sum}>Press</button> 
            </div>
        )
    }
}

export default Button;