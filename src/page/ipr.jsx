import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import InquiryForm from "../files/InquiryForm.pdf";
import IPRBroucher from "../files/iprBrochuer.jpg"




const IPR = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>CHARUSAT IPR Facilitation</h3>
                            <div className="meta-post">
                              <ul className="lab-ul">
                                CHARUSAT IPR Facilitation provides services to
                                all the innovators to protect intellectual
                                property. It offers this facility to innovators,
                                researchers, faculties, students and grassroots
                                innovators within and outside CHARUSAT.
                              </ul>
                              <br/>
                              <a class="lab-btn" href={IPRBroucher}><span>Brochure</span></a>{"    "}
                              <a class="lab-btn" href={InquiryForm}><span>Inquiry Form</span></a>
                            </div>
                            <h4>
                              Unique Features of CHARUSAT IPR Facilitation
                            </h4>
                            <hr />
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Onsite Pool of Technical experts
                                </strong>{" "}
                                - Being a university, we have the availability
                                of technical expertise in various fields like
                                pharmaceutical, electrical, electronics,
                                mechanical, civil, computer, etc. in one place.
                                You can get advice and guidance regarding your
                                idea.
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Availability of Sophisticated Technology
                                </strong>{" "}
                                - CHARUSAT is equipped with state-of-art
                                infrastructure, machines, and sophisticated
                                equipment. You may avail of all of these
                                facilities in one place to update and upgrade
                                your innovations.
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Onsite IPR Experts</strong> - CHARUSAT
                                IPR Facilitation is equipped with the experts
                                having rich experience in intellectual property
                                rights. We have the availability of registered
                                patent agents for any of your techno-legal
                                queries.
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Cost-Effective</strong> - Minimal
                                overheads result in lesser charges than
                                professional firms. At CHARUSAT IPR Facilitation
                                you may avail IPR services at assured low
                                charges than other professional IP Firms.
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Diligence and Expertise</strong> - An
                                “A+” grade university gives a satisfactory and
                                trustworthy output in work. The honesty,
                                integrity and transparency are fundamental
                                values of CHARUSAT. One can avail of the
                                dedicated and worthy IPR services with utmost
                                work ethics and client satisfaction.
                              </li>
                            </ul>
                            <br />
                            <h4>
                              Activities of CHARUSAT IPR Facilitation Cell
                            </h4>
                            <hr />
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Creating IPR Awareness among Students,
                                  Faculties and Researchers
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Provide IPR related support (Patent Drafting,
                                  Filing and other Prosecution Related Tasks)
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Technology Transfer and Commercialization of
                                  Intellectual Property of the University
                                </strong>{" "}
                              </li>
                            </ul>
                            <br/>
                            <h4>Facilities @ CHARUSAT IPR Facilitation</h4>
                            <hr />
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Patent</strong> <br /><br />
                                <strong>Prior Art Search</strong> - Patentability search for the
                                novelty of invention in various databases
                                including patent and non-patent literature.
                                <br /><br /><strong>Patent Landscape Analysis</strong> - It is a comprehensive
                                report of the state-of-art search for the
                                relevant technology with client customization.
                                <br /><br /><strong>Freedom to Operate Search</strong> - A Freedom to Operate
                                (FTO) analysis invariably begins by searching
                                patent literature for issued or pending patents
                                and obtaining a legal opinion as to whether a
                                product, process or service may be considered to
                                infringe any patent(s) owned by others. <br /><br /><strong>Patent
                                Drafting</strong> - Techno-legal drafting of complete
                                specification with claims. <br /><br /><strong>Patent Filing</strong> -
                                Preparation and submission of Patent Application
                                at Indian Patent Office. <br /><br /><strong>PCT Application</strong> -
                                Preparation and submission of PCT Application
                                for foreign filing. <br /><br /><strong>First Examination Report</strong> -
                                (FER) To construe the FER for inventor/applicant
                                and prepare the best response to FER
                                <br /><br /><strong>Communication and hearing with IPO/IPAB</strong> - To
                                provide legal support for hearing at the
                                Intellectual Property Appellate Board.
                              </li>
                              <br />
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Copyright</strong>
                                <br /><br /><strong>Software</strong>
Copyright filing at the Indian Copyright Office for software related innovation.
<br /><br /><strong>Literature and art</strong>
Copyright filing at the Indian Copyright Office for literature and art-related innovation.
                              </li>
                              <br />
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Trademark</strong> <br /><br />
                                Registration of Trademark at the Trademark office
                              </li>
                              <br/>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>Industrial Design</strong> <br />
                                <br /><br /><strong>Design Search</strong>
Search for anticipation/existence of similar design before application.
<br /><br /><strong>Design Registration</strong>
Preparation of documents and application for the Indian Patent Office.
                                idea.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
              <Contact
                name="Dr Swayamprakash Patel"
                email="swayamprakash.patel@charusat.ac.in"
                phone="+91-8780034097"
              />
                
              
            
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IPR;
