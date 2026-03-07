import React, { useContext, useState } from 'react';
import { CartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import { FaGooglePay, FaPaypal, FaAmazonPay } from "react-icons/fa";

export default function Checkout() {
  const { t } = useTranslation();
  // نستخدم مصفوفة فارغة كافتراض لضمان عدم حدوث خطأ
  const { cartItems = [] } = useContext(CartContext) || {};
  
  // دالة حساب المجموع محلياً (بدون الاعتماد على الكونتيكست)
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    postcode: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="container" style={{ marginTop: "120px", marginBottom: "50px", color: "#404c84" }}>
      <div className="row g-5">
        
        {/* القسم الأيسر: الدفع السريع والمعلومات */}
        <div className="col-lg-7">
          <div className="d-flex gap-2 mb-4 justify-content-between">
            <button type="button" className="btn border w-100 py-2 shadow-sm"><FaGooglePay size={30} color="#5F6368" /></button>
            <button type="button" className="btn border w-100 py-2 shadow-sm"><FaPaypal size={25} color="#003087" /></button>
            <button type="button" className="btn border w-100 py-2 shadow-sm"><FaAmazonPay size={30} color="#232F3E" /></button>
          </div>

          <div className="text-center mb-4 position-relative">
            <hr />
            <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 fw-bold text-muted">Or</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">Contact information</h5>
              <small>Already have an account? <a href="/login" className="text-decoration-none">Login</a></small>
            </div>
            
            <input type="email" name="email" className="form-control mb-2" placeholder="Email*" required onChange={handleChange} />
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="news" />
              <label className="form-check-label small text-muted" htmlFor="news">Keep me up to date on news and exclusive offers</label>
            </div>

            <h5 className="fw-bold mb-3">Shipping address</h5>
            <div className="row g-2 mb-2">
              <div className="col-md-6"><input type="text" name="firstName" className="form-control" placeholder="First name*" required onChange={handleChange} /></div>
              <div className="col-md-6"><input type="text" name="lastName" className="form-control" placeholder="Last name*" required onChange={handleChange} /></div>
            </div>
            <input type="text" name="address1" className="form-control mb-2" placeholder="Address 1*" required onChange={handleChange} />
            <input type="text" name="address2" className="form-control mb-2" placeholder="Address 2" onChange={handleChange} />
            
            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <select className="form-select text-muted" name="city" required onChange={handleChange}>
                  <option value="">Select an option...</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Riyadh">Riyadh</option>
                </select>
              </div>
              <div className="col-md-6"><input type="text" name="city-manual" className="form-control" placeholder="City*" required /></div>
            </div>

            <div className="row g-2 mb-4">
              <div className="col-md-6"><input type="text" name="postcode" className="form-control" placeholder="Postcode / ZIP*" required onChange={handleChange} /></div>
              <div className="col-md-6"><input type="tel" name="phone" className="form-control" placeholder="Phone*" required onChange={handleChange} /></div>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-3 fw-bold mt-3" style={{ backgroundColor: "#404c84", border: "none" }}>
              PLACE AN ORDER
            </button>
          </form>
        </div>

        {/* القسم الأيمن: ملخص الطلب */}
        <div className="col-lg-5 ps-lg-5">
          <h5 className="fw-bold mb-4">Your Order</h5>
          <div className="order-items-scroll pe-2" style={{ maxHeight: "400px", overflowY: "auto" }}>
            {cartItems.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-4 pb-3 border-bottom">
                <div className="position-relative me-3 border rounded p-1" style={{ width: "70px", backgroundColor: "#f8f9fa" }}>
                  <img src={item.image} alt={item.name} className="img-fluid rounded" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style={{ fontSize: "10px" }}>
                    x{item.quantity}
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="small fw-bold mb-1" style={{ color: "#404c84" }}>{item.name}</h6>
                  <div className="text-warning small mb-1" style={{fontSize: '10px'}}>
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    <span className="text-muted ms-1">(65)</span>
                  </div>
                </div>
                <div className="fw-bold text-nowrap">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="coupon-area d-flex gap-2 my-4">
            <input type="text" className="form-control" placeholder="Enter Your Coupon" />
            <button type="button" className="btn btn-dark px-4 shadow-sm">Apply</button>
          </div>

          <div className="summary-details mt-4 p-4 rounded border shadow-sm" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="d-flex justify-content-between mb-2 text-muted"><span>Subtotal</span><span className="fw-bold text-dark">${calculateTotal().toFixed(2)}</span></div>
            <div className="d-flex justify-content-between mb-2 text-muted"><span>Shipping</span><span className="text-success fw-bold">Free</span></div>
            <hr />
            <div className="d-flex justify-content-between fs-4 fw-bold" style={{ color: "#404c84" }}>
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}