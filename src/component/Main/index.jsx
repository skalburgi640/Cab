import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faLocationDot, faPlaneDeparture, faClock, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import cab1 from '../../asset/cab1.jpg';
import emailjs from '@emailjs/browser';

import './widget-icon-box.css';
import './widget-carousel.css';
import './style.css';

const Main = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
		
	  emailjs.sendForm('service_nq7dcwj', 'template_8owfc0f', form.current, 'Ckyw1uw9qxilracFg')
		.then((result) => {
			console.log('result.text ::::::::::::::::' ,result.text);
		}, (error) => {
			console.log(error.text);
		});
	};

	
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

											<h1 className="elementor-heading-title elementor-size-default">City limo NYC</h1>
										</div>
									</div>
									<div className="elementor-element elementor-element-6a717900 elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="6a717900" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">City Limo Service in
												New York City, <br />Experience it Now!</h2>
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
																<a href="https://citylimonyc.com/booking/"
																	className="elementor-button-link elementor-button elementor-size-md"
																	role="button">
																	<span className="elementor-button-content-wrapper">
																		<span className="elementor-button-text">Booking</span>
																	</span>
																</a>
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
																<a href="https://citylimonyc.com/get-quote/"
																	className="elementor-button-link elementor-button elementor-size-md"
																	role="button">
																	<span className="elementor-button-content-wrapper">
																		<span className="elementor-button-text">Get a
																			Quote</span>
																	</span>
																</a>
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
												src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/09/angus-gray-qwnI-MAL9aM-unsplash.webp"
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
											<h2 className="elementor-heading-title elementor-size-default">We Make Sure That
												Your Every Trip is Comfortable</h2>
										</div>
									</div>
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
																		<FontAwesomeIcon icon={faLocationDot} />
																	</span>
																</div>
																<div className="elementor-icon-box-content">
																	<h3 className="elementor-icon-box-title">
																		<span>
																			CASUAL RESERVATION </span>
																	</h3>
																	<p className="elementor-icon-box-description">
																		We are now available in more locations. </p>
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
																		<FontAwesomeIcon icon={faPlaneDeparture} />
																	</span>
																</div>
																<div className="elementor-icon-box-content">
																	<h3 className="elementor-icon-box-title">
																		<span>
																			AIRPORT BOOKING </span>
																	</h3>
																	<p className="elementor-icon-box-description">
																		AIRPORT DELIVERY We provide airport delivery. </p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
									<section
										className="elementor-section elementor-inner-section elementor-element elementor-element-ece1a64 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
										data-id="ece1a64" data-element_type="section">
										<div className="elementor-container elementor-column-gap-default">
											<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-eb8f76f"
												data-id="eb8f76f" data-element_type="column">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-cdc4d99 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
														data-id="cdc4d99" data-element_type="widget"
														data-widget_type="icon-box.default">
														<div className="elementor-widget-container">
															<div className="elementor-icon-box-wrapper">
																<div className="elementor-icon-box-icon">
																	<span className="elementor-icon elementor-animation-">
																		<FontAwesomeIcon icon={faClock} />
																	</span>
																</div>
																<div className="elementor-icon-box-content">
																	<h3 className="elementor-icon-box-title">
																		<span>
																			HOURLY RESERVATION </span>
																	</h3>
																	<p className="elementor-icon-box-description">
																		We have also curbside delivery available for you.
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-54dcc2e"
												data-id="54dcc2e" data-element_type="column">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-708281d elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
														data-id="708281d" data-element_type="widget"
														data-widget_type="icon-box.default">
														<div className="elementor-widget-container">
															<div className="elementor-icon-box-wrapper">
																<div className="elementor-icon-box-icon">
																	<span className="elementor-icon elementor-animation-">
																		<FontAwesomeIcon icon={faHeadphones} />
																	</span>
																</div>
																<div className="elementor-icon-box-content">
																	<h3 className="elementor-icon-box-title">
																		<span>
																			24/7 SUPPORT </span>
																	</h3>
																	<p className="elementor-icon-box-description">
																		We are always there for you. </p>
																</div>
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
											<h2 className="elementor-heading-title elementor-size-default">The best offer of
												world-className transportation solutions for your events</h2>
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
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/09/IMG-0311-2.webp"
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
															<h2 className="elementor-heading-title elementor-size-default">A
																Chauffeur Car Service company at your disposal for all your
																trips.</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-3e1e450a elementor-widget elementor-widget-heading"
														data-id="3e1e450a" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">
																Recognized for its professionalism towards companies,
																professionals and individuals, city Limo NYC is a company
																based in New York, USA. Specialized in the tailor-made
																transport with chauffeur, we offer high end services for
																your private and business trips.
															</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-49d6924a elementor-widget elementor-widget-heading"
														data-id="49d6924a" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">We
																have a fleet of prestigious and modern vehicles for a
																comfortable and secure accompaniment in the destinations of
																your choice. Our mission is to provide you with an excellent
																service as well as a personalized welcome for your short and
																long journeys.
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
											<h2 className="elementor-heading-title elementor-size-default">Worldwide fast &amp;
												easy access for all occasions.</h2>
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
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Top-Reasons-to-Choose-Chauffeur-Airport-Transfers-2-1.png?time=1673814383"
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
													<div className="elementor-element elementor-element-6be1ab00 elementor-widget elementor-widget-heading"
														data-id="6be1ab00" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">With
																additional wait time and flight tracking in case of delays,
																our service is optimized to make every airport transfer a
																breeze.</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-506fc52c elementor-widget elementor-widget-button"
														data-id="506fc52c" data-element_type="widget"
														data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:700}"
														data-widget_type="button.default">
														<div className="elementor-widget-container">
															<div className="elementor-button-wrapper">
																<a href="https://citylimonyc.com/booking/"
																	className="elementor-button-link elementor-button elementor-size-md"
																	role="button">
																	<span className="elementor-button-content-wrapper">
																		<span
																			className="elementor-button-icon elementor-align-icon-right">
																			<i aria-hidden="true"
																				className="fas fa-arrow-right"></i> </span>
																		<span className="elementor-button-text">Booking</span>
																	</span>
																</a>
															</div>
														</div>
													</div>
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
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/870295-1.png?time=1673814383"
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
													<div className="elementor-element elementor-element-6da1bb2a elementor-widget elementor-widget-heading"
														data-id="6da1bb2a" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">Your
																stress-free solution for traveling between cities, with
																chauffeurs across the globe.</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-5661aedc elementor-widget elementor-widget-button"
														data-id="5661aedc" data-element_type="widget"
														data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:700}"
														data-widget_type="button.default">
														<div className="elementor-widget-container">
															<div className="elementor-button-wrapper">
																<a href="https://citylimonyc.com/booking/"
																	className="elementor-button-link elementor-button elementor-size-md"
																	role="button">
																	<span className="elementor-button-content-wrapper">
																		<span
																			className="elementor-button-icon elementor-align-icon-right">
																			<i aria-hidden="true"
																				className="fas fa-arrow-right"></i> </span>
																		<span className="elementor-button-text">Booking</span>
																	</span>
																</a>
															</div>
														</div>
													</div>
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
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/dark-businesswoman-shaking-hands-with-male-colleague-1.png?time=1673814383"
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
													<div className="elementor-element elementor-element-601e8e76 elementor-widget elementor-widget-heading"
														data-id="601e8e76" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">
																Concentrate on your meeting with your partners, forget about
																the road and the car, which will distract your thoughts.
															</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-3838be89 elementor-widget elementor-widget-button"
														data-id="3838be89" data-element_type="widget"
														data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:700}"
														data-widget_type="button.default">
														<div className="elementor-widget-container">
															<div className="elementor-button-wrapper">
																<a href="https://citylimonyc.com/booking/"
																	className="elementor-button-link elementor-button elementor-size-md"
																	role="button">
																	<span className="elementor-button-content-wrapper">
																		<span
																			className="elementor-button-icon elementor-align-icon-right">
																			<i aria-hidden="true"
																				className="fas fa-arrow-right"></i> </span>
																		<span className="elementor-button-text">Booking</span>
																	</span>
																</a>
															</div>
														</div>
													</div>
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
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Depositphotos_186252082_xl-2015_rv-1060x599-1.png?time=1673814383"
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
													<div className="elementor-element elementor-element-7253e545 elementor-widget elementor-widget-heading"
														data-id="7253e545" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">Our
																friendly, and attentive service combined with thorough
																attention to detail ensure you can truly relax and enjoy
																your special day.</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-3c7123a8 elementor-widget elementor-widget-button"
														data-id="3c7123a8" data-element_type="widget"
														data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:700}"
														data-widget_type="button.default">
														<div className="elementor-widget-container">
															<div className="elementor-button-wrapper">
																<a href="https://citylimonyc.com/booking/"
																	className="elementor-button-link elementor-button elementor-size-md"
																	role="button">
																	<span className="elementor-button-content-wrapper">
																		<span
																			className="elementor-button-icon elementor-align-icon-right">
																			<i aria-hidden="true"
																				className="fas fa-arrow-right"></i> </span>
																		<span className="elementor-button-text">Booking</span>
																	</span>
																</a>
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
						className="elementor-section elementor-top-section elementor-element elementor-element-64dd7944 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
						data-id="64dd7944" data-element_type="section" id="fleets"
						data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="elementor-container elementor-column-gap-default">
							<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-38f11291"
								data-id="38f11291" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-73d224c4 elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="73d224c4" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">Our Fleets</h2>
										</div>
									</div>
									<div className="elementor-element elementor-element-2598100 elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="2598100" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">Choose according to
												your desire and circumstances</h2>
										</div>
									</div>


									<div className="elementor-element elementor-element-78c746c1 elementor-tabs-alignment-center elementor-tabs-view-horizontal elementor-widget elementor-widget-tabs"
										data-id="78c746c1" data-element_type="widget" id="m-tabs2"
										data-widget_type="tabs.default">
										<div className="elementor-widget-container">
											<div className="elementor-tabs">
												<div className="elementor-tabs-wrapper" role="tablist">
													<div id="elementor-tab-title-2021"
														className="elementor-tab-title elementor-tab-desktop-title elementor-active"
														aria-selected="true" data-tab="1" role="tab" tabIndex="0"
														aria-controls="elementor-tab-content-2021" aria-expanded="true">
														Regular Sedan</div>
													<div id="elementor-tab-title-2022"
														className="elementor-tab-title elementor-tab-desktop-title"
														aria-selected="false" data-tab="2" role="tab" tabIndex="-1"
														aria-controls="elementor-tab-content-2022" aria-expanded="false">SUV
													</div>
													<div id="elementor-tab-title-2023"
														className="elementor-tab-title elementor-tab-desktop-title"
														aria-selected="false" data-tab="3" role="tab" tabIndex="-1"
														aria-controls="elementor-tab-content-2023" aria-expanded="false">
														Luxury</div>
												</div>
												<div className="elementor-tabs-content-wrapper" role="tablist"
													aria-orientation="vertical">
													<div className="elementor-tab-title elementor-tab-mobile-title elementor-active"
														aria-selected="true" data-tab="1" role="tab" tabIndex="0"
														aria-controls="elementor-tab-content-2021" aria-expanded="true">
														Regular Sedan</div>
													<div id="elementor-tab-content-2021"
														className="elementor-tab-content elementor-clearfix elementor-active"
														data-tab="1" role="tabpanel"
														aria-labelledby="elementor-tab-title-2021" tabIndex="0"
														style={{ display: 'block' }}>
														<div data-elementor-type="section" data-elementor-id="158"
															className="elementor elementor-158">
															<section
																className="elementor-section elementor-top-section elementor-element elementor-element-96dace4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																data-id="96dace4" data-element_type="section">
																<div
																	className="elementor-container elementor-column-gap-default">
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3aa513d"
																		data-id="3aa513d" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-72ae0fc elementor-widget elementor-widget-image"
																				data-id="72ae0fc" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="300"
																						height="225"
																						src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/cars-01-300x225.png"
																						className="elementor-animation-bounce-in attachment-medium size-medium wp-image-810"
																						alt="" loading="lazy"
																						sizes="(max-width: 300px) 100vw, 300px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-213674d elementor-widget elementor-widget-heading"
																				data-id="213674d" data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						toyota Camry – economy</h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-8397a1a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="8397a1a"
																				data-element_type="section">
																				<div className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-25a8cf0"
																						data-id="25a8cf0"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-affcf21 elementor-widget elementor-widget-text-editor"
																								data-id="affcf21"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>Economy
																											Sedan</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-7c1765e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="7c1765e"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1567c58"
																						data-id="1567c58"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-fa443d2 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="fa443d2"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																													<FontAwesomeIcon icon={faUsers} />
																											</span>
																											<span
																												className="elementor-icon-list-text">1-3</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-0aa01bc elementor-align-center elementor-widget elementor-widget-button"
																				data-id="0aa01bc" data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-0cdc30b"
																		data-id="0cdc30b" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-9bc7a4a elementor-widget elementor-widget-image"
																				data-id="9bc7a4a" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="300"
																						height="142"
																						src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/image-removebg-preview-1.webp?time=1673814383"
																						className="elementor-animation-bounce-in attachment-medium size-medium wp-image-481"
																						alt="" loading="lazy" />
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-289526f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="289526f"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-42f1c54"
																						data-id="42f1c54"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-cb0d20b elementor-widget elementor-widget-heading"
																								data-id="cb0d20b"
																								data-element_type="widget"
																								data-widget_type="heading.default">
																								<div
																									className="elementor-widget-container">
																									<h2
																										className="elementor-heading-title elementor-size-default">
																										Cadillac XTS</h2>
																								</div>
																							</div>
																							<div className="elementor-element elementor-element-5b7ef26 elementor-widget elementor-widget-text-editor"
																								data-id="5b7ef26"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>Regular
																											Sedan</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-ecbbcfe elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="ecbbcfe"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2d2d5b3"
																						data-id="2d2d5b3"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-33f891e elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="33f891e"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																											<FontAwesomeIcon icon={faUsers}/>
																											</span>
																											<span
																												className="elementor-icon-list-text">1-3</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-76bbe2d elementor-align-center elementor-widget elementor-widget-button"
																				data-id="76bbe2d" data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e2d6cd4"
																		data-id="e2d6cd4" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-6616a3e elementor-widget elementor-widget-image"
																				data-id="6616a3e" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="397"
																						height="205"
																						src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/image-removebg-preview-2-1.png"
																						className="elementor-animation-bounce-in attachment-full size-full wp-image-282"
																						alt="" loading="lazy"
																						sizes="(max-width: 397px) 100vw, 397px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-c353568 elementor-widget elementor-widget-heading"
																				data-id="c353568" data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						Lincoln Continental</h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-1fa1cf7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="1fa1cf7"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0e99bda"
																						data-id="0e99bda"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-6accfcf elementor-widget elementor-widget-text-editor"
																								data-id="6accfcf"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>Regular
																											Sedan</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-30f038a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="30f038a"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5232701"
																						data-id="5232701"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-520f566 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="520f566"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																											<FontAwesomeIcon icon={faUsers}/>
																											</span>
																											<span
																												className="elementor-icon-list-text">1-3</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-51da24a elementor-align-center elementor-widget elementor-widget-button"
																				data-id="51da24a" data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bccb7b2"
																		data-id="bccb7b2" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-8109b06 elementor-widget elementor-widget-image"
																				data-id="8109b06" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="577"
																						height="433"
																						src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/image-removebg-preview-3.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-283"
																						alt="" loading="lazy"
																						sizes="(max-width: 577px) 100vw, 577px" />
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-fb9e324 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="fb9e324"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b9ec8e3"
																						data-id="b9ec8e3"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-5762d62 elementor-widget elementor-widget-text-editor"
																								data-id="5762d62"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>Regular
																											Sedan</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-a8c17a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="a8c17a8"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-14aaf5d"
																						data-id="14aaf5d"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-bfafa60 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="bfafa60"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																											<FontAwesomeIcon icon={faUsers}/>
																											</span>
																											<span
																												className="elementor-icon-list-text">1-3</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-9813fc6 elementor-align-center elementor-widget elementor-widget-button"
																				data-id="9813fc6" data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</section>
														</div>
													</div>

													<div id="elementor-tab-content-2022"
														className="elementor-tab-content elementor-clearfix" data-tab="2"
														role="tabpanel" aria-labelledby="elementor-tab-title-2022"
														tabIndex="0" hidden="hidden">
														<div data-elementor-type="section" data-elementor-id="290"
															className="elementor elementor-290">
															<section
																className="elementor-section elementor-top-section elementor-element elementor-element-f3bdbc4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																data-id="f3bdbc4" data-element_type="section">
																<div
																	className="elementor-container elementor-column-gap-default">
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fb2597f"
																		data-id="fb2597f" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-b6fed37 elementor-widget elementor-widget-image"
																				data-id="b6fed37" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="768"
																						height="576"
																						src="./City limo nyc -Best Limo service in New York_files/cars-02.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-812"
																						alt="" loading="lazy"
																						sizes="(max-width: 768px) 100vw, 768px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-52d3f23 elementor-widget elementor-widget-heading"
																				data-id="52d3f23" data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						Toyota RV4
																					</h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-1a6811f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="1a6811f"
																				data-element_type="section">
																				<div className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-c202711"
																						data-id="c202711"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-288fcde elementor-widget elementor-widget-text-editor"
																								data-id="288fcde"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span style={{ color: '#dcaf4e' }}>MID SIZE SUV – ECONOMY</span><br /><br /></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-27c4699 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="27c4699"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-05f4fa1"
																						data-id="05f4fa1"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-e24a418 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="e24a418"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																												<i aria-hidden="true"
																													className="fas fa-users"></i>
																											</span>
																											<span
																												className="elementor-icon-list-text">1-5</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-e32d860 elementor-align-center elementor-widget elementor-widget-button"
																				data-id="e32d860" data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-0948ba1"
																		data-id="0948ba1" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-5a83676 elementor-widget elementor-widget-image"
																				data-id="5a83676" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="600"
																						height="350"
																						src="./City limo nyc -Best Limo service in New York_files/image-removebg-preview-5.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-294"
																						alt="" loading="lazy"
																						sizes="(max-width: 600px) 100vw, 600px" />
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-90c72b8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="90c72b8"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1a8f45a"
																						data-id="1a8f45a"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-57b0b1b elementor-widget elementor-widget-heading"
																								data-id="57b0b1b"
																								data-element_type="widget"
																								data-widget_type="heading.default">
																								<div
																									className="elementor-widget-container">
																									<h2
																										className="elementor-heading-title elementor-size-default">
																										Chevrolet Suburban
																									</h2>
																								</div>
																							</div>
																							<div className="elementor-element elementor-element-6db7964 elementor-widget elementor-widget-text-editor"
																								data-id="6db7964"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>SUV
																										</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-5ae6aec elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="5ae6aec"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e21269a"
																						data-id="e21269a"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-dcdb42c elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="dcdb42c"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																												<i aria-hidden="true"
																													className="fas fa-users"></i>
																											</span>
																											<span
																												className="elementor-icon-list-text">6-7</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																							<div className="elementor-element elementor-element-9e9cc34 elementor-align-center elementor-widget elementor-widget-button"
																								data-id="9e9cc34"
																								data-element_type="widget"
																								data-widget_type="button.default">
																								<div
																									className="elementor-widget-container">
																									<div
																										className="elementor-button-wrapper">
																										<a href="https://citylimonyc.com/booking/"
																											className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																											role="button">
																											<span
																												className="elementor-button-content-wrapper">
																												<span
																													className="elementor-button-text">Booking</span>
																											</span>
																										</a>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e86f755"
																		data-id="e86f755" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-3845149 elementor-widget elementor-widget-image"
																				data-id="3845149" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="689"
																						height="362"
																						src="./City limo nyc -Best Limo service in New York_files/IMG-9966-removebg-preview.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-295"
																						alt="" loading="lazy"
																						sizes="(max-width: 689px) 100vw, 689px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-3c8293d elementor-widget elementor-widget-heading"
																				data-id="3c8293d" data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						Lincoln Navigator Reserve</h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-56625ea elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="56625ea"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-70feb43"
																						data-id="70feb43"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-32e2c82 elementor-widget elementor-widget-text-editor"
																								data-id="32e2c82"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>SUV
																										</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-66657e4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="66657e4"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b8beafd"
																						data-id="b8beafd"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-7ebf4f4 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="7ebf4f4"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																												<i aria-hidden="true"
																													className="fas fa-users"></i>
																											</span>
																											<span
																												className="elementor-icon-list-text">6-7</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-339c49e elementor-align-center elementor-widget elementor-widget-button"
																				data-id="339c49e" data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e7d65f5"
																		data-id="e7d65f5" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-797539a elementor-widget elementor-widget-image"
																				data-id="797539a" data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="615"
																						height="406"
																						src="./City limo nyc -Best Limo service in New York_files/image-removebg-preview-6.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-296"
																						alt="" loading="lazy"
																						sizes="(max-width: 615px) 100vw, 615px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-78f82a0 elementor-widget elementor-widget-heading"
																				data-id="78f82a0" data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						Gmc Yukon XL </h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-576360a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="576360a"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8328115"
																						data-id="8328115"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-f8e21a5 elementor-widget elementor-widget-text-editor"
																								data-id="f8e21a5"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>SUV
																										</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-16c58ed elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="16c58ed"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bc684ea"
																						data-id="bc684ea"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-b116083 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="b116083"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																												<i aria-hidden="true"
																													className="fas fa-users"></i>
																											</span>
																											<span
																												className="elementor-icon-list-text">6-7</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																							<div className="elementor-element elementor-element-9f29312 elementor-align-center elementor-widget elementor-widget-button"
																								data-id="9f29312"
																								data-element_type="widget"
																								data-widget_type="button.default">
																								<div
																									className="elementor-widget-container">
																									<div
																										className="elementor-button-wrapper">
																										<a href="https://citylimonyc.com/booking/"
																											className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																											role="button">
																											<span
																												className="elementor-button-content-wrapper">
																												<span
																													className="elementor-button-text">Booking</span>
																											</span>
																										</a>
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
														</div>
													</div>
													<div className="elementor-tab-title elementor-tab-mobile-title"
														aria-selected="false" data-tab="3" role="tab" tabIndex="-1"
														aria-controls="elementor-tab-content-2023" aria-expanded="false">
														Luxury</div>
													<div id="elementor-tab-content-2023"
														className="elementor-tab-content elementor-clearfix" data-tab="3"
														role="tabpanel" aria-labelledby="elementor-tab-title-2023"
														tabIndex="0" hidden="hidden">
														<div data-elementor-type="section" data-elementor-id="160"
															className="elementor elementor-160">
															<section
																className="elementor-section elementor-top-section elementor-element elementor-element-1374bae2 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																data-id="1374bae2" data-element_type="section">
																<div
																	className="elementor-container elementor-column-gap-default">
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fc51d1b"
																		data-id="fc51d1b" data-element_type="column">
																		<div className="elementor-widget-wrap">
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-7ac2fdee"
																		data-id="7ac2fdee" data-element_type="column"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-2820dce2 elementor-widget elementor-widget-image"
																				data-id="2820dce2"
																				data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="577"
																						height="433"
																						src="./City limo nyc -Best Limo service in New York_files/BMW-750i-removebg-preview.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-270"
																						alt="" loading="lazy"
																						sizes="(max-width: 577px) 100vw, 577px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-5062972d elementor-widget elementor-widget-heading"
																				data-id="5062972d"
																				data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						BMW 750i black on lack
																						2022</h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-f9fc082 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="f9fc082"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-de8d1c7"
																						data-id="de8d1c7"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-514ab7e elementor-widget elementor-widget-text-editor"
																								data-id="514ab7e"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span style={{ color: "#dcaf4e" }}>Luxury</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-b2e46c5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="b2e46c5"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0e67fd0"
																						data-id="0e67fd0"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-7e4666d elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="7e4666d"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																											<FontAwesomeIcon icon={faUsers}/>
																											</span>
																											<span
																												className="elementor-icon-list-text">1-3</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-6d67a479 elementor-align-center elementor-widget elementor-widget-button"
																				data-id="6d67a479"
																				data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ae2be8f"
																		data-id="ae2be8f" data-element_type="column">
																		<div
																			className="elementor-widget-wrap elementor-element-populated">
																			<div className="elementor-element elementor-element-56b402d4 elementor-widget elementor-widget-image"
																				data-id="56b402d4"
																				data-element_type="widget"
																				data-widget_type="image.default">
																				<div className="elementor-widget-container">
																					<img decoding="async" width="758"
																						height="330"
																						src="./City limo nyc -Best Limo service in New York_files/mercedes_benz_s_class_w222_chernyj_vid_sboku_105326_1920x108WWW0-1.png"
																						className="elementor-animation-bounce-in attachment-large size-large wp-image-157"
																						alt="" loading="lazy"
																						sizes="(max-width: 758px) 100vw, 758px" />
																				</div>
																			</div>
																			<div className="elementor-element elementor-element-8512540 elementor-widget elementor-widget-heading"
																				data-id="8512540" data-element_type="widget"
																				data-widget_type="heading.default">
																				<div className="elementor-widget-container">
																					<h2
																						className="elementor-heading-title elementor-size-default">
																						Mersedes Benz S-Class</h2>
																				</div>
																			</div>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-a8fee3d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="a8fee3d"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ac7c55c"
																						data-id="ac7c55c"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-7db882f elementor-widget elementor-widget-text-editor"
																								data-id="7db882f"
																								data-element_type="widget"
																								data-widget_type="text-editor.default">
																								<div
																									className="elementor-widget-container">
																									<p
																										style={{ color: '#818181' }}>
																										Category:
																										<a><strong><span
																											style={{ color: '#dcaf4e' }}>Luxury</span></strong></a>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<section
																				className="elementor-section elementor-inner-section elementor-element elementor-element-f6aad2f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
																				data-id="f6aad2f"
																				data-element_type="section">
																				<div
																					className="elementor-container elementor-column-gap-default">
																					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7f47f4f"
																						data-id="7f47f4f"
																						data-element_type="column">
																						<div
																							className="elementor-widget-wrap elementor-element-populated">
																							<div className="elementor-element elementor-element-e7fd54d elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
																								data-id="e7fd54d"
																								data-element_type="widget"
																								data-widget_type="icon-list.default">
																								<div
																									className="elementor-widget-container">
																									<ul
																										className="elementor-icon-list-items">
																										<li
																											className="elementor-icon-list-item">
																											<span
																												className="elementor-icon-list-icon">
																											<FontAwesomeIcon icon={faUsers}/>
																											</span>
																											<span
																												className="elementor-icon-list-text">1-3</span>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</section>
																			<div className="elementor-element elementor-element-598c641b elementor-align-center elementor-widget elementor-widget-button"
																				data-id="598c641b"
																				data-element_type="widget"
																				data-widget_type="button.default">
																				<div className="elementor-widget-container">
																					<div className="elementor-button-wrapper">
																						<a href="https://citylimonyc.com/booking/"
																							className="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"
																							role="button">
																							<span
																								className="elementor-button-content-wrapper">
																								<span
																									className="elementor-button-text">Booking</span>
																							</span>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-cf5e6cb"
																		data-id="cf5e6cb" data-element_type="column">
																		<div className="elementor-widget-wrap">
																		</div>
																	</div>
																</div>
															</section>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>


								</div>
							</div>
						</div>
					</section>
					<section
						className="elementor-section elementor-top-section elementor-element elementor-element-5203018 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
						data-id="5203018" data-element_type="section"
						data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="elementor-container elementor-column-gap-default">
							<div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-3e691f18"
								data-id="3e691f18" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-a69e48d elementor-widget elementor-widget-image"
										data-id="a69e48d" data-element_type="widget" data-widget_type="image.default">
										<div className="elementor-widget-container">
											<img decoding="async" width="218" height="93"
												src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Logo_Chopard.png?time=1673814383"
												className="attachment-medium size-medium wp-image-94" alt="" loading="lazy" />
										</div>
									</div>
								</div>
							</div>
							<div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-6311706e"
								data-id="6311706e" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-213f4cb elementor-widget elementor-widget-image"
										data-id="213f4cb" data-element_type="widget" data-widget_type="image.default">
										<div className="elementor-widget-container">
											<img decoding="async" width="300" height="76"
												src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/09/HLS-LIMOUSINE.webp?time=1673814383"
												className="attachment-medium size-medium wp-image-469" alt="" loading="lazy" />
										</div>
									</div>
								</div>
							</div>
							<div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-6a1eb9f5"
								data-id="6a1eb9f5" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-6a44464 elementor-widget elementor-widget-image"
										data-id="6a44464" data-element_type="widget" data-widget_type="image.default">
										<div className="elementor-widget-container">
											<img decoding="async" width="280" height="88"
												src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Emirates.png?time=1673814383"
												className="attachment-medium size-medium wp-image-96" alt="" loading="lazy" />
										</div>
									</div>
								</div>
							</div>
							<div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-6a8280f0"
								data-id="6a8280f0" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-39e2b8ef elementor-widget elementor-widget-image"
										data-id="39e2b8ef" data-element_type="widget" data-widget_type="image.default">
										<div className="elementor-widget-container">
											<img decoding="async" width="180" height="84"
												src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/IWC.png?time=1673814383"
												className="attachment-medium size-medium wp-image-97" alt="" loading="lazy" />
										</div>
									</div>
								</div>
							</div>
							<div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-702819f3"
								data-id="702819f3" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-519c3c65 elementor-widget elementor-widget-image"
										data-id="519c3c65" data-element_type="widget" data-widget_type="image.default">
										<div className="elementor-widget-container">
											<img decoding="async" width="209" height="62"
												src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/1200px-Cartier_logo.png?time=1673814383"
												className="attachment-medium size-medium wp-image-98" alt="" loading="lazy" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section
						className="elementor-section elementor-top-section elementor-element elementor-element-2aab6b1b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
						data-id="2aab6b1b" data-element_type="section"
						data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="elementor-container elementor-column-gap-default">
							<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-52b506bd"
								data-id="52b506bd" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-667c8409 elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="667c8409" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">Why Choose City Limo
												NYC?</h2>
										</div>
									</div>
									<div className="elementor-element elementor-element-20e61c18 elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="20e61c18" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">Our main advantages
												are to be chosen by us</h2>
										</div>
									</div>
									<section
										className="elementor-section elementor-inner-section elementor-element elementor-element-525d039d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
										data-id="525d039d" data-element_type="section"
										data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
										<div className="elementor-container elementor-column-gap-default">
											<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5af86888"
												data-id="5af86888" data-element_type="column"
												data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-c70331f elementor-widget elementor-widget-image"
														data-id="c70331f" data-element_type="widget"
														data-widget_type="image.default">
														<div className="elementor-widget-container">
															<img decoding="async" width="126" height="126"
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Mask-group1.png?time=1673814383"
																className="attachment-medium size-medium wp-image-169" alt=""
																loading="lazy" />
														</div>
													</div>
													<div className="elementor-element elementor-element-5b92917a elementor-widget elementor-widget-heading"
														data-id="5b92917a" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">
																Online Reservation</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-444a4611 elementor-widget elementor-widget-heading"
														data-id="444a4611" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">No
																need to leave the house and go somewhere. Call our drivers
																online, choosing the right car for yourself.</h2>
														</div>
													</div>
												</div>
											</div>
											<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6ba13d26"
												data-id="6ba13d26" data-element_type="column"
												data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-6412cece elementor-widget elementor-widget-image"
														data-id="6412cece" data-element_type="widget"
														data-widget_type="image.default">
														<div className="elementor-widget-container">
															<img decoding="async" width="120" height="131"
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Mask-group-3.png?time=1673814383"
																className="attachment-medium size-medium wp-image-170" alt=""
																loading="lazy" />
														</div>
													</div>
													<div className="elementor-element elementor-element-1ee4ebf elementor-widget elementor-widget-heading"
														data-id="1ee4ebf" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">
																Professional Drivers</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-26c4c195 elementor-widget elementor-widget-heading"
														data-id="26c4c195" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">City
																Limo NYC chauffeurs are among the best trained and most
																experienced professionals in the industry.</h2>
														</div>
													</div>
												</div>
											</div>
											<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-227d5978"
												data-id="227d5978" data-element_type="column"
												data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-17af6faf elementor-widget elementor-widget-image"
														data-id="17af6faf" data-element_type="widget"
														data-widget_type="image.default">
														<div className="elementor-widget-container">
															<img decoding="async" width="173" height="118"
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Mask-group-1-2.png?time=1673814383"
																className="attachment-medium size-medium wp-image-171" alt=""
																loading="lazy" />
														</div>
													</div>
													<div className="elementor-element elementor-element-279dc6fa elementor-widget elementor-widget-heading"
														data-id="279dc6fa" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">
																Prestige Vehicles</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-53202ad8 elementor-widget elementor-widget-heading"
														data-id="53202ad8" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">All
																our cars radiate maximum comfort and safety, as well as the
																latest innovations that our industry can offer.</h2>
														</div>
													</div>
												</div>
											</div>
											<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-40eebebb"
												data-id="40eebebb" data-element_type="column"
												data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-d249a1c elementor-widget elementor-widget-image"
														data-id="d249a1c" data-element_type="widget"
														data-widget_type="image.default">
														<div className="elementor-widget-container">
															<img decoding="async" width="145" height="132"
																src="https://a6ke76.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Mask-group-2-1.png?time=1673814383"
																className="attachment-medium size-medium wp-image-173" alt=""
																loading="lazy" />
														</div>
													</div>
													<div className="elementor-element elementor-element-175d2bc1 elementor-widget elementor-widget-heading"
														data-id="175d2bc1" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">
																Online Payment</h2>
														</div>
													</div>
													<div className="elementor-element elementor-element-6e9b9859 elementor-widget elementor-widget-heading"
														data-id="6e9b9859" data-element_type="widget"
														data-widget_type="heading.default">
														<div className="elementor-widget-container">
															<h2 className="elementor-heading-title elementor-size-default">For
																the convenience of our customers, we have made an online
																payment system, you just have to wait for your car</h2>
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
						className="elementor-section elementor-top-section elementor-element elementor-element-b11b2a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
						data-id="b11b2a2" data-element_type="section">
						<div className="elementor-container elementor-column-gap-default">
							<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9467f34"
								data-id="9467f34" data-element_type="column">
								<div className="elementor-widget-wrap">
								</div>
							</div>
						</div>
					</section>

					<section
						className="elementor-section elementor-top-section elementor-element elementor-element-65f90bad elementor-section-boxed elementor-section-height-default elementor-section-height-default"
						data-id="65f90bad" data-element_type="section" id="contact"
						data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="elementor-container elementor-column-gap-default">
							<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-73f8093c"
								data-id="73f8093c" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-c1ba31c elementor-widget elementor-widget-shortcode"
										data-id="c1ba31c" data-element_type="widget" data-widget_type="shortcode.default">
										<div className="elementor-widget-container">
											<div className="elementor-shortcode">
												<div data-elementor-type="section" data-elementor-id="323"
													className="elementor elementor-323">
													<section
														className="elementor-section elementor-top-section elementor-element elementor-element-cdcdcf4 car-carousel  elementor-section-boxed elementor-section-height-default elementor-section-height-default"
														data-id="cdcdcf4" data-element_type="section">
														<div className="elementor-container elementor-column-gap-default">
															<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-26949d9"
																data-id="26949d9" data-element_type="column">
																<div
																	className="elementor-widget-wrap elementor-element-populated">
																	<div className="elementor-element elementor-element-34778d9 elementor-widget elementor-widget-heading animated fadeInLeft"
																		data-id="34778d9" data-element_type="widget"
																		data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
																		data-widget_type="heading.default">
																		<div className="elementor-widget-container">
																			<h2
																				className="elementor-heading-title elementor-size-default">
																				Our Drivers</h2>
																		</div>
																	</div>
																	<div className="elementor-element elementor-element-b478c53 elementor-widget elementor-widget-text-editor"
																		data-id="b478c53" data-element_type="widget"
																		data-widget_type="text-editor.default">
																		<div className="elementor-widget-container">
																			<p>At City Limo NYC, our drivers are
																				well-trained and well-mannered. We give a
																				good amount of effort into choosing our
																				chauffeurs while appointing them. They have
																				to pass certain criteria to be our Limo
																				chauffeurs. So, we choose the best out of
																				rest.</p>
																		</div>
																	</div>
																	<div className="elementor-element elementor-element-e05b9b4 elementor-widget__width-auto card-prev elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button"
																		data-id="e05b9b4" data-element_type="widget"
																		data-widget_type="button.default">
																		<div className="elementor-widget-container">
																			<div className="elementor-button-wrapper">
																				<a href="https://citylimonyc.com/#"
																					className="elementor-button-link elementor-button elementor-size-sm"
																					role="button">
																					<span
																						className="elementor-button-content-wrapper">
																						<span
																							className="elementor-button-text">⟵</span>
																					</span>
																				</a>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-element elementor-element-4bd32b5 elementor-widget__width-auto card-next elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button"
																		data-id="4bd32b5" data-element_type="widget"
																		data-widget_type="button.default">
																		<div className="elementor-widget-container">
																			<div className="elementor-button-wrapper">
																				<a href="https://citylimonyc.com/#"
																					className="elementor-button-link elementor-button elementor-size-sm"
																					role="button">
																					<span
																						className="elementor-button-content-wrapper">
																						<span
																							className="elementor-button-text">⟶</span>
																					</span>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8fed945"
																data-id="8fed945" data-element_type="column">
																<div
																	className="elementor-widget-wrap elementor-element-populated e-swiper-container">
																	<div className="elementor-element elementor-element-3851cc5 elementor-testimonial--skin-default elementor-testimonial--layout-image_inline elementor-testimonial--align-center elementor-arrows-yes elementor-widget elementor-widget-testimonial-carousel e-widget-swiper"
																		data-id="3851cc5" data-element_type="widget"
																		data-settings="{&quot;slides_per_view&quot;:&quot;3&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]},&quot;slides_per_view_tablet&quot;:&quot;2&quot;,&quot;slides_per_view_mobile&quot;:&quot;1&quot;,&quot;show_arrows&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;loop&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}"
																		data-widget_type="testimonial-carousel.default">
																		<div className="elementor-widget-container">
																			<div className="elementor-swiper">
																				<div className="elementor-main-swiper swiper-container swiper-container-initialized swiper-container-horizontal"
																					style={{ cursor: 'grab' }}>
																					<div className="swiper-wrapper"
																						style={{ transform: 'translate3d(-1586.67px, 0px, 0px)', transitionDuration: '0ms' }}>
																						<div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
																							data-swiper-slide-index="0"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																												src={cab1}
																											alt="Shaikat Ali " />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Shaikat
																											Ali </span><span
																												className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
																							data-swiper-slide-index="1"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																												src={cab1}
																											alt="Mostak Ahmed" />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Mostak
																											Ahmed</span><span
																												className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
																							data-swiper-slide-index="2"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																												src={cab1}
																											alt="Rashed Ahmed" />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Rashed
																											Ahmed
																										</span><span
																											className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-prev"
																							data-swiper-slide-index="0"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																												src={cab1}
																											alt="Shaikat Ali " />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Shaikat
																											Ali </span><span
																												className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-active"
																							data-swiper-slide-index="1"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																												src={cab1}
																											alt="Mostak Ahmed" />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Mostak
																											Ahmed</span><span
																												className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-next"
																							data-swiper-slide-index="2"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																												src={cab1}
																											alt="Rashed Ahmed " />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Rashed
																											Ahmed
																										</span><span
																											className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
																							data-swiper-slide-index="0"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																											src={cab1}
																											alt="Shaikat Ali " />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">Shaikat
																											Ali </span><span
																												className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
																							data-swiper-slide-index="1"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																											src={cab1}
																											alt="abc person" />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">abc person</span><span
																												className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																						<div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
																							data-swiper-slide-index="2"
																							style={{ width: '366.667px', marginRight: '30px' }}>
																							<div
																								className="elementor-testimonial">
																								<div
																									className="elementor-testimonial__footer">
																									<div
																										className="elementor-testimonial__image">
																										<img decoding="async"
																											src={cab1}
																											alt="XYZ person" />
																									</div>
																									<cite
																										className="elementor-testimonial__cite"><span
																											className="elementor-testimonial__name">XYZ person
																										</span><span
																											className="elementor-testimonial__title">Driver</span></cite>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div className="elementor-swiper-button elementor-swiper-button-prev"
																						tabIndex="0" role="button"
																						aria-label="Previous slide">
																						<i aria-hidden="true"
																							className="eicon-chevron-left"></i>
																						<span
																							className="elementor-screen-only">Previous</span>
																					</div>
																					<div className="elementor-swiper-button elementor-swiper-button-next"
																						tabIndex="0" role="button"
																						aria-label="Next slide">
																						<i aria-hidden="true"
																							className="eicon-chevron-right"></i>
																						<span
																							className="elementor-screen-only">Next</span>
																					</div>
																					<span className="swiper-notification"
																						aria-live="assertive"
																						aria-atomic="true"></span>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="elementor-element elementor-element-a5cd387 elementor-widget elementor-widget-html"
																		data-id="a5cd387" data-element_type="widget"
																		data-widget_type="html.default">
																		<div className="elementor-widget-container">

																		</div>
																	</div>
																</div>
															</div>
														</div>
													</section>
												</div>
											</div>
										</div>
									</div>
									<div className="elementor-element elementor-element-3ba6a79f elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="3ba6a79f" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">Contact us</h2>
										</div>
									</div>
									<div className="elementor-element elementor-element-50979f52 elementor-widget elementor-widget-heading animated fadeInLeft"
										data-id="50979f52" data-element_type="widget"
										data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:400}"
										data-widget_type="heading.default">
										<div className="elementor-widget-container">
											<h2 className="elementor-heading-title elementor-size-default">If you have any
												complaints or suggestions that will make our service more better and
												reliable, please be generous to fill up the contact form below and let us
												know how we can help you!
											</h2>
										</div>
									</div>
									<section
										className="elementor-section elementor-inner-section elementor-element elementor-element-a5d4ef3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
										data-id="a5d4ef3" data-element_type="section"
										data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
										<div className="elementor-container elementor-column-gap-default">
											<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8019e9b"
												data-id="8019e9b" data-element_type="column">
												<div className="elementor-widget-wrap elementor-element-populated">
													<div className="elementor-element elementor-element-2204c73f elementor-button-align-start elementor-widget elementor-widget-form"
														data-id="2204c73f" data-element_type="widget"
														data-settings="{&quot;button_width&quot;:&quot;30&quot;,&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
														data-widget_type="form.default">
														<div className="elementor-widget-container">
															<form className="elementor-form" ref={form} onSubmit={sendEmail}>
																<input type="hidden" name="post_id" value="71" />
																<input type="hidden" name="form_id" value="2204c73f" />
																<input type="hidden" name="referer_title"
																	value="City limo nyc -Best Limo service in New York" />
																<input type="hidden" name="queried_id" value="71" />
																<div
																	className="elementor-form-fields-wrapper elementor-labels-above">
																	<div
																		className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
																		<label
																			className="elementor-field-label">
																			Name </label>
																		<input size="1" type="text"  
																			id="form-field-name"
																			className="elementor-field elementor-size-sm  elementor-field-textual"
																			placeholder="Name" required="required"
																			name="user_name"
																			aria-required="true" />
																	</div>
																	<div
																		className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
																		<label
																			className="elementor-field-label">
																			Email </label>
																		<input size="1" type="email"
																			name="reply_to"  id="form-field-email"
																			className="elementor-field elementor-size-sm  elementor-field-textual"
																			placeholder="example@gmail.com"
																			required="required" aria-required="true" />
																	</div>
																	<div
																		className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-50">
																		<label
																			className="elementor-field-label">
																			Message </label>
																		<textarea
																			className="elementor-field-textual elementor-field  elementor-size-sm"
																			id="form-field-message" rows="4"
																			placeholder="Message"
																			name="message"
																			></textarea>
																	</div>
																	<div
																		className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_1a3bc62 elementor-col-50 elementor-field-required">
																		<label
																			className="elementor-field-label">
																			Phone </label>
																		<input size="1" type="tel"
																			name="contact_number"
																			id="form-field-field_1a3bc62"
																			className="elementor-field elementor-size-sm  elementor-field-textual"
																			required="required" aria-required="true"
																			pattern="[0-9()#&amp;+*-=.]+"
																			title="Only numbers and phone characters (#, -, *, etc) are accepted." />

																	</div>
																	<div
																		className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-30 e-form__buttons">
																		<button type="submit"
																			className="elementor-button elementor-size-sm"
																			id="submit-btn">
																			<span>
																				<span className=" elementor-button-icon">
																				</span>
																				<span className="elementor-button-text">Submit
																					Now</span>
																			</span>
																		</button>
																	</div>
																</div>
															</form>
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
				</div>
				<div className="post-tags">
				</div>
			</div> 
		</main>
	)
}

export default Main;