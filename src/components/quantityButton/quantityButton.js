// Default imports
import React, {useState} from 'react';
import './quanityButton.scss';

const QuantityButton = (props) => {
    // Default state
    const [count, setCount] = useState(0);

    // Addition function
    function handlePlus() {
        if (count === 0) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
    }

    // Minus function
    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    // Value change function
    function handleValueChange(e) {
        e.preventDefault();
        const regularExpression = /^[0-9\b]+$/;
        if (e.target.value === "" || regularExpression.test(e.target.value)) {
            const x = Number(e.target.value);
            setCount(x);
        } else {
        }
    }

    return (
        <div className='row'>
            <div className='column product'>
                {props.option}
            </div>
            <div className='column product'>
                {props.currency}
                {props.price}
            </div>
            <div className='column'>
                <button onClick={handleMinus} className={count > 0 ? 'enableMinusButton' : 'minusButton'}>-
                </button>
                <input type="number" min="0" value={count} onChange={handleValueChange} className='surface'/>
                <button onClick={handlePlus} className='plusButton'>+</button>
            </div>
        </div>
    )
};

// Default export
export default QuantityButton;