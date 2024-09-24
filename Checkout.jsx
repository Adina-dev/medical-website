import React, { useState } from "react";
import "../Css/Checkout.css";
import {useNavigate} from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate();
  const initialCounts = [0, 0, 0]; // Initialize counts for each row
  const [counts, setCounts] = useState(initialCounts);

  const handleDecrement = (index) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index] = counts[index] - 1;
      setCounts(newCounts);
    }
  };

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] = counts[index] + 1;
    setCounts(newCounts);
  };
  const checkout = ()=>{
navigate("/Payment")
  }

  return (
    <div>
      <div class="content my-5 py-5">
        <div class="devideDIV border border-dark text-center py-3">
          <span className="fw-semibold">
            My Cart Shopping
            <div class="cartIconDIV"></div>
          </span>
        </div>

        <div class="cartMain mt-5">
          <table id="cartTable">
            <thead>
              <tr>
                <th className="text-start ps-5 fw-semibold">Item</th>
                <th className="fw-semibold">Price</th>
                <th className="fw-semibold">Quantity</th>
                <th className="fw-semibold">Subtotal</th>
                <th className=" ps-5 fw-semibold">Operate</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(initialCounts.length)].map((_, index) => (
                <tr key={index}>
                  <td class="goods">
                    <img
                      src="http://ww2.sinaimg.cn/mw690/005Tivpbjw1f4huqsnuevj30go0goabd.jpg"
                      alt=""
                    />
                    <span>
                      <a href="##" class="goodsTitle ms-3">
                        Product
                      </a>
                    </span>
                  </td>
                  <td class="price">200.63</td>
                  <td class="count">
                    <div className="d-flex">
                      <span
                        onClick={() => handleDecrement(index)}
                        class="reduce mb-0 d-flex align-item-center justify-content-center"
                      >
                        <p>-</p>
                      </span>
                      <span className="value border">{counts[index]}</span>
                      <span
                        onClick={() => handleIncrement(index)}
                        class="add d-flex align-item-center justify-content-center"
                      >
                        <p className="mb-0">+</p>
                      </span>
                    </div>
                  </td>
                  <td class="subtotal">200.63</td>
                  <td class="opration ps-5">
                    <span class="deleteOne ms-5">Delete</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="last mt-2">
          <p className="fw-semibold">Total: Rs.000</p>
          <button onClick={checkout} className="bg-primary border-0 text-white py-2 px-4">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
