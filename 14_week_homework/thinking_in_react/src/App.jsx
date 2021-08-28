import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FilterablePTable from './components/FilterableProductTable'

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className="App">
     <FilterablePTable products = {PRODUCTS}/>
    </div>
  )
}


export default App
