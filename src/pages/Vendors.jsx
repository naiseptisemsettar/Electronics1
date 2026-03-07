import { useTranslation } from "react-i18next";
import "../Style.css";
import { Link } from "react-router-dom";
import img12 from "../assets/images/img12.png";

export default function Vendors() {
  const { t } = useTranslation();

  const categories = [
    ["cat_computers", 9], ["cat_accessories", 12], ["cat_mainboard", 24],
    ["cat_bluetooth", 34], ["cat_mouse", 65], ["cat_headphone", 15],
    ["cat_gaming", 76], ["cat_watch", 89], ["cat_phone", 23]
  ];

  // بيانات الموردين (يمكنك تكرارها أو زيادة عددها)
  const vendorData = [
    { name: "Futur", products: 360, year: 2012, logo: "F", color: "#e91e63" },
    { name: "Elmado", products: 360, year: 2012, logo: "E", color: "#2196f3" },
    { name: "CostCtrl", products: 360, year: 2012, logo: "C", color: "#4caf50" },
    { name: "Fasfox", products: 360, year: 2012, logo: "F", color: "#ff9800" },
    
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const makeMoneyLinks = [
    "open_shop", "sell_services", "sell_business", 
    "sell_apps", "become_affiliate", "advertise_products", "sell_publish"
  ];

  return (
    <div className="vendors-container" style={{ backgroundColor: "#f8fafd", minHeight: "100vh" }}>
      
      {/* العنوان العلوي */}
      <header className="vendors-header-section" style={{ padding: "50px 8%", backgroundColor: "#fff", borderBottom: "1px solid #ebf0f5" }}>
        <h1 style={{ color: "#00215e", fontSize: "clamp(24px, 5vw, 38px)", fontWeight: "800", margin: 0 }}>Vendors Listing</h1>
        <p style={{ color: "#00215e", opacity: 0.7, fontSize: "16px", marginTop: "10px" }}>
          We have <span style={{ fontWeight: "900" }}>780</span> vendors now
        </p>
      </header>

      {/* الحاوية الرئيسية - استخدام Flex-wrap للـ Responsive */}
      <div className="main-flex-container" style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "40px", 
        padding: "40px 8%" 
      }}>
        
        {/* القائمة الجانبية */}
        <aside className="side-bar-area" style={{ width: "280px", flexGrow: 1, flexBasis: "250px" }}>
          <div style={{ backgroundColor: "#fff", borderRadius: "15px", padding: "25px", border: "1px solid #e1e8ef", marginBottom: "20px" }}>
            <h3 style={{ color: "#00215e", fontSize: "19px", fontWeight: "700", marginBottom: "25px", borderBottom: "2px solid #f0f4f8", paddingBottom: "10px" }}>
              Vendor by industry
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {categories.map(([key, count]) => (
                <li key={key} style={{ marginBottom: "18px" }}>
                  <Link to="#" onClick={scrollToTop} className="sidebar-link">
                    <span className="arrow">▸</span>
                    <span className="label">{t(key)}</span>
                    <span className="num">{count.toString().padStart(2, '0')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="shop-box product-tags-container" style={{ marginBottom: "20px" }}>
            <h5 className="tags-title">{t("product_tags")}</h5>
            <div className="orange-divider"></div>
            <div className="tags-grid">
              {[
                "Games", "Electronics", "Video", "Cellphone", "Indoor",
                "VGA Card", "USB", "Lightning", "Camera", "Window",
                "Air Vent", "Bedroom", "Laptop", "Dashboard", "Keyboard"
              ].map((tag, i) => (
                <Link key={i} to="/shop" className="tag-item-link" onClick={scrollToTop}>
                  {t(tag)} 
                </Link>
              ))}
            </div>
          </div>

          <div className="make-money-section">
            <h2 className="make-money-title">{t('make_money_title')}</h2>
            <div className="orange-line"></div>
            <ul className="make-money-list">
              {makeMoneyLinks.map((linkKey) => (
                <li key={linkKey} className="make-money-item">
                  <Link to="#" onClick={scrollToTop} className="make-money-link">
                    <span className="blue-arrow">▸</span>
                    {t(linkKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* المحتوى الرئيسي */}
        <main className="main-content-area" style={{ flex: "1 1 600px" }}>
          <div className="top-filter-bar" style={{ padding: "10px 15px", fontSize: "13px", marginBottom: "20px" }}>
            <div className="left-group" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button className="btn-filters" style={{ padding: "5px 12px", fontSize: "12px" }}>
                ▦ {t("all_filters")}
              </button>
              <span className="results-text" style={{ fontSize: "12px", color: "#00215e", opacity: 0.8 }}>
                {t("showing_results")}
              </span>
            </div>
            <div className="right-group" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span className="sort-label" style={{ color: "#00215e" }}>
                {t("sort_by")}: <strong style={{ cursor: "pointer" }}>{t("latest_added")} ▾</strong>
              </span>
              <div className="grid-btns" style={{ display: "flex", gap: "8px", borderLeft: "1px solid #ddd", paddingLeft: "10px" }}>
                <span className="grid-icon active" style={{ cursor: "pointer", color: "#ff6600" }}>▦</span>
                <span className="list-icon" style={{ cursor: "pointer", color: "#00215e", opacity: 0.5 }}>▤</span>
              </div>
            </div>
          </div>

          {/* شبكة الكروت الموحدة - Responsive Grid */}
          <div className="vendors-grid-responsive" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
            gap: "20px" 
          }}>
            {/* تم دمج كل الكروت هنا لضمان تماثل التصميم */}
            {[...vendorData, ...vendorData, ...vendorData].map((vendor, idx) => (
              <div key={idx} className="exact-vendor-card" style={{ padding: "15px", minHeight: "220px", fontSize: "13px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className="card-inner-top" style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div className="logo-section" style={{ display: "flex", gap: "10px" }}>
                      <div className="v-logo" style={{ width: "35px", height: "35px", fontSize: "18px", color: vendor.color, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #eee", borderRadius: "5px" }}>{vendor.logo}</div>
                      <div className="v-title-area">
                        <h4 className="v-name" style={{ fontSize: "15px", margin: 0 }}>{t(`vendor_name_${vendor.name.toLowerCase()}`)}</h4>
                        <div className="v-stars" style={{ fontSize: "10px", color: "#ffc107" }}>★★★★★ <span className="v-count" style={{ fontSize: "10px", color: "#666" }}>{t("rating_count")}</span></div>
                      </div>
                    </div>
                    <div className="v-products-badge" style={{ fontSize: "10px", padding: "2px 6px", backgroundColor: "#e8f0fe", color: "#00215e", borderRadius: "4px" }}>{vendor.products} {t("products")}</div>
                  </div>
                  
                  <div className="v-member-tag" style={{ fontSize: "10px", marginBottom: "12px", opacity: 0.6 }}>{t("member_since")} {vendor.year}</div>
                  
                  <div className="v-contact-info">
                    <div className="v-info-item" style={{ marginBottom: "6px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ fontSize: "12px" }}>📍</span>
                      <p style={{ margin: 0, fontSize: "11px", lineHeight: "1.3" }}>{t("vendor_address")}</p>
                    </div>
                    <div className="v-info-item" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "12px" }}>📞</span>
                      <p style={{ margin: 0, fontSize: "11px" }}>(+91) - 540-025-124553</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "15px" }}>
                  <button className="v-next-btn" style={{ width: "28px", height: "28px", fontSize: "14px", border: "none", borderRadius: "50%", cursor: "pointer" }}>→</button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-container" style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "5px", flexWrap: "wrap" }}>
            <button className="page-arrow" onClick={scrollToTop}>&lt;</button>
            <button className="page-num">1</button>
            <button className="page-num active-orange">2</button>
            <button className="page-num active-blue">3</button>
            <button className="page-num">4</button>
            <button className="page-num">5</button>
            <button className="page-num">6</button>
            <button className="page-arrow" onClick={scrollToTop}>&gt;</button>
          </div>
        </main>
      </div>

      {/* قسم الخدمات والفوتر يبقى كما هو بدون تغيير في المحتوى */}
      <div className="container-fluid px-lg-5 my-5">
        <div className="row g-4 mb-5 justify-content-center">
          {[
            { icon: "bi-truck", title: "service_free_delivery", desc: "service_free_delivery_desc" },
            { icon: "bi-headphones", title: "service_support", desc: "service_support_desc" },
            { icon: "bi-gift", title: "service_gift_voucher", desc: "service_gift_voucher_desc" },
            { icon: "bi-arrow-repeat", title: "service_return_refund", desc: "service_return_refund_desc" },
            { icon: "bi-lock", title: "service_secure_payment", desc: "service_secure_payment_desc" },
          ].map((service, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6">
              <div className="service-card-yellow">
                <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
                <h6 className="service-title">{t(service.title)}</h6>
                <p className="service-desc">{t(service.desc)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="subscribe-banner-blue p-5 rounded-4 position-relative overflow-hidden">
          <div className="row align-items-center">
            <div className="col-lg-7 text-white z-1">
              <h2 className="subscribe-title">{t("subscribe_title")}</h2>
              <p className="subscribe-subtitle">{t("subscribe_subtitle")}</p>
              <div className="input-group">
                <input type="email" className="form-control custom-input" placeholder={t("email_placeholder")} />
                <button className="btn btn-orange-final" type="button">{t("sign_up")}</button>
              </div>
            </div>
            <div className="col-lg-5 text-center position-relative z-1">
              <img src={img12} alt={t("promo_image_alt")} className="img-fluid banner-promo-img" />
            </div>
          </div>
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>
      </div>

      <footer className="footer-section bg-light py-5 mt-5 border-top">
        <div className="container-fluid px-lg-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-heading">{t("footer_contact")}</h5>
              <ul className="list-unstyled mt-4 contact-info">
                <li><strong>{t("footer_address_label")}</strong> {t("footer_address")}</li>
                <li className="mt-3"><strong>{t("footer_phone_label")}</strong> {t("footer_phone")}</li>
                <li className="mt-3"><strong>{t("footer_email_label")}</strong> {t("footer_email")}</li>
                <li className="mt-3"><strong>{t("footer_hours_label")}</strong> {t("footer_hours")}</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-heading">{t("footer_make_money")}</h5>
              <ul className="list-unstyled mt-4 footer-links">
                {["footer_mission", "footer_team", "footer_careers", "footer_advertising"].map((key, i) => (
                  <li key={i}><Link to="/" onClick={scrollToTop}><i className="bi bi-caret-right-fill"></i> {t(key)}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-heading">{t("footer_my_account")}</h5>
              <ul className="list-unstyled mt-4 footer-links">
                {["footer_faq", "footer_live_chat", "footer_contact_us", "footer_support"].map((key, i) => (
                  <li key={i}><Link to="/" onClick={scrollToTop}><i className="bi bi-caret-right-fill"></i> {t(key)}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-heading">{t("footer_app_payment")}</h5>
              <div className="app-download-buttons d-flex flex-column gap-2 mt-3">
                <Link to="/" className="btn btn-dark btn-sm text-start py-2 px-3">{t("footer_app_store")}</Link>
                <Link to="/" className="btn btn-dark btn-sm text-start py-2 px-3">{t("footer_google_play")}</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}