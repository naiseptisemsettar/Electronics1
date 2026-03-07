import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Style.css";
import { Link } from "react-router-dom";
import img12 from "../assets/images/img12.png";
export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mqedegeb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="contact-container">
        {/* FORM */}
        <div className="contact-form">
          <h2>{t("titleContact")}</h2>
          <p>{t("subtitleContact")}</p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="first_name"
                placeholder={t("firstName")}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder={t("lastName")}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder={t("email")}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("phone")}
            />

            <textarea
              name="message"
              placeholder={t("message")}
              rows="5"
              required
            ></textarea>

            <button type="submit">{t("sendMessage")}</button>

            {status === "SUCCESS" && (
              <p className="success-msg">{t("successMessage")}</p>
            )}
            {status === "ERROR" && (
              <p className="error-msg">{t("errorMessage")}</p>
            )}
          </form>
        </div>

        {/* MAP */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=New+York&output=embed"
            loading="lazy"
          ></iframe>

          <a
            className="open-map-btn"
            href="https://www.google.com/maps/place/New+York/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("openMap")}
          </a>
        </div>
      </div>

      {/* ================= STORES SECTION ================= */}

      <div className="stores-section">
        <div className="stores-header">
          <h2>{t("titleStores")}</h2>
          <p>{t("subtitleStores")}</p>
          <button className="view-map-btn">{t("viewMap")}</button>
        </div>

        <div className="stores-grid">
          <div>
            <h3>{t("locationMelbourne")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationSydney")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationBangkok")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationSanFrancisco")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationSweden")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationSeoul")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationByronBay")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationHaNoi")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>

          <div>
            <h3>{t("locationParis")}</h3>
            <p>
              205 North Michigan Avenue, Suite 810
              <br />
              Chicago, 60601, USA
            </p>
          </div>
        </div>
        
      </div>
      
      
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



    </>
  );
}