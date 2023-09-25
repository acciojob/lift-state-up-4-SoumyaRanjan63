import React from 'react';

const Child = ({items,removeItem}) => {
    return (
        <div className='child'>
            <ul>
               {
                items.map((item)=>(
                    <li key={item.id}>
                        <span id='itemName'>{item.name}</span>
                        <span id='itemPrice'>${item.price}</span>
                        <button onClick={()=>removeItem(item.id)}>Remove</button>
                    </li>
                ))
               }
            </ul>
        </div>
    );
}

export default Child;
