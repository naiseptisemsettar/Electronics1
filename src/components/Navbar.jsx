import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../styles/navbar.css";

export default function Navbar() {
  
  const { cartItems = [] } = useContext(CartContext) || {};
  const { wishlistItems = [] } = useContext(WishlistContext) || {};
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar-custom fixed-top main-nav-wrapper">
      <div className="container d-flex align-items-center justify-content-between">
      
        <Link to="/" className="logo-brand" onClick={scrollToTop}>
          Ecom<span className="dot">.</span>
        </Link>

       
        <ul className="nav-links-list mb-0">
          <li><Link to="/" onClick={scrollToTop}>{t("home")}</Link></li>
          <li><Link to="/shop" onClick={scrollToTop}>{t("shop")}</Link></li>
          <li><Link to="/vendors" onClick={scrollToTop}> {t("vendors")}</Link></li>
          <li><Link to="/blog" onClick={scrollToTop}>{t("blog")}</Link></li>
          <li><Link to="/contact" onClick={scrollToTop}>{t("contact")}</Link></li>
        </ul>

      
        <div className="nav-actions-area d-flex align-items-center">
          <Link to="/wishlist" className="nav-icon-link" onClick={scrollToTop}>
            <div className="icon-badge-container">
              <FaHeart />
              
              <span className="count-badge">{wishlistItems.length}</span>
            </div>
          </Link>

          <Link to="/cart" className="nav-icon-link" onClick={scrollToTop}>
            <div className="icon-badge-container">
              <FaShoppingCart />
              <span className="count-badge">{cartItems.length}</span>
            </div>
          </Link>

          <div className="lang-box-nav">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}