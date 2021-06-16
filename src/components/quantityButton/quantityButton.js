// Default imports
import React, {Component} from 'react';
import './quanityButton.scss';

class QuantityButton extends Component {
    // Default constructor
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    // Addition function
    handlePlus = () => {
        this.setState({count: this.state.count + 1}, function () {
            this.props.count({id: this.props.option, count: this.state.count, price: this.props.price});
        });
    };

    // Minus function
    handleMinus = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1}, function () {
                this.props.count({id: this.props.option, count: this.state.count, price: this.props.price});
            });
        }
    };

    // Value change function
    handleValueChange = (e) => {
        e.preventDefault();
        const regularExpression = /^[0-9\b]+$/;
        if (e.target.value === "" || regularExpression.test(e.target.value)) {
            this.setState({count: Number(e.target.value)});

        }
    };

    render() {
        return (
            <div className='row'>
                <div className='column product'>
                    {this.props.option}
                </div>
                <div className='column product'>
                    {this.props.currency}
                    {Number(this.props.price).toFixed(2)}
                </div>
                <div className='column'>
                    <button onClick={this.handleMinus}
                            className={this.state.count > 0 ? 'enableMinusButton' : 'minusButton'}>-
                    </button>
                    <input type="number" min="0" value={this.state.count} onChange={this.handleValueChange}
                           className='surface'/>
                    <button onClick={this.handlePlus} className='plusButton'>+</button>
                </div>
            </div>
        )
    };
}

// Default export
export default QuantityButton;