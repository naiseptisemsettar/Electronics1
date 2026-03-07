import { useTranslation } from "react-i18next";
import "../Style.css";
import { Link } from "react-router-dom";


import img1 from "../assets/images/img1.avif";
import img2 from "../assets/images/img2.avif";
import img3 from "../assets/images/img3.avif";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";

export default function Blog() {
  const { t } = useTranslation();

  const blogPosts = [
    { id: 1, image: img1, category: t("TECHNOLOGY"), title: t("POST_IPHONE"), date: t("AUG_30_2022"), readTime: t("READ_4_MIN") },
    { id: 2, image: img2, category: t("TECHNOLOGY"), title: t("POST_WALMART"), date: t("AUG_30_2022"), readTime: t("READ_4_MIN") },
    { id: 3, image: img3, category: t("TECHNOLOGY"), title: t("POST_FED"), date: t("AUG_30_2022"), readTime: t("READ_4_MIN") },
    { id: 4, image: img4, category: t("TECHNOLOGY"), title: t("POST_AMAZON"), date: t("AUG_30_2022"), readTime: t("READ_4_MIN") },
    { id: 5, image: img5, category: t("TECHNOLOGY"), title: t("POST_AI_FUTURE"), date: t("SEP_05_2022"), readTime: t("READ_5_MIN") },
    { id: 6, image: img6, category: t("TECHNOLOGY"), title: t("POST_SMART_HOME"), date: t("SEP_12_2022"), readTime: t("READ_3_MIN") },
    { id: 7, image: img7, category: t("TECHNOLOGY"), title: t("POST_EV_TRENDS"), date: t("OCT_01_2022"), readTime: t("READ_6_MIN") },
    { id: 8, image: img8, category: t("TECHNOLOGY"), title: t("POST_GADGETS"), date: t("OCT_10_2022"), readTime: t("READ_4_MIN") },
    { id: 9, image: img9, category: t("TECHNOLOGY"), title: t("POST_AI_FUTURE"), date: t("SEP_05_2022"), readTime: t("READ_5_MIN") },
    { id: 10, image: img10, category: t("TECHNOLOGY"), title: t("POST_SMART_HOME"), date: t("SEP_12_2022"), readTime: t("READ_3_MIN") },
    { id: 11, image: img11, category: t("TECHNOLOGY"), title: t("POST_EV_TRENDS"), date: t("OCT_01_2022"), readTime: t("READ_6_MIN") },
    { id: 12, image: img12, category: t("TECHNOLOGY"), title: t("POST_GADGETS"), date: t("OCT_10_2022"), readTime: t("READ_4_MIN") }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-page-container" style={{ backgroundColor: "#f8fafd", minHeight: "100vh", paddingBottom: "50px" }}>
      <div className="blog-top-bar">
        <div className="left-side">
          <h1 className="blog-main-title">{t("BLOGS")}</h1>
        </div>

        <div className="right-side">
          <span className="results-count">{t("SHOWING_RESULTS")}</span>

          <div className="filter-group">
            <span className="filter-label">{t("SORT_BY")} </span>
            <button className="filter-dropdown" onClick={scrollToTop}>
              {t("LATEST_POSTS")} ▾
            </button>
          </div>

          <div className="view-icons">
            <span className="icon active">▦</span>
            <span className="icon">▤</span>
          </div>
        </div>
      </div>

   
      <div className="blog-grid-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image-wrapper" onClick={scrollToTop}>
              <img src={post.image} alt={post.title} className="blog-img" />
              <div className="image-overlay"></div>
            </div>

            <div className="blog-content">
              <Link to="/blog" className="blog-category" onClick={scrollToTop}>
                <span className="dot">•</span> {post.category}
              </Link>

              <Link to="/blog" className="blog-post-title" onClick={scrollToTop}>
                <h3>{post.title}</h3>
              </Link>

              <div className="blog-footer">
                <span className="post-date">{post.date}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="silver-footer-section">
        <div className="promo-side-img">
          <img src={img5} alt="Promo Left" />
        </div>

        <div className="promo-center-content">
          <h2>{t("PROMO_TITLE")}</h2>
          <p>{t("PROMO_DESC")}</p>
          <button className="promo-btn">{t("PROMO_BUTTON")}</button>
        </div>

        <div className="promo-side-img">
          <img src={img6} alt="Promo Right" />
        </div>
      </div>

      <div className="blog-grid-container mt-5">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image-wrapper" onClick={scrollToTop}>
              <img src={post.image} alt={post.title} className="blog-img" />
              <div className="image-overlay"></div>
            </div>

            <div className="blog-content">
              <Link to="/blog" className="blog-category" onClick={scrollToTop}>
                <span className="dot">•</span> {post.category}
              </Link>

              <Link to="/blog" className="blog-post-title" onClick={scrollToTop}>
                <h3>{post.title}</h3>
              </Link>

              <div className="blog-footer">
                <span className="post-date">{post.date}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
<div className="pagination-container">
  <button className="page-arrow" onClick={scrollToTop}>
    &lt;
  </button>
  
  <button className="page-num" onClick={scrollToTop}>1</button>
  <button className="page-num active-orange" onClick={scrollToTop}>2</button>
  <button className="page-num active-blue" onClick={scrollToTop}>3</button>
  <button className="page-num" onClick={scrollToTop}>4</button>
  <button className="page-num" onClick={scrollToTop}>5</button>
  <button className="page-num" onClick={scrollToTop}>6</button>
  
  <button className="page-arrow" onClick={scrollToTop}>
    &gt;
  </button>
</div>

<div className="container-fluid px-lg-5 my-5">


  <div className="row g-4 mb-5 justify-content-center">
    {[
      { icon: "bi-truck", title: "service_free_delivery", desc: "service_free_delivery_desc" },
      { icon: "bi-headphones", title: "service_support", desc: "service_support_desc" },
      { icon: "bi-gift", title: "service_gift_voucher", desc: "service_gift_voucher_desc" },
      { icon: "bi-arrow-repeat", title: "service_return_refund", desc: "service_return_refund_desc" },
      { icon: "bi-lock", title: "service_secure_payment", desc: "service_secure_payment_desc" },
    ].map((service, index) => (
      <div key={index} className="col-lg-2 col-md-4 col-sm-6 custom-five-cols-service">
        <div className="service-card-yellow">
          <div className="service-icon">
            <i className={`bi ${service.icon}`}></i>
          </div>
          <h6 className="service-title">{t(service.title)}</h6>
          <p className="service-desc">{t(service.desc)}</p>
        </div>
      </div>
    ))}
  </div>


  <div className="subscribe-banner-blue p-5 rounded-4 position-relative overflow-hidden">
    <div className="row align-items-center">
      <div className="col-lg-7 text-white z-1">
        <h2 className="subscribe-title">
          {t("subscribe_title")}
        </h2>
        <p className="subscribe-subtitle">
          {t("subscribe_subtitle")}
        </p>

        <div className="input-group">
          <input
            type="email"
            className="form-control custom-input"
            placeholder={t("email_placeholder")}
          />
          <button className="btn btn-orange-final" type="button">
            {t("sign_up")}
          </button>
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
          <li>
            <strong>{t("footer_address_label")}</strong>{" "}
            {t("footer_address")}
          </li>
          <li className="mt-3">
            <strong>{t("footer_phone_label")}</strong>{" "}
            {t("footer_phone")}
          </li>
          <li className="mt-3">
            <strong>{t("footer_email_label")}</strong>{" "}
            {t("footer_email")}
          </li>
          <li className="mt-3">
            <strong>{t("footer_hours_label")}</strong>{" "}
            {t("footer_hours")}
          </li>
        </ul>

        <div className="social-icons d-flex gap-3 mt-4">
          <Link to="/" onClick={scrollToTop}><i className="bi bi-facebook"></i></Link>
          <Link to="/" onClick={scrollToTop}><i className="bi bi-instagram"></i></Link>
          <Link to="/" onClick={scrollToTop}><i className="bi bi-twitter"></i></Link>
          <Link to="/" onClick={scrollToTop}><i className="bi bi-linkedin"></i></Link>
        </div>
      </div>

     
      <div className="col-lg-2 col-md-6">
        <h5 className="footer-heading">{t("footer_make_money")}</h5>
        <ul className="list-unstyled mt-4 footer-links">
          {[
            "footer_mission",
            "footer_team",
            "footer_careers",
            "footer_press",
            "footer_advertising",
            "footer_testimonials"
          ].map((key, i) => (
            <li key={i}>
              <Link to="/" onClick={scrollToTop}>
                <i className="bi bi-caret-right-fill"></i> {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    
      <div className="col-lg-2 col-md-6">
        <h5 className="footer-heading">{t("footer_company")}</h5>
        <ul className="list-unstyled mt-4 footer-links">
          {[
            "footer_blog",
            "footer_pricing",
            "footer_knowledge",
            "footer_cookie",
            "footer_office",
            "footer_news"
          ].map((key, i) => (
            <li key={i}>
              <Link to="/" onClick={scrollToTop}>
                <i className="bi bi-caret-right-fill"></i> {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="col-lg-2 col-md-6">
        <h5 className="footer-heading">{t("footer_my_account")}</h5>
        <ul className="list-unstyled mt-4 footer-links">
          {[
            "footer_faq",
            "footer_editor_help",
            "footer_community",
            "footer_live_chat",
            "footer_contact_us",
            "footer_support"
          ].map((key, i) => (
            <li key={i}>
              <Link to="/" onClick={scrollToTop}>
                <i className="bi bi-caret-right-fill"></i> {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    
      <div className="col-lg-3 col-md-6">
        <h5 className="footer-heading">{t("footer_app_payment")}</h5>
        <p className="text-muted mt-4 small">
          {t("footer_app_desc")}
        </p>

        <div className="app-download-buttons d-flex flex-column gap-2 mt-3">
          <Link to="/" onClick={scrollToTop} className="btn btn-dark btn-sm text-start py-2 px-3">
            <small className="d-block">{t("footer_available_on")}</small>
            {t("footer_app_store")}
          </Link>
          <Link to="/" onClick={scrollToTop} className="btn btn-dark btn-sm text-start py-2 px-3">
            <small className="d-block">{t("footer_get_it_on")}</small>
            {t("footer_google_play")}
          </Link>
        </div>

        <div className="payment-gateways mt-4">
          <p className="small text-muted mb-2">
            {t("footer_secure_payment")}
          </p>
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-credit-card-2-back fs-4 text-primary"></i>
            <i className="bi bi-paypal fs-4 text-primary"></i>
            <i className="bi bi-wallet2 fs-4 text-primary"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</footer>


<div className="footer-bottom py-5 border-top bg-white">
  <div className="container-fluid px-lg-5">

   
    <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
      <Link to="/" onClick={scrollToTop} className="footer-logo d-flex align-items-center gap-2">
        <div className="logo-icon-blue">
          <i className="bi bi-robot fs-2"></i>
        </div>
        <span className="fs-3 fw-bold text-dark">
          {t("footer_brand")}
        </span>
      </Link>

      <div className="partner-links d-flex gap-3">
        {[
          "partner_1",
          "partner_2",
          "partner_3",
          "partner_4"
        ].map((key, i) => (
          <Link key={i} to="/" onClick={scrollToTop} className="footer-sub-link">
            {t(key)}
          </Link>
        ))}
      </div>
    </div>

   
    <div className="categories-links-footer">

      <div className="category-row d-flex flex-wrap gap-2 mb-3">
        <strong className="me-2">{t("category_electronic")}</strong>
        {[
          "cell_phones","headphones","tv_video","game_controller","apple_watch","htc",
          "ipad","keyboard","samsung","wireless_speaker","samsung_galaxy",
          "gaming_mouse","ebook_readers","service_plans","home_audio",
          "office_electronics","lenovo","macbook","hd_video"
        ].map((key,i)=>(
          <Link key={i} to="/" onClick={scrollToTop} className="footer-sub-link">
            {t(key)}
          </Link>
        ))}
      </div>

      <div className="category-row d-flex flex-wrap gap-2 mb-4">
        <strong className="me-2">{t("category_furniture")}</strong>
        {[
          "sofa","chair","dining_table","living_room","table_lamp","night_stand",
          "computer_desk","bar_table","pillow","radio","clock","bed_room",
          "stool","television","wardrobe","living_tables","dressers",
          "patio_sofas","nursery","kitchen","accent_furniture","replacement_parts"
        ].map((key,i)=>(
          <Link key={i} to="/" onClick={scrollToTop} className="footer-sub-link">
            {t(key)}
          </Link>
        ))}
      </div>

    </div>

   
    <div className="d-flex flex-wrap justify-content-between align-items-center pt-4 border-top">
      <p className="text-muted small mb-0">
        {t("footer_copyright")}
      </p>
      <div className="legal-links d-flex gap-3">
        {[
          "footer_conditions",
          "footer_privacy",
          "footer_ads"
        ].map((key,i)=>(
          <Link key={i} to="/" onClick={scrollToTop} className="footer-sub-link small">
            {t(key)}
          </Link>
        ))}
      </div>
    </div>

  </div>
</div>


    </div>
  );
}