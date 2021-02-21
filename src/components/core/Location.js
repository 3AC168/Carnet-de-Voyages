import React from 'react';

class Location extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {input: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({input: event.target.input});
    }*/

    render(){
        return(
            <div>
                <form onChange={this.handleChange}>
                <label>
                    Location : 
                    <input type="text" input={this.props.input} onChange={this.handleChange}/>
                </label> 
              </form>

            </div>
        );
    }
}

export default Location;