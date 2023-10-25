import React from "react";
import {PRODUCTS} from '../../products';
import Product from "./Product";
function Shop () {
    return (
        <div className="shop">
            <div className="shopName">
                <h1>Shop 1</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product)=>  <Product key={product.id} data={product} />) }
            </div>
        </div>
    );
}

export default Shop;