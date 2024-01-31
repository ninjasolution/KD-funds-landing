import React, { useEffect, useState } from "react";
import Peoples from "../../assets/images/Home/2nd.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import W1 from "../../assets/images/kd_symbol1@2x.png";

const Journey = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [tabIndex, setTabIndex] = useState(0);
  const data = ["Register", "Subscribe"];

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      companyName: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      companyName: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("Required"),
      message: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("Required"),
    }),
  });

  const sendRequestHandler = (e) => {
    e.preventDefault();
    axios
      .post("", {
        email: formik.values.email,
        firstName: formik.values.firstName,
        companyName: formik.values.companyName,
        message: formik.values.message,
      })
      .then((res) => {});
  };

  return (
    <>
      <div className="bg-[#F0F6FC] relative">
      <img src={W1} alt="w1" className="absolute bottom-[-25%] right-0 w-[200px]" />
      <img src={W1} alt="w1" className="absolute top-0 bottom-0 right-0 my-auto w-[450px]" />
      {/* <img src={W1} alt="w1" className="absolute right-0 w-[100px]" /> */}
        {/* <img
          src={W1}
          alt="w1"
          className="absolute right-0 top-0 w-[180px]"
        /> */}
        <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24">
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[715px] w-full mx-auto"
          >
            <div className="flex gap-4 items-center justify-center">
              <p className="roboto-mono text-xs text-[#3d4043] font-normal">
                Connect
              </p>
              <div className="w-20 h-[1px] bg-[#3d4043]"></div>
            </div>
            <h1 className="text-center lg:text-[56px] text-4xl text-[#3d4043] mt-6 mb-10">
              Stay In Touch
            </h1>
            <h2 className="wp-block-heading text-center">
              Fill in your details below to hear back from one of our team.
              <br />
              All data is held strictly in confidence and we do not cross-market
              or sell your data.
            </h2>
            {/* <p>Stay up-to-date with our latest news and content on trading, technology and market structure.<br /></p> */}
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex gap-4 justify-center xl:flex-nowrap flex-wrap mt-10 items-end"
          >
            <div
              id="hbspt-form-933f7ef6-542c-4cc5-9591-b04b89c63b94"
              className="hbspt-form w-[700px]"
              data-hs-forms-root="true"
            >
              <form
                onSubmit={sendRequestHandler}
                id="hsForm_c32fe1c5-808b-4aac-a295-516cce6f0323"
                className="hs-form-private hsForm_c32fe1c5-808b-4aac-a295-516cce6f0323 hs-form-c32fe1c5-808b-4aac-a295-516cce6f0323 hs-form-c32fe1c5-808b-4aac-a295-516cce6f0323_933f7ef6-542c-4cc5-9591-b04b89c63b94 hs-form stacked"
              >
                {/* Email field */}
                <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
                  <label
                    id="label-email-c32fe1c5-808b-4aac-a295-516cce6f0323"
                    className=""
                    placeholder="Enter your Email"
                    htmlFor="email-c32fe1c5-808b-4aac-a295-516cce6f0323"
                  >
                    <span>Email</span>
                    <span className="hs-form-required">*</span>
                  </label>
                  <legend
                    className="hs-field-desc"
                    style={{ display: "none" }}
                  ></legend>
                  <div className="input">
                    <input
                      id="email-c32fe1c5-808b-4aac-a295-516cce6f0323"
                      name="email"
                      {...formik.getFieldProps("email")}
                      type="email"
                      className="hs-input"
                      inputMode="email"
                      autoComplete="email"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className="min-h-[36px] pt-2 text-sm text-[#F32013]">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                {/* Additional form fields go here (First name, Company name) */}
                <div className="hs-dependent-field">
                  <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
                    <label
                      id="label-firstname-c32fe1c5-808b-4aac-a295-516cce6f0323"
                      className=""
                      placeholder="Enter your First name"
                      htmlFor="firstname-c32fe1c5-808b-4aac-a295-516cce6f0323"
                    >
                      <span>First name</span>
                      <span className="hs-form-required">*</span>
                    </label>
                    <legend
                      className="hs-field-desc"
                      style={{ display: "none" }}
                    ></legend>
                    <div className="input">
                      <input
                        id="firstname-c32fe1c5-808b-4aac-a295-516cce6f0323"
                        {...formik.getFieldProps("firstName")}
                        type="text"
                        className="hs-input"
                        inputMode="text"
                        autoComplete="given-name"
                      />
                    </div>
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="min-h-[36px] pt-2 text-sm text-[#F32013]">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hs-dependent-field">
                  <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
                    <label
                      id="label-company-c32fe1c5-808b-4aac-a295-516cce6f0323"
                      className=""
                      placeholder="Enter your Company name"
                      htmlFor="company-c32fe1c5-808b-4aac-a295-516cce6f0323"
                    >
                      <span>Company name</span>
                      <span className="hs-form-required">*</span>
                    </label>
                    <legend
                      className="hs-field-desc"
                      style={{ display: "none" }}
                    ></legend>
                    <div className="input">
                      <input
                        id="company-c32fe1c5-808b-4aac-a295-516cce6f0323"
                        name="company"
                        {...formik.getFieldProps("companyName")}
                        type="text"
                        className="hs-input"
                        inputMode="text"
                        autoComplete="organization"
                      />
                    </div>
                    {formik.touched.companyName &&
                      formik.errors.companyName && (
                        <div className="min-h-[36px] pt-2 text-sm text-[#F32013]">
                          {formik.errors.companyName}
                        </div>
                      )}
                  </div>
                </div>

                <div className="hs-dependent-field">
                  <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
                    <label
                      id="label-company-c32fe1c5-808b-4aac-a295-516cce6f0323"
                      className=""
                      placeholder="Enter your Company name"
                      htmlFor="company-c32fe1c5-808b-4aac-a295-516cce6f0323"
                    >
                      <span>Message</span>
                      <span className="hs-form-required">*</span>
                    </label>
                    <legend
                      className="hs-field-desc"
                      style={{ display: "none" }}
                    ></legend>
                    <div className="input">
                      <textarea
                        id="company-c32fe1c5-808b-4aac-a295-516cce6f0323"
                        name="message"
                        {...formik.getFieldProps("message")}
                        required=""
                        placeholder=""
                        type="text"
                        className="hs-input"
                        inputMode="text"
                        autoComplete="organization"
                      />
                    </div>
                    {formik.touched.message && formik.errors.message && (
                      <div className="min-h-[36px] pt-2 text-sm text-[#F32013]">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Consent and legal information */}
                <div
                  className="hs_insights_newsletter_subscription hs-insights_newsletter_subscription hs-fieldtype-booleancheckbox field hs-form-field"
                  style={{ display: "none" }}
                >
                  <legend
                    className="hs-field-desc"
                    style={{ display: "none" }}
                  ></legend>
                  <div className="input">
                    <input
                      name="insights_newsletter_subscription"
                      className="hs-input"
                      type="hidden"
                      value="true"
                    />
                  </div>
                </div>

                <div className="legal-consent-container">
                  <div>
                    <div className="hs-dependent-field">
                      <div className="hs_LEGAL_CONSENT.subscription_type_45171867 hs-LEGAL_CONSENT.subscription_type_45171867 hs-fieldtype-booleancheckbox field hs-form-field">
                        <legend
                          className="hs-field-desc"
                          style={{ display: "none" }}
                        ></legend>
                        <div className="input">
                          <ul className="inputs-list" required="">
                            <li className="hs-form-booleancheckbox">
                              <label
                                htmlFor="LEGAL_CONSENT.subscription_type_45171867-c32fe1c5-808b-4aac-a295-516cce6f0323"
                                className="hs-form-booleancheckbox-display"
                              >
                                <input
                                  id="LEGAL_CONSENT.subscription_type_45171867-c32fe1c5-808b-4aac-a295-516cce6f0323"
                                  className="hs-input"
                                  type="checkbox"
                                  name="LEGAL_CONSENT.subscription_type_45171867"
                                  value="true"
                                />
                                <span>
                                  <p>
                                    Please give me a call back to arrange a time
                                    for a discussion.
                                  </p>
                                </span>
                              </label>
                            </li>
                            <li className="hs-form-booleancheckbox">
                              <label
                                htmlFor="LEGAL_CONSENT.subscription_type_45171867-c32fe1c5-808b-4aac-a295-516cce6f0323"
                                className="hs-form-booleancheckbox-display"
                              >
                                <input
                                  id="LEGAL_CONSENT.subscription_type_45171867-c32fe1c5-808b-4aac-a295-516cce6f0323"
                                  className="hs-input"
                                  type="checkbox"
                                  name="LEGAL_CONSENT.subscription_type_45171867"
                                  value="true"
                                />
                                <span>
                                  <p>
                                    I agree to receive news and other
                                    communications from time to time.*
                                  </p>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <legend
                      className="hs-field-desc checkbox-desc"
                      style={{ display: "none" }}
                    ></legend>
                  </div>
                </div>

                {/* Submit button */}
                <div className="hs_submit hs-submit">
                  <div
                    className="hs-field-desc"
                    style={{ display: "none" }}
                  ></div>
                  <div className="actions">
                    <div className="wp-block-buttons">
                      {/* <a className="btn_new_24" id="#">
                        Send
                        <span>
                          <svg>
                            <use xlink:href="#arrow" href="#arrow"></use>
                          </svg>
                        </span>
                      </a> */}
                      <a
                        href="#"
                        class="hover_btn_effect"
                        data-attr="Send"
                      >
                        {" "}
                        <span> Send </span>
                        <span class="hover_design"> </span>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <nav className="flex">
            {
              tabIndex == 1 &&
              <Link to={"#"} className={`btn btn-prev`} onClick={() => setTabIndex(0)}>Prev</Link>
            }
            {
              tabIndex == 0 &&
              <Link to={"#"} className={`btn btn-next`} onClick={() => setTabIndex(1)}>Next</Link>
            }
            <ul className="flex space-x-5 ml-5">
              {data.map((row, index) => (
                <li key={index} className={(parseInt(index) === tabIndex) ? 'text-[#F1870F]' : ''}>
                  <Link to={"#"} onClick={() => setTabIndex(index)}>{row}</Link>
                </li>
              ))}
            </ul>
          </nav> */}
        </div>
      </div>
    </>
  );
};

export default Journey;
