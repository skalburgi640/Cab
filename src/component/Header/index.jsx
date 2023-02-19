import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../asset/logocrop.png';

import './all.css';
import './brands.css';
import './ele-icons.css';
import './frontlite.css';
import './world.css';
import './custom-post-1.css';
import './custom-post-2.css';
import './custom-post-3.css';
//import './custom-post-4.css';
import './liqid.css';
import './stylescss.css';
import './themeo-graphy.css';
import './new-version.css';
import '../../App.css';
import "./icon-list.css";
import "./nav-menu.css";
const Header = () => {
  return (
    <div
      data-elementor-type="header"
      data-elementor-id="33"
      className="elementor elementor-33 elementor-location-header"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-626cccf3 elementor-section-content-middle sticky-header elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="626cccf3"
        data-element_type="section"
        id="header"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-no">
          <header
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5a8a00db"
            data-id="5a8a00db"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-e6fd360 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                data-id="e6fd360"
                data-element_type="widget"
                data-widget_type="theme-site-logo.default"
              >
                <div className="elementor-widget-container">
                  <a href="/">
                    <img
                      width="404"
                      height="186"
                      src={logo}
                      className="attachment-full size-full wp-image-804"
                      alt=""
                      loading="lazy"
                      sizes="(max-width: 404px) 100vw, 404px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-7626de9b elementor-hidden-desktop elementor-hidden-tablet"
            data-id="7626de9b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-ba28bdb elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="ba28bdb"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                      <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span className="elementor-icon-list-text">
                        +91-9960869689 
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f1021ed"
            data-id="f1021ed"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-8925b0b elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                data-id="8925b0b"
                data-element_type="widget"
                data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"&lt;i className=\"fas fa-caret-down\"&gt;&lt;\/i&gt;","library":"fa-solid"},"toggle":"burger"}'
                data-widget_type="nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <nav
                    migration_allowed="1"
                    migrated="0"
                    className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-grow"
                  >
                    <ul
                      id="menu-1-8925b0b"
                      className="elementor-nav-menu"
                      data-smartmenus-id="16737565054317954"
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-71 current_page_item menu-item-73">
                        <a
                          href='/'
                          aria-current="page"
                          className="elementor-item elementor-item-anchor"
                        >
                          Home
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-49">
                        <a
                          className="elementor-item elementor-item-anchor"
                          href='/#services'
                        >
                          Services
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48">
                        <a
                          className="elementor-item elementor-item-anchor"
                          href='/#about'
                        >
                          About
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47">
                        <a
                          className="elementor-item elementor-item-anchor"
                          href='/#contactus'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="elementor-menu-toggle" role="button" tabIndex="0" aria-label="Menu Toggle"
                    aria-expanded="false"
                  >
                    <i
                      aria-hidden="true"
                      role="presentation"
                      className="elementor-menu-toggle__icon--open eicon-menu-bar"
                    ></i>
                    <i
                      aria-hidden="true"
                      role="presentation"
                      className="elementor-menu-toggle__icon--close eicon-close"
                    ></i>
                    <span className="elementor-screen-only">Menu</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fc18418"
            data-id="fc18418"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-54048b5 elementor-align-right elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="54048b5"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item cursor-pointer">
                      <span className="elementor-icon-list-text ">
                      <a href="tel:+91-9561518017">
                      <span className="elementor-icon-list-icon">
                      <FontAwesomeIcon icon={faPhone} />
                      </span>
                        +91-9561518017</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
