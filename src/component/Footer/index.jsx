import fb from '../../asset/fb.jpg';
import inst from '../../asset/inst.jpg';
import twit from '../../asset/twit.png';
import logocrop from '../../asset/logocrop.png';
import pay from '../../asset/pay.png';
import gpay from '../../asset/gpay.png';
import ppay from '../../asset/ppay.png';
import cash from '../../asset/cash.png';

import './styles.css';

const Footer = () => {
    return (
        <>
            <div data-elementor-type="footer" data-elementor-id="40" className="elementor elementor-40 elementor-location-footer">
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-37bde12b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="37bde12b" data-element_type="section"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-364946d4"
                            data-id="364946d4" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-de44a33 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                                    data-id="de44a33" data-element_type="widget" data-widget_type="theme-site-logo.default">
                                    <div className="elementor-widget-container">
                                        <a href="#">
                                            <img
                                                src={logocrop}
                                                width="404" height="186"
                                                className="attachment-full size-full wp-image-804" alt="" loading="lazy"
                                                sizes="(max-width: 404px) 100vw, 404px" /> </a>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-af72ee5 elementor-widget elementor-widget-text-editor"
                                    data-id="af72ee5" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container footer">
                                        <p>&nbsp;Follow our social media platforms to know more about us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c74e9a6"
                            data-id="c74e9a6" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-2d0bd2a elementor-widget elementor-widget-heading"
                                    data-id="2d0bd2a" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Contact Info:</h2>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-8bef271 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                    data-id="8bef271" data-element_type="widget" data-widget_type="icon-list.default">
                                    <div className="elementor-widget-container">
                                        <ul className="elementor-icon-list-items">
                                            <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                    <i aria-hidden="true" className="fas fa-phone-alt"></i> </span>
                                                <span className="elementor-icon-list-text footer">+91-9960536327</span>
                                                <span className="elementor-icon-list-text footer">+91-9960536327</span>
                                            </li>
                                            <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                    <i aria-hidden="true" className="fas fa-inbox"></i> </span>
                                                <span className="elementor-icon-list-text footer">ranjitpatil26496@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d8fabf8"
                            data-id="d8fabf8" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-b7f6a18 elementor-widget elementor-widget-heading"
                                    data-id="b7f6a18" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Follow Us:</h2>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-0ee58bc elementor-shape-square e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
                                    data-id="0ee58bc" data-element_type="widget" data-widget_type="social-icons.default">
                                    <div className="elementor-widget-container">

                                        <div className="elementor-social-icons-wrapper elementor-grid">
                                            <span className="elementor-grid-item">
                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-87a9f85"
                                                    target="_blank"
                                                    href='https://www.facebook.com/ranniti111?mibextid=ZbWKwL'
                                                >
                                                    <span className="elementor-screen-only">Facebook</span>
                                                    <img src={fb} alt="face book" /> </a>
                                            </span>
                                            <span className="elementor-grid-item">
                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-d74756b"
                                                    target="_blank">
                                                    <span className="elementor-screen-only">Twitter</span>
                                                    <img src={twit} alt="face book" /> </a>
                                            </span>
                                            <span className="elementor-grid-item">
                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-8350dfa"
                                                    target="_blank"
                                                    href='https://www.instagram.com/invites/contact/?i=1y2fji57z77fm&utm_content=ni34sks'
                                                >
                                                    <span className="elementor-screen-only">Instagram</span>
                                                    <img src={inst} alt="face book" /> </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-widget-container pay-link">
                            <div className="left footer">
                                <p>With Indore Cab, you do not have to worry about payment methods.We have all for you.  <br /> PayTm, Phonepe, Google Pay, Cash, etc. are some to name a few. </p>
                            </div>
                            <div className="right">
                                <ul className="pay-nav">
                                    <li><a><img src={pay} title="download (1)" alt="download (1)" /></a></li>
                                    <li><a><img src={gpay} title="Google-Pay-logo-1024×512 (1)" alt="Google-Pay-logo-1024x512 (1)" /></a></li>
                                    <li><a><img src={ppay} title="images (1)" alt="images (1)" /></a></li>
                                    <li><a><img src={cash} title="Cash" alt="Cash" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-779ebaef elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="779ebaef" data-element_type="section"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-758e329d"
                            data-id="758e329d" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-155f2021 elementor-widget elementor-widget-text-editor"
                                    data-id="155f2021" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p>Copyright © 2023 Book your travel vehicle. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export default Footer;