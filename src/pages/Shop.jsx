import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext"; // استيراد المفضلة
import "../Style.css";

// استيراد الصور
import bannerImg from "../assets/images/img12.png";
import img1 from "../assets/images/img1.avif";
import img2 from "../assets/images/img2.avif";
import img3 from "../assets/images/img3.avif";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Shop() {
  const { t } = useTranslation();
  
  // استدعاء السياق (Context) للسلة والمفضلة
  const { addToCart } = useContext(CartContext);
  const { wishlistItems = [], toggleWishlist } = useContext(WishlistContext) || {};

  const [minPrice, setMinPrice] = useState(51);
  const [maxPrice, setMaxPrice] = useState(149);
  const [activeColor, setActiveColor] = useState("red");

  // المصفوفات الجانبية (كما هي في كودك)
  const categories = [["cat_computers", 9], ["cat_accessories", 12], ["cat_mainboard", 24], ["cat_bluetooth", 34], ["cat_mouse", 65], ["cat_headphone", 15], ["cat_gaming", 76], ["cat_watch", 89], ["cat_phone", 23]];
  const priceOptions = [["price_free_100", 145], ["price_100_200", 56], ["price_200_400", 23], ["price_400_600", 43], ["price_600_800", 65], ["price_over_1000", 56]];
  const brands = [["brand_apple", 12], ["brand_sony", 34], ["brand_toshiba", 56], ["brand_asus", 78], ["brand_samsung", 23]];
  const colors = [["red", "#e74c3c"], ["green", "#2ecc71"], ["blue", "#3498db"], ["purple", "#9b59b6"], ["black", "#2c3e50"], ["gray", "#bdc3c7"], ["pink", "#f78fb3"], ["brown", "#8e5a2a"], ["yellow", "#f1c40f"]];

  // دالة الإضافة للسلة
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: t(product.name),
      price: parseFloat(product.price),
      image: product.img,
      rating: 5
    });
  };

  // المنتجات الأساسية (3 منتجات)
  const baseProducts = [
    { id: 1, brand: "brand_apple", name: "product_imac_2022", price: 2856.3, oldPrice: 3225.6, img: img4, discount: "-17%" },
    { id: 2, brand: "brand_philips", name: "product_philips_headphones", price: 154.0, oldPrice: 162.5, img: img5, discount: "-17%" },
    { id: 3, brand: "brand_apple", name: "product_macbook_air_2020", price: 2325.3, oldPrice: 2225.6, img: img6, discount: "-17%" },
  ];

  // تكرار المنتجات 8 مرات (إجمالي 24 منتج، تظهر 3 في كل صف)
  const allProducts = Array.from({ length: 8 }).flatMap((_, i) => 
    baseProducts.map(p => ({ ...p, id: p.id + (i * 100) }))
  );

  return (
    <div className="container-fluid px-lg-5 my-5">
      <div className="row g-4">
        {/* ================= LEFT (Sidebar) ================= */}
        <div className="col-lg-3">
          {/* Categories */}
          <div className="shop-box">
            <h5>{t("product_categories")}</h5>
            <ul>
              {categories.map(([key, count], i) => (
                <li key={i}>
                  <Link to="/shop">
                    <span><i className="bi bi-chevron-right"></i>{t(key)}</span>
                    <span className="count">{count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Section */}
          <div className="shop-box">
            <h5>{t("price")}</h5>
            <div className="price-slider">
              <input type="range" min="0" max="1000" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
              <input type="range" min="0" max="1000" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            </div>
            <p className="price-text">{t("price_range")} ${minPrice} - ${maxPrice}</p>
            {priceOptions.map(([key, count], i) => (
              <label key={i} className="check-row">
                <input type="checkbox" /><span className="check-ui"></span>{t(key)}<span className="count">{count}</span>
              </label>
            ))}
          </div>

          {/* Brands */}
          <div className="shop-box">
            <h5>{t("brands")}</h5>
            {brands.map(([key, count], i) => (
              <label key={i} className="check-row">
                <input type="checkbox" defaultChecked={i === 0} /><span className="check-ui orange"></span>{t(key)}<span className="count">{count}</span>
              </label>
            ))}
          </div>

          {/* Colors */}
          <div className="shop-box">
            <h5>{t("color")}</h5>
            <div className="color-grid">
              {colors.map(([name, hex]) => (
                <div key={name} className={`color-dot ${activeColor === name ? "active" : ""}`} style={{ background: hex }} onClick={() => setActiveColor(name)} title={t(`color_${name}`)}></div>
              ))}
            </div>
          </div>

          {/* Best Seller */}
          <div className="shop-box best-seller">
            <h5>{t("best_seller")}</h5>
            {[img1, img2, img3].map((img, i) => (
              <Link to="/shop" key={i} className="seller-item" onClick={scrollToTop}>
                <img src={img} alt="product" />
                <div>
                  <p className="title">HP Slim Desktop</p>
                  <div className="stars">★★★★★ <span>(65)</span></div>
                  <div className="price"><span className="new">$150</span><span className="old">$187</span></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tags */}
          <div className="shop-box product-tags-container">
            <h5 className="tags-title">{t("product_tags")}</h5>
            <div className="orange-divider"></div>
            <div className="tags-grid">
              {["Games", "Electronics", "Video", "Cellphone", "Indoor", "VGA Card", "USB", "Lightning", "Camera", "Window", "Air Vent", "Bedroom", "Laptop", "Dashboard", "Keyboard"].map((tag, i) => (
                <Link key={i} to="/shop" className="tag-item-link" onClick={scrollToTop}>{t(tag)}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT (Products) ================= */}
        <div className="col-lg-9">
          <Link to="/shop" className="shop-banner">
            <div>
              <h3> {t("iphone_title")}</h3>
              <p>{t("iphone_subtitle")}</p>
              <small>{t("iphone_models")}</small>
            </div>
            <img src={bannerImg} alt="iphone" />
          </Link>
          <hr />

          <div className="row g-4 justify-content-center">
            {allProducts.map((product) => (
              /* col-lg-4 لضمان ظهور 3 كروت في الصف الواحد */
              <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="product-card-custom position-relative">
                  
                  {/* زر القلب (التفضيل) المضاف حديثاً */}
                  <div 
                    className="wishlist-heart-btn"
                    onClick={() => toggleWishlist({ id: product.id, name: t(product.name), price: product.price, img: product.img })}
                    style={{
                      position: 'absolute', top: '15px', right: '15px', zIndex: '10',
                      cursor: 'pointer', background: 'white', borderRadius: '50%',
                      width: '35px', height: '35px', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                  >
                    <i className={`bi ${wishlistItems.some(item => item.id === product.id) ? 'bi-heart-fill text-danger' : 'bi-heart'}`} style={{ fontSize: '1.2rem' }}></i>
                  </div>

                  <span className="discount-tag">{product.discount}</span>
                  <div className="product-img-box">
                    <img src={product.img} alt={t(product.name)} className="img-fluid" />
                  </div>
                  <div className="product-details">
                    <span className="brand-label">{t(product.brand)}</span>
                    <h4 className="product-main-name">{t(product.name)}</h4>
                    <div className="rating-stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      <span className="rating-num">(65)</span>
                    </div>
                    <div className="price-section">
                      <span className="new-price">${product.price}</span>
                      <span className="old-price-slashed">${product.oldPrice}</span>
                    </div>
                    
                    <button 
                      className="btn btn-add-to-cart-custom w-100 mt-3"
                      onClick={() => handleAddToCart(product)}
                    >
                      {t("add_to_cart")}
                    </button>

                    <ul className="tech-specs-list list-unstyled mt-3">
                      <li>• {t("spec_display_5k")}</li>
                      <li>• {t("spec_cpu_i5")}</li>
                      <li>• {t("spec_gpu_amd")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}