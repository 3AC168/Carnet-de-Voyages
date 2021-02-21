import React from 'react';

class ExchangeRate extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});        
    }*/
    
    render(){
        //const exchangeRate = this.props.exchangeRate; // ajouté
        return(
            <div>
                <form onChange={this.handleChange}>
                    <label>
                        for 1 € =
                        <input  value={this.props.value} onChange={this.handleChange}/>$ 
                    </label>
                </form>              
            </div>
        );
    }
}

export default ExchangeRate;