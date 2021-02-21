import React from 'react'; 
import MoneyInput from './MoneyInput';


function toDollar(euro, money){          
    //const input = parseFloat(rate);      // ajouté
    return euro * 1.1;
}

function toEuro(dollar, money){             
    //const input = parseFloat(rate);         // ajouté
    return dollar / 1.1;                  // ExchangeRate value should be equal to dollar
}

function tryConvert(money, convert) {
    const input = parseFloat(money);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { money: '', exhange: '$'}; 

        this.handleDollarChange = this.handleDollarChange.bind(this);
        this.handleEuroChange = this.handleEuroChange.bind(this);
        
    } 

    handleDollarChange(money) {
        this.setState({exchange: '$', money});
    }

    handleEuroChange(money) {
        this.setState({exchange: 'E', money});
    }

    
    render(){        
        const exchange = this.state.exchange;
        const money = this.state.money;
        const dollar = exchange === 'E' ? tryConvert(money, toDollar) : money;
        const euro = exchange === '$' ? tryConvert(money, toEuro) : money;

        return(
            <div>                               
                <MoneyInput 
                    exchange="$" 
                    money={dollar}
                    onMoneyChange={this.handleDollarChange} />
                <MoneyInput 
                    exchange="E"
                    money={euro}
                    onMoneyChange={this.handleEuroChange} />
            </div>
        );
    }
}

export default Calculator; 