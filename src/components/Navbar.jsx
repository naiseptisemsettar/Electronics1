import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { useContext, useState } from "react"; // أضفنا useState
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../styles/navbar.css";

export default function Navbar() {
  const { cartItems = [] } = useContext(CartContext) || {};
  const { wishlistItems = [] } = useContext(WishlistContext) || {};
  const { t } = useTranslation();

  // حالة للتحكم في فتح وإغلاق القائمة في الجوال
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMenu(false); // إغلاق القائمة عند النقر
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top main-nav-wrapper">
      <div className="container">
        
        {/* اللوغو */}
        <Link to="/" className="navbar-brand logo-brand" onClick={scrollToTop}>
          Ecom<span className="dot">.</span>
        </Link>

        {/* زر الهامبرغر للجوال */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaBars />
        </button>

        {/* القائمة القابلة للطي */}
        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto nav-links-list mb-0">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={scrollToTop}>{t("home")}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shop" onClick={scrollToTop}>{t("shop")}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/vendors" onClick={scrollToTop}>{t("vendors")}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog" onClick={scrollToTop}>{t("blog")}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact" onClick={scrollToTop}>{t("contact")}</Link></li>
          </ul>

          {/* الأيقونات واللغة */}
          <div className="nav-actions-area d-flex align-items-center gap-3">
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

      </div>
    </nav>
  );
}