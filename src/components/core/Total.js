import React from 'react';
import Button from './Button.js';

class Total extends React.Component {
    sum() {

    }

    render(){
        return(
            <div>
                <form onChange={this.handleChange}>
                    <Button />
                    Total : 
                </form>
            </div>
        )
    }
}

export default Total;