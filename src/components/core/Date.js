import React from 'react';

class Date extends React.Component {
    /*constructor(props){;
        super(props);
        this.state = {date: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({date: this.date});
    }*/

    render() {
        return(
            <div>
                <form onChange={this.handleChange}>
                <label>
                    Date:
                    <input type="date" date={this.props.date} onChange={this.handleChange} />
                </label>
                </form>
            </div>

        );
    }
}

export default Date;