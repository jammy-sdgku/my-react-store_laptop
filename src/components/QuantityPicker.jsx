import { useState } from 'react';
function QuantityPicker({
    initialQuantity = 1,
    minQuantity = 1,
    maxQuantity = 99,
    onChange = null,
    disabled = false
}) {
    const [quantity, setQuantity] = useState(initialQuantity);
    // Update quantity and notify parent component
    const updateQuantity = (newQuantity) => {
        // Ensure quantity stays within bounds
        const boundedQuantity = Math.max(minQuantity, Math.min(maxQuantity,
newQuantity));
    setQuantity(boundedQuantity);
    // Notify parent component of change
    if (onChange) {
        onChange(boundedQuantity);
    }
    };
    const increment = () => {
    if (quantity < maxQuantity) {
    updateQuantity(quantity + 1);
    }
    };
    const decrement = () => {
    if (quantity > minQuantity) {
    updateQuantity(quantity - 1);
    }
    };
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value) || minQuantity;
        updateQuantity(value);
    };
return (
    <div className={`quantity-picker ${disabled ? 'quantity-picker--disabled': ''}`}>
    <button
        type="button"
        className="quantity-picker__button quantity-picker__button--decrease"
        onClick={decrement}
        disabled={disabled || quantity <= minQuantity}
        aria-label="Decrease quantity"
    >
    −
    </button>
    <input
        type="number"
        className="quantity-picker__input"
        value={quantity}
        onChange={handleInputChange}
        min={minQuantity}
        max={maxQuantity}
        disabled={disabled}
        aria-label="Quantity"
    />
    <button
        type="button"
        className="quantity-picker__button quantity-picker__button--increase"
        onClick={increment}
        disabled={disabled || quantity >= maxQuantity}
        aria-label="Increase quantity"
    >+
    </button>
    {maxQuantity < 99 && (
    <span className="quantity-picker__max-notice">
    Max: {maxQuantity}
    </span>
    )}
    </div>
);
}
export default QuantityPicker;