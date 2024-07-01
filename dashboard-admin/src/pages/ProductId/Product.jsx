import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import { productsData } from '../../datas'
import { MdPublish } from "react-icons/md";

export default function Product() {
  return (
    <div className='product'>

        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
        <button className='productAddButton'>Create</button>
        </Link>
        </div>


        <div className="productTop">
            <div className="productTopLeft">
             <Chart title="Sale In Month" data={productsData} dataKey="sales"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="/images/asus.jpg" alt="" className='productInfoImg' />
                     <span className="productName">Dell Laptop</span>
                </div>
                <div className="productInfoButton">
                    <div className="productInfoItem">
                        <div className="ProductInfoKey">ID:</div>
                        <div className="ProductInfoValue">132</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="ProductInfoKey">Name:</div>
                        <div className="ProductInfoValue">Dell laptop</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="ProductInfoKey">Sales:</div>
                        <div className="ProductInfoValue">$90000</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="ProductInfoKey">Active:</div>
                        <div className="ProductInfoValue">Yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="ProductInfoKey">In Stock:</div>
                        <div className="ProductInfoValue">No</div>
                    </div>
                </div>
            </div>
          

        </div>

        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Dell Laptop'/>

                    <label>In Stock</label>
                    <select id='inStock'>
                      <option value="yes">Yes</option>  
                      <option value="no">No</option>  
                    </select >
                    <label>Active</label>
                    <select id='inStock'>
                      <option value="yes">Yes</option>  
                      <option value="no">No</option>  
                    </select >
                </div>
                <div className="productFormRight">
                    <div className="productUploader">
                        <img src="/images/asus.jpg" alt="profile photo" className='productUploaderImg' />
                      <label><MdPublish /></label>
                      <input type="file" style={{display:"none"}} />
                    </div>
                    <button className='productButton'>Upload(edit)</button>
                </div>
            </form>
        </div>
    </div>
  )
}