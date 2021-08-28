import React from 'react';
import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';
import './FilterablePTable.css';

class FilterablePTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText:'',
            inStockOnly: false,
            products: this.props.products
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly,
            products: this.filterProducts(inStockOnly, this.state.filterText)
        });
    }

    filterProducts(inStockOnly, text){
        var newProducts = this.props.products.filter((product)=>{
            if(!inStockOnly || inStockOnly && product.stocked) {
                return product;
            }
        });
        return newProducts;
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange} />
                <ProductTable
                    // products={PRODUCTS}
                    products = {this.state.products}
                    filterText={this.state.filterText}
                    // inStockOnly={this.state.inStockOnly} 
                    />
            </div>
        );
    }
}



// ReactDOM.render(
//     <FilterablePTable products = {PRODUCTS}/>,
//     document.getElementById('container')
// );
export default FilterablePTable;