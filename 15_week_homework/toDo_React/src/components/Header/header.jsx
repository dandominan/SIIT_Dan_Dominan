import React from 'react'

export default function Header() {
    return (
        <div style ={headerStyle}>
            <h1>TODO LIST</h1>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center'
}