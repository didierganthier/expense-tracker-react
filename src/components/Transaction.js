import React from 'react'

const Transaction = ({transaction}) => {
    return (
        <li className="minus">
            {transaction.text} <span>{transaction.amount > 0? "+" : "-"}${transaction.amount}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
