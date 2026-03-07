import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../Style.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // تأكد من وجود /modules

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/navigation";

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


const products = [
  { id: 1, name: "iMac 2022", img: img4, category: "best" },
  { id: 2, name: "Headphones", img: img5, category: "viewed" },
  { id: 3, name: "MacBook Air", img: img6, category: "best" },
  { id: 4, name: "Apple Watch", img: img7, category: "brand" },
  { id: 5, name: "Security Camera", img: img8, category: "viewed" },
];

const trendingProducts = [
  {
    id: 1,
    type: "Best seller",
    brand: "Apple",
    name: "2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB",
    price: "2856.3",
    oldPrice: "3225.6",
    img: img4,
    discount: "-17%",
  },
  {
    id: 2,
    type: "Most viewed",
    brand: "Philips",
    name: "Philips H4205 On-Ear Wireless Headphones with 32mm",
    price: "154.3",
    oldPrice: "162.5",
    img: img5,
    discount: "-17%",
  },
  {
    id: 3,
    type: "Top Brands",
    brand: "Apple",
    name: "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”",
    price: "2325.3",
    oldPrice: "2225.6",
    img: img6,
    discount: "-17%",
  },
  {
    id: 4,
    type: "Best seller",
    brand: "Apple",
    name: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
    price: "530.3",
    oldPrice: "560.6",
    img: img7,
    discount: "-17%",
  },
  {
    id: 5,
    type: "Most viewed",
    brand: "Kami Tech",
    name: "Kami by YI 4pc 1080p Home Security Cameras",
    price: "156.3",
    oldPrice: "250.6",
    img: img8,
    discount: "-17%",
  },
];
const blogPosts = [
  {
    id: 1,
    category: "Technology",
    title: "How can Web 3.0 Bring Changes to the Gaming?",
    img: img1,
    date: "August 30, 2022",
    read: "5 Mins read",
  },
  {
    id: 2,
    category: "Gaming",
    title: "NFT Blockchain Games That Might Take Off",
    img: img2,
    date: "August 25, 2022",
    read: "3 Mins read",
  },
  {
    id: 3,
    category: "Blockchain",
    title: "Blockchain Gaming And Its Three Challenges",
    img: img3,
    date: "August 15, 2022",
    read: "7 Mins read",
  },
  {
    id: 4,
    category: "Development",
    title: "HTML5 – The Future of Mobile App Development",
    img: img4,
    date: "August 12, 2022",
    read: "9 Mins read",
  },
];
const latestPosts = [
  {
    id: 1,
    category: "Gaming",
    title: "NFT Blockchain Games That Might Take Off",
    img: img2,
    date: "August 25, 2022",
    read: "3 Mins read",
  },
  {
    id: 2,
    category: "Blockchain",
    title: "Blockchain Gaming And Its Three Challenges",
    img: img3,
    date: "August 15, 2022",
    read: "7 Mins read",
  },
  {
    id: 3,
    category: "Development",
    title: "HTML5 – The Future of Mobile App Development",
    img: img4,
    date: "August 12, 2022",
    read: "9 Mins read",
  },
  {
    id: 4,
    category: "Technology",
    title: "The latest technologies to be used for VR in 2022",
    img: img1,
    date: "September 02, 2022",
    read: "4 Mins read",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
const [activeFilter, setActiveFilter] = useState("All");



  return (
    <div
      className= {`container-fluid my-5 px-4 ${isRtl ? "rtl-style" : ""}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
  
<div className="row g-4">
  {/* الكارد الكبير */}
  <div className="col-lg-8">
    <div
      className="main-card hero-card"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="card-content">
        <span className="badge-text-top">{t("hot_deal")}</span>
        <h1 className="main-title">{t("mobile_devices")}</h1>
        <p className="main-desc">{t("sale_50")}</p>
        <div className="btn-group-custom">
          <Link to="/shop" className="btn btn-orange-main">
            {t("shop_now")}
          </Link>
          <Link to="/shop" className="btn btn-link-custom">
            {t("learn_more")}
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* الكاردات الجانبية */}
  <div className="col-lg-4">
    <div className="row g-4">
      <div className="col-12">
        <div
          className="sub-card hero-card"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="card-content-small">
            <span className="sale-label">{t("discount_10")}</span>
            <h3 className="sub-title">{t("product_watch_7")}</h3>
            <p className="sub-desc">
              {t("dont_miss").substring(0, 30)}...
            </p>
            <Link to="/shop" className="btn btn-orange-small">
              {t("shop_now")} <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div
          className="sub-card hero-card"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="card-content-small">
            <span className="collection-label">
              {t("new_collection")}
            </span>
            <h3 className="sub-title">{t("apple_devices_software")}</h3>
            <p className="sub-desc">
              {t("dont_miss").substring(0, 30)}...
            </p>
            <Link to="/shop" className="btn btn-orange-small">
              {t("shop_now")} <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Featured Categories */}
<div className="brands-section my-5 py-4">
  <div className="container-fluid px-lg-5">
    <div className="row align-items-center">
      <div className="col-lg-4 mb-4 mb-lg-0">
        <h2 className="section-title-dark">
          {t("featured_categories")}
        </h2>
        <p className="section-desc-dark">
          {t("featured_desc")}
        </p>
      </div>

      <div className="col-lg-8">
        <div className="brands-grid">
          {[
            "brand_panasonic",
            "brand_vaio",
            "brand_acer",
            "brand_nokia",
            "brand_asus",
            "brand_casio",
            "brand_dell",
          ].map((brand, i) => (
            <Link key={i} to="/shop" className="brand-box">
              {t(brand)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

{/* Product Categories */}
<div className="product-categories-grid my-5 px-lg-5">
  <div className="row g-4">
    {[
      {
        title: "category_smart_phone",
        icon: "bi-smartphone",
        links: [
          "phone_accessories",
          "phone_cases",
          "postpaid_phones",
          "refurbished_phones",
        ],
      },
      {
        title: "category_television",
        icon: "bi-tv",
        links: [
          "hd_dvd",
          "projection_screens",
          "tv_accessories",
          "tv_dvd",
        ],
      },
      {
        title: "category_computers",
        icon: "bi-pc-display",
        links: [
          "computer_components",
          "computer_accessories",
          "desktops",
          "monitors",
        ],
      },
      {
        title: "category_electronics",
        icon: "bi-plug",
        links: [
          "office_electronics",
          "portable_audio",
          "washing_machine",
          "accessories_supplies",
        ],
      },
    ].map((cat, index) => (
      <div key={index} className="col-12 col-md-6 col-lg-3">
        <div className="category-box-card p-4 h-100">
          <div className="d-flex align-items-start mb-3">
            <div className="category-icon-wrapper me-3">
              <i className={`bi ${cat.icon}`}></i>
            </div>
            <h5 className="category-main-title">
              {t(cat.title)}
            </h5>
          </div>

          <ul className="category-links-list list-unstyled">
            {cat.links.map((link, i) => (
              <li key={i}>
                <Link to="/shop" className="category-single-link">
                  <i className="bi bi-caret-right-fill"></i> {t(link)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-3">
            <Link to="/shop" className="btn-view-all-small">
              {t("view_all")}
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
     


   {/* Best Sellers Section */}
<div className="container-fluid px-lg-5 my-5">
  <div className="row">
    <div className="col-12 mb-4">
      <h2 className="section-title-dark">{t("best_sellers")}</h2>
      <p className="section-desc-dark">{t("special_products_month")}</p>
    </div>
  </div>

  <div className="row g-4 justify-content-center">
    {[
      {
        id: 1,
        brand: "brand_apple",
        name: "product_imac_2022",
        price: "2856.3",
        oldPrice: "3225.6",
        img: img4,
        discount: "-17%",
      },
      {
        id: 2,
        brand: "brand_philips",
        name: "product_philips_headphones",
        price: "154.0.3",
        oldPrice: "162.5",
        img: img5,
        discount: "-17%",
      },
      {
        id: 3,
        brand: "brand_apple",
        name: "product_macbook_air_2020",
        price: "2325.3",
        oldPrice: "2225.6",
        img: img6,
        discount: "-17%",
      },
      {
        id: 4,
        brand: "brand_apple",
        name: "product_watch_series_8",
        price: "530.3",
        oldPrice: "560.6",
        img: img7,
        discount: "-17%",
      },
      {
        id: 5,
        brand: "brand_kami",
        name: "product_kami_camera",
        price: "156.3",
        oldPrice: "250.6",
        img: img8,
        discount: "-17%",
      },
    ].map((product) => (
      <div
        key={product.id}
        className="col-xl-2 col-lg-3 col-md-4 col-sm-6 custom-five-cols"
      >
        <div className="product-card-custom">
          <span className="discount-tag">{product.discount}</span>

          <div className="product-img-box">
            <img src={product.img} alt={t(product.name)} className="img-fluid" />
          </div>

          <div className="product-details">
            <span className="brand-label">{t(product.brand)}</span>
            <h4 className="product-main-name">{t(product.name)}</h4>

            <div className="rating-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <span className="rating-num">(65)</span>
            </div>

            <div className="price-section">
              <span className="new-price">${product.price}</span>
              <span className="old-price-slashed">${product.oldPrice}</span>
            </div>

            <Link to="Shop" className="btn btn-add-to-cart-custom w-100 mt-3">
              {t("add_to_cart")}
            </Link>

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
</div>

{/* Section: Xbox & Electronics Banners */}


<div className="container-fluid px-lg-5 my-5">
  <div className="row g-4">
    
    {/* 1. الكارد الكبير الأيسر (Xbox) */}
    <div className="col-lg-5">
      <Link to="/shop" className="d-block h-100 promo-hover">
        <div className="h-100 shadow-sm" style={{ 
          borderRadius: "12px", 
          overflow: "hidden",
          minHeight: "450px" 
        }}>
          <img src={img1} alt="Promo 1" className="w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
      </Link>
    </div>

    {/* العمود الأيمن */}
    <div className="col-lg-7">
      <div className="row g-4">
        
        {/* الصورة العلوية العريضة (Controller) */}
        <div className="col-md-7">
          <Link to="/shop" className="d-block h-100 promo-hover">
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "215px" }}>
              <img src={img2} alt="Promo 2" className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
          </Link>
        </div>

        {/* الصورة العلوية الصغيرة (Metaverse) */}
        <div className="col-md-5">
          <Link to="/shop" className="d-block h-100 promo-hover">
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "215px" }}>
              <img src={img6} alt="Promo 3" className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
          </Link>
        </div>

        {/* الصورة السفلية الصغيرة (Electronic) */}
        <div className="col-md-5">
          <Link to="/shop" className="d-block h-100 promo-hover">
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "215px" }}>
              <img src={img12} alt="Promo 4" className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
          </Link>
        </div>

        {/* الصورة السفلية العريضة (Phones) */}
        <div className="col-md-7">
          <Link to="/shop" className="d-block h-100 promo-hover">
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "215px" }}>
              <img src={img3} alt="Promo 5" className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  </div>
</div>








<div className="container-fluid px-lg-5 my-5">
  <div className="row mb-4 align-items-center">
    <div className="col-md-6">
      <h2 className="section-title-dark">{t("trending_this_week")}</h2>
      <p className="section-desc-dark">{t("special_products_month")}</p>
    </div>

    <div className="col-md-6 text-md-end">
      {["all", "best_seller", "most_viewed", "top_brands"].map(filter => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`trending-filter-btn ${
            activeFilter === filter ? "active" : ""
          }`}
        >
          {t(filter)}
        </button>
      ))}
    </div>
  </div>

  <div className="row g-4 justify-content-center">
    {trendingProducts
      .filter(p => activeFilter === "all" || p.type === activeFilter)
      .map(product => (
        <div key={product.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 custom-five-cols">
          <div className="product-card-custom">
            <span className="discount-tag">{t(product.discount)}</span>

            <div className="product-img-box">
              <img src={product.img} alt={t(product.name)} className="img-fluid" />
            </div>

            <hr />

            <div className="product-details">
              <span className="brand-label">{t(product.brand)}</span>
              <h4 className="product-main-name">{t(product.name)}</h4>

              <div className="rating-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <span className="rating-num">(65)</span>
              </div>

              <div className="price-section">
                <span className="new-price">${product.price}</span>
                <span className="old-price-slashed">${product.oldPrice}</span>
              </div>

              <Link to="Shop" className="btn btn-add-to-cart-custom w-100 mt-3 trending-cart-btn">
                {t("add_to_cart")}
              </Link>

              <ul className="tech-specs-list list-unstyled mt-3">
                <li>{t("spec_retina_5k")}</li>
                <li>{t("spec_intel_i5")}</li>
                <li>{t("spec_amd_radeon")}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>






{/* قسم المنتجات المبيعة (Top Selling Products) */}



<div className="container-fluid px-lg-5 my-5 top-selling-section">
  <div className="row g-4">
    
    {/* الجزء الأيسر: شبكة المنتجات (6 منتجات: 2 في كل صف) */}
    <div className="col-lg-8">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="section-title-dark mb-1">
            {t("top_selling_products")}
          </h2>
          <p className="section-desc-dark">
            {t("special_products_month")}
          </p>
        </div>
      </div>

      <div className="row g-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-md-6">
            <div className="mini-product-card d-flex align-items-center p-3">
              <div className="product-img-mini me-3">
                <img src={img4} alt={t("product")} className="img-fluid" />
              </div>
              <div className="product-info-mini">
                <span className="brand-name">{t("apple")}</span>
                <h6 className="product-title-blue">
                  {t("imac_2022_full_specs")}
                </h6>
                <div className="rating-stars-blue mb-1">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span className="rating-count ms-1">(65)</span>
                </div>
                <div className="price-mini">
                  <span className="new-price-blue">$2556.3</span>
                  <span className="old-price-slashed ms-2">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* الجزء الأيمن: البانر العمودي الطويل */}
    <div className="col-lg-4">
      <div className="side-banner-blue d-flex flex-column h-100">
        <div className="banner-text-content p-5">
          <span className="badge-no">
            {t("no_9")}
          </span>
          <h2 className="banner-main-title">
            {t("sensitive_touch_no_fingerprint")}
          </h2>
          <p className="banner-sub-title">
            {t("smooth_handle_accurate_click")}
          </p>
        </div>
        <div className="mt-auto banner-img-container text-center">
          <img
            src={img7}
            alt={t("smart_watch_banner")}
            className="img-fluid banner-watch-img"
          />
        </div>
      </div>
    </div>

  </div>
</div>




{/* Latest News & Events Section */}
<div className="container-fluid px-lg-5 my-5">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h2
        className="section-title-dark mb-0"
        style={{ color: "#002d5b", fontWeight: "bold" }}
      >
        {t("latest_news_events")}
      </h2>
      <p className="text-muted">
        {t("from_our_blog_forum")}
      </p>
    </div>

    <div className="d-flex gap-2">
      <div
        className="news-prev-btn border rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "35px", height: "35px", cursor: "pointer" }}
      >
        <i className="bi bi-chevron-left"></i>
      </div>
      <div
        className="news-next-btn border rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "35px", height: "35px", cursor: "pointer" }}
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  </div>

  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    navigation={{
      nextEl: ".news-next-btn",
      prevEl: ".news-prev-btn",
    }}
    breakpoints={{
      640: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    }}
  >
    {blogPosts.map((post) => (
      <SwiperSlide key={post.id}>
        <div className="news-card">
          <div
            className="mb-3"
            style={{ overflow: "hidden", borderRadius: "8px" }}
          >
            <img
              src={post.img}
              alt={t(post.title)}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
          <div>
            <div
              className="d-flex align-items-center gap-2 mb-2"
              style={{ fontSize: "0.85rem", color: "#666" }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#007bff",
                  borderRadius: "50%",
                }}
              ></span>
              {t(post.category)}
            </div>
            <Link to="#" className="news-link" style={{ textDecoration: "none" }}>
              <h5 className="news-title">
                {t(post.title)}
              </h5>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* Section Services & Newsletter */}
<div className="container-fluid px-lg-5 my-5">

  {/* Services */}
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

  {/* Subscribe Banner */}
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

      {/* Column 1: Contact */}
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

      {/* Column 2 */}
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

      {/* Column 3 */}
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

      {/* Column 4 */}
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

      {/* Column 5 */}
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

{/* Footer Bottom */}
<div className="footer-bottom py-5 border-top bg-white">
  <div className="container-fluid px-lg-5">

    {/* Logo & Partners */}
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

    {/* Categories */}
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

    {/* Copyright */}
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