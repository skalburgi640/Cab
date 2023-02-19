import './custom-post-4.css';

const Contactus = ({ sendEmail, form }) => {
	return (
		<>
			<section className="elementor-section elementor-inner-section elementor-element elementor-element-a5d4ef3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
				data-id="a5d4ef3" data-element_type="section" id="contactus"
				data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
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
						<h2 className="elementor-heading-title elementor-size-default">Get a quote. Fill below details and submit form. W'll reach out to you shortly with the better deal.
						</h2>
					</div>
				</div>
			
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
													name="user_email" id="form-field-email"
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
		</>
	)
}
export default Contactus;