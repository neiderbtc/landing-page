import React from 'react';

const ItemPrice = ({ text }: { text: string }) => {
    return (
        <li className="border-b py-4">{text} </li>
    )
}

export default ItemPrice;