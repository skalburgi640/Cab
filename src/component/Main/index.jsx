import { useRef, useMemo, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { caption } from '../../utils/constant';
import { useNavigate } from "react-router-dom";
import Contactus from '../Contactus';
import { UserConsumer } from '../../contextProvider';
import aboutus from '../../asset/aboutus.jpg';
import stering from '../../asset/stering.webp';
import airport_transfers from '../../asset/airport_transfers.jpg';
import Intercity_Rides from '../../asset/Intercity_Rides.jpg';
import Business_Meeting from '../../asset/Business_Meeting.jpg';
import Wedding_Parties from '../../asset/Wedding_Parties.jpg';

import './icon-box.css';
import './carousel-cus.css';
import './style.css';

const Main = () => {
  const [previousId, setPreviousId] = useState('elementor-tab-content-2021');
  const [previousBtnId, setPreviousBtnId] = useState('elementor-tab-title-2021');


  const form = useRef();
  const navigate = useNavigate();
  const consumerContext = useContext(UserConsumer);

  const sendEmail = (e) => {
    e.preventDefault();
    consumerContext.handleEmailSend(form.current);
  };

  const handleClickYourDesire = (id) => {
    if (!previousId) { setPreviousId(id); return }
    const prevId = document.getElementById(previousId);
    prevId.classList.remove("elementor-active");
    prevId.style.display = "none";

    if (id === 'elementor-tab-title-2021') {
      const content = document.getElementById('elementor-tab-content-2021');
      content.classList.add("elementor-active");
      content.style.display = "block";
      setPreviousId('elementor-tab-content-2021');
    } else if (id === 'elementor-tab-title-2022') {
      const content = document.getElementById('elementor-tab-content-2022');
      content.classList.add("elementor-active");
      content.style.display = "block";
      setPreviousId('elementor-tab-content-2022');
    } else if (id === 'elementor-tab-title-2023') {
      const content = document.getElementById('elementor-tab-content-2023');
      content.classList.add("elementor-active");
      content.style.display = "block";
      setPreviousId('elementor-tab-content-2023');
    }

    const btn = document.getElementById(id);
    btn.classList.add('elementor-active');
    const prevBtnId = document.getElementById(previousBtnId);
    prevBtnId.classList.remove("elementor-active");
    setPreviousBtnId(id);

  }

  const asideSection = useMemo(() => {
    return caption.map((ele, index) => {
      return (
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-4ce5e4e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="4ce5e4e" data-element_type="section">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-dc33635"
              data-id="dc33635" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-73979a1 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="73979a1" data-element_type="widget"
                  data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon elementor-animation-">
                          <FontAwesomeIcon icon={ele.fontIconOne} />
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <span>{ele.nameOne}</span>
                        </h3>
                        <p className="elementor-icon-box-description">
                          {ele.descOne}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b9afd93"
              data-id="b9afd93" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-775155c elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="775155c" data-element_type="widget"
                  data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon elementor-animation-">
                          <FontAwesomeIcon icon={ele.fontIconTwo} />
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <span>{ele.nameTwo}</span>
                        </h3>
                        <p className="elementor-icon-box-description">
                          {ele.descTwo}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    });
  }, [caption]);

  const handleOnClick = () => {
    navigate("/booking");
  }

  const bookingBTN = () => {
    return (
      <div className="elementor-element elementor-element-506fc52c elementor-widget elementor-widget-button"
        data-id="506fc52c" data-element_type="widget"
        data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:700}"
        data-widget_type="button.default">
        <div className="elementor-widget-container">
          <div className="elementor-button-wrapper">
            <a href="booking"
              className="elementor-button-link elementor-button elementor-size-md"
              role="button">
              <span className="elementor-button-content-wrapper">
                <span
                  className="elementor-button-icon elementor-align-icon-right">
                  <FontAwesomeIcon icon={faArrowRight} /> </span>
                <span className="elementor-button-text">Booking</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }


  return (
    <main id="content" className="site-main post-71 page type-page status-publish hentry" role="main">
      <div className="page-content">
        <div data-elementor-type="wp-page" data-elementor-id="71" className="elementor elementor-71">
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-55a3e5be elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
            data-id="55a3e5be" data-element_type="section" id="home"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3085e210"
                data-id="3085e210" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-ecb9b35 elementor-widget elementor-widget-heading animated fadeInLeft"
                    data-id="ecb9b35" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">

                      <h1 className="elementor-heading-title elementor-size-default">VEER CAR RENTAL SERVICE </h1>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6a717900 elementor-widget elementor-widget-heading animated fadeInLeft"
                    data-id="6a717900" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Veer car rental service is in Pune and Mumbai City,
                        <br />Experience it Now!</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-24862d3"
                data-id="24862d3" data-element_type="column" id="book"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-5c22267 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="5c22267" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8fdc7d9"
                        data-id="8fdc7d9" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-a632b40 elementor-align-center elementor-widget elementor-widget-button"
                            data-id="a632b40" data-element_type="widget"
                            data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <button
                                  onClick={handleOnClick}
                                  className="btn-g elementor-button elementor-size-md"
                                  role="button">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Booking</span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0560b7c"
                        data-id="0560b7c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-37dc947 elementor-align-center elementor-widget elementor-widget-button"
                            data-id="37dc947" data-element_type="widget"
                            data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <button
                                  className="btn-b elementor-button-link elementor-button elementor-size-md"
                                  role="button">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">
                                      <a href='/#contactus'>Get a Quote</a>
                                      </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-358f83f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="358f83f" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9b197a6"
                data-id="9b197a6" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-0248791 elementor-widget elementor-widget-image"
                    data-id="0248791" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img decoding="async" width="768" height="1152"
                        src={stering}
                        className="attachment-medium_large size-medium_large wp-image-459" alt=""
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 768px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-eda23bd"
                data-id="eda23bd" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-9b41eb6 elementor-widget elementor-widget-heading"
                    data-id="9b41eb6" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">We make sure your journey is comfortable and memorable. Driving leaves us you just enjoy traveling.</h2>
                    </div>
                  </div>
                  {asideSection}
                </div>
              </div>
            </div>
          </section>

          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-7d67a786 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="7d67a786" data-element_type="section" id="about"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-44621308"
                data-id="44621308" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7ecdb32a elementor-widget elementor-widget-heading animated fadeInLeft"
                    data-id="7ecdb32a" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">About Us</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3eed6270 elementor-widget elementor-widget-heading animated fadeInLeft"
                    data-id="3eed6270" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">

                      </h2>
                    </div>
                  </div>
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-365e8c59 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="365e8c59" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1971244e"
                        data-id="1971244e" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-627ffb26 elementor-widget elementor-widget-image"
                            data-id="627ffb26" data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img decoding="async" width="768" height="568"
                                src={aboutus}
                                className="attachment-medium_large size-medium_large wp-image-461"
                                alt="" loading="lazy"
                                sizes="(max-width: 768px) 100vw, 768px" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-56e3cef4"
                        data-id="56e3cef4" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-76f6cdf4 elementor-widget elementor-widget-heading"
                            data-id="76f6cdf4" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">Veer car rental is a Pune based cab service provider; We are in service since last 4 years. We recognized by our service, we make your journey joyful, safest and secure.</h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-3e1e450a elementor-widget elementor-widget-heading"
                            data-id="3e1e450a" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                We provide car rental service for Airport transfer, Intercity rides, Business meetings, Family functions, Wedding parties, Weekend travels etc.
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-546d307 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="546d307" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-32e4e64"
                        data-id="32e4e64" data-element_type="column">
                        <div className="elementor-widget-wrap">
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-79257d05 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="79257d05" data-element_type="section" id="services"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2d244aa6"
                data-id="2d244aa6" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-2c2a3bf0 elementor-widget elementor-widget-heading animated fadeInLeft"
                    data-id="2c2a3bf0" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Our Services</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-34ff6b79 elementor-widget elementor-widget-heading animated fadeInLeft"
                    data-id="34ff6b79" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">From Pune and Mumbai cities, fast and easy access for all occasions.</h2>
                    </div>
                  </div>
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-61e04004 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="61e04004" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-57754ad8"
                        data-id="57754ad8" data-element_type="column"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-ac68905 elementor-widget elementor-widget-image"
                            data-id="ac68905" data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img decoding="async" width="289" height="146"
                                src={airport_transfers}
                                className="attachment-medium size-medium wp-image-89" alt=""
                                loading="lazy" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-e27e057 elementor-widget elementor-widget-heading"
                            data-id="e27e057" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Airport transfers</h2>
                            </div>
                          </div>
                          <div className="our-services elementor-element elementor-element-6be1ab00 elementor-widget elementor-widget-heading"
                            data-id="6be1ab00" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">When it comes to catching an important flight, it is extremely important to stay on time. We reach you airport without any hassle.</h2>
                            </div>
                          </div>
                          {bookingBTN()}
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2e343699"
                        data-id="2e343699" data-element_type="column"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-fb6b615 elementor-widget elementor-widget-image"
                            data-id="fb6b615" data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img decoding="async" width="289" height="146"
                                src={Intercity_Rides}
                                className="attachment-medium size-medium wp-image-90" alt=""
                                loading="lazy" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-57ec8135 elementor-widget elementor-widget-heading"
                            data-id="57ec8135" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Intercity Rides</h2>
                            </div>
                          </div>
                          <div className="our-services elementor-element elementor-element-6da1bb2a elementor-widget elementor-widget-heading"
                            data-id="6da1bb2a" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">We make your intercity travel stress free whether it's long-distance or short-distance journey.</h2>
                            </div>
                          </div>
                          {bookingBTN()}
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-392fe873"
                        data-id="392fe873" data-element_type="column"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-301926a elementor-widget elementor-widget-image"
                            data-id="301926a" data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img decoding="async" width="289" height="146"
                                src={Business_Meeting}
                                className="attachment-medium size-medium wp-image-91" alt=""
                                loading="lazy" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-6cdcf20b elementor-widget elementor-widget-heading"
                            data-id="6cdcf20b" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Business Meeting</h2>
                            </div>
                          </div>
                          <div className="our-services elementor-element elementor-element-601e8e76 elementor-widget elementor-widget-heading"
                            data-id="601e8e76" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Focus on your events and meetings, forget about car and road. We take care of it.
                              </h2>
                            </div>
                          </div>
                          {bookingBTN()}
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-14ab078f"
                        data-id="14ab078f" data-element_type="column"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-464f0236 elementor-widget elementor-widget-image"
                            data-id="464f0236" data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img decoding="async" width="289" height="146"
                                src={Wedding_Parties}
                                className="attachment-medium size-medium wp-image-92" alt=""
                                loading="lazy" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-44f1842a elementor-widget elementor-widget-heading"
                            data-id="44f1842a" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Wedding Parties</h2>
                            </div>
                          </div>
                          <div className="our-services elementor-element elementor-element-7253e545 elementor-widget elementor-widget-heading"
                            data-id="7253e545" data-element_type="widget"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">We ensure that you and your loved ones reach safely to wedding event. We ensure that your wedding transportation would be stress-free, reliable, comfortable, safe and secure.</h2>
                            </div>
                          </div>
                          {bookingBTN()}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-64dd7944 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="64dd7944" data-element_type="section" id="fleets"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
               <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-38f11291"
                data-id="38f11291" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <Contactus sendEmail={sendEmail} form={form} />
                </div>
              </div>
            </div>
            <div className="post-tags">
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Main;