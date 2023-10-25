import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import {PRODUCTS} from '../../products';
import {Product} from './product';
import './Shop.css';

function Shop() {

    return (
        <div className='Shop'>
            <h1>The Shop List</h1>
            <ul className="shop-list">
                <li className="shop-item">
                    <Link to="/shop1" className="shop-link">Shop 1</Link>
                    <div className='products'>{PRODUCTS.map((product)=> < Product data={product}/>)}</div>
                </li>
                <li className="shop-item">
                    <Link to="/shop2" className="shop-link">Shop 2</Link>
                </li>
                <li className="shop-item">
                    <Link to="/shop3" className="shop-link">Shop 3</Link>
                </li>
                <li className="shop-item">
                    <Link to="/shop4" className="shop-link">Shop 4</Link>
                </li>
            </ul>

        </div>
    );
}

export default Shop;