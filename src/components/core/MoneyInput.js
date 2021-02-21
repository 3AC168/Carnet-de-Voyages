import React from 'react'; 

const exchangeNames = {
    $: 'Dollar',
    E: 'Euro'
};


class MoneyInput extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {money: ''};  supprimé  à cause remonter l'état
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onMoneyChange(e.target.value); //avant: this.setState({money: e.targe.value}); à cause remonter l'état
    }

    render() {
        const money = this.props.money;  //avant: this.state.money;  à cause remonter l'état 
        const exchange= this.props.exchange;  //ajouté
        return(
            <fieldset style={{width:"220px"}}>
                <label>Enter the currency in {exchangeNames[exchange]} :</label>
                    <input value={money}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }

}

export default MoneyInput;