import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { t } = useTranslation();
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4">{t("Your Wishlist")}</h2>
      {wishlistItems.length === 0 ? (
        <div className="text-center p-5">
          <p>{t("Your wishlist is empty")}</p>
          <Link to="/shop" className="btn btn-primary">{t("Go Shopping")}</Link>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>{t("Product")}</th>
                <th>{t("Price")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.img} alt="" style={{ width: '60px' }} />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-success me-2"
                      onClick={() => addToCart({ ...item, image: item.img, rating: 5 })}
                    >
                      {t("add_to_cart")}
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}