import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [createItem, setCreateItem] = useState([]);
    const [itemInput, setItemInput] = useState('');
    const [priceInput, setPriceInput] = useState('');

    const addItem = () => {
        if (itemInput && priceInput) {
            const newItem = {
                id: createItem.length + 1,
                name: itemInput,
                price: parseFloat(priceInput) || 0, // Parse and provide a default value
            };
            setCreateItem([...createItem, newItem]);
            setItemInput('');
            setPriceInput('');
        }
    }

    const removeItem = (itemId) => {
        setCreateItem(createItem.filter((item) => item.id !== itemId));
    }

    return (
        <div className='parent'>
            <label htmlFor="itemName">Item Name</label>
            <input type='text' id='itemName' value={itemInput} onChange={(e) => setItemInput(e.target.value)} />
            <label htmlFor="itemPrice">Item Price</label>
            <input type='text' id='itemPrice' value={priceInput} onChange={(e) => setPriceInput(e.target.value)} />
            <button onClick={addItem}>Add item</button>
            <Child items={createItem} removeItem={removeItem} />
        </div>
    );
}

export default Parent;
