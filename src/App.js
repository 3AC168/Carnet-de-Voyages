import React from 'react';
import Date from './components/core/Date';
import Location from './components/core/Location';
import ExchangeRate from './components/core/ExchangeRate';
import Calculator from './components/core/Calculator';
import Total from './components/core/Total';

    
class App extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        date: '',
        input: '',
        value: ''
      }

      this.onDateChange = this.onDateChange.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onRateChange = this.onRateChange.bind(this);
    //const loggingIds = JSON.parse(localStorage.getItem('loggibgIds'));
    //this.loggingIds = loggingIds;

  }

  //calculteTotal

  onDateChange(event){
    this.setState({date: this.date});
  }

  onInputChange(event){
    this.setState({input: event.target.input});
  }

  onRateChange(event){
    this.setState({value: event.target.value});
  }
 
  render(){
    return (
      <div className="container">
          Hello !       
          <Date date={this.state.date} /> <Location input={this.state.input} /> 
          <ExchangeRate value={this.state.value} />
          <div>Logging : 
            <Calculator />
          </div>
          <div>Transport : 
            <Calculator />
          </div>
          <div>Food : 
            <Calculator />
          </div>

          <div>
            <Total />
          </div>
        
      </div>
    );
  }
}

export default App;































