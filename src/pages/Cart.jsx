import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../Style.css";

export default function Cart() {
  const { t } = useTranslation();
  // سحب البيانات والدوال من السياق
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container-main">
        <div className="cart-table-header">
          <div className="col-check-prod">{t("Product")}</div>
          <div className="col-common">{t("Unit Price")}</div>
          <div className="col-common">{t("Quantity")}</div>
          <div className="col-common">{t("Subtotal")}</div>
          <div className="col-action">{t("Remove")}</div>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-5 text-center"><h3>{t("Your cart is empty")}</h3></div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-product-row">
              <div className="col-check-prod prod-details">
                <img src={item.image} alt="product" className="cart-img-preview" />
                <div className="prod-text">
                  <p className="prod-title">{item.name}</p>
                  <div className="prod-stars">{"★".repeat(item.rating)}</div>
                </div>
              </div>
              <div className="col-common price-val">${item.price.toFixed(2)}</div>
              <div className="col-common">
                <div className="qty-selector">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <div className="col-common total-val">${(item.price * item.quantity).toFixed(2)}</div>
              <div className="col-action">
                <button className="remove-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
              </div>
            </div>
          ))
        )}

        <div className="cart-actions-bottom">
          <Link to="/shop" className="btn-continue-shopping">← {t("Continue shopping")}</Link>
        </div>
      </div>

      <div className="cart-summary-sidebar">
        <div className="summary-item"><span>Subtotal</span><span className="value">${subtotal.toFixed(2)}</span></div>
        <div className="summary-item"><span>Shipping</span><span className="value-free">Free</span></div>
        <hr />
        <div className="summary-item total-final"><span>Total</span><span className="value-total">${subtotal.toFixed(2)}</span></div>
        <Link to="/checkout" className="btn-proceed-checkout">Proceed To CheckOut</Link>
      </div>
    </div>
  );
}