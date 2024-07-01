import React, { useState } from 'react';
import { products } from '../../datas';
import './Products.css';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";

export default function Products() {
  const [productsData, setProductData] = useState(products);

  const productDelet = (productID) => {
    setProductData(productsData.filter(product => product.id !== productID));
  };

  return (
    <div className="Products">
      <h3 className="ProductTitle">Latest Products</h3>
      <table className="ProductsTable">
        <thead>
          <tr className="ProductTr">
            <th className="ProductTh">ID</th>
            <th className="ProductThData">NAME</th>
            <th className="ProductThPrice">Price</th>
            <th className="ProductTh">Action</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map(product => (
            <tr key={product.id} className="ProductTr">
              <td className="ProductId">
                <Link to={`/product/${product.id}`}>{product.id}</Link>
              </td>
              <td className="ProductData">
               <img src={product.avatar} className='ProductImg' alt={product.title} />
                <span className='ProductName'>{product.title}</span>
              </td>
              <td className="ProductPrice">{product.price}</td>
              <td className="ProductAction">
                <Link to={`/product/${product.id}`}><button className='editbtn'>Edit</button></Link>
                <AiOutlineDelete className='deletbtn' onClick={() => productDelet(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


