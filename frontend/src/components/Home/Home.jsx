import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getSliderProducts} from '../../actions/productAction';
import {useSnackbar} from 'notistack';
import MetaData from '../Layouts/MetaData';

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

    return (
        <>
            <MetaData title="OKRs And KPIs" />
                <div className="main-page-content">
                    <div id="home">
                        <div id="particles-js"></div>
                        <div className="home-content-main">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row home-row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="home-text wow fadeIn text-center">
                                                <h1 className="cd-headline clip is-full-width">
                        <span
                            className="cd-words-wrapper"
                            style={{width: "266px", overflow: "hidden"}}
                        >
                          <b className="is-visible">OKRs</b>
                          <b className="is-hidden">KPIs</b>
                          <b className="is-hidden">For Cultural Associations</b>
                        </span>
                                                </h1>
                                                <div className="about-social-icon text-center">
                                                    <ul className="about-social">
                                                        <li className="wow fadeIn" data-wow-delay=".4s">
                                                            <a
                                                                href="https://www.linkedin.com"
                                                                target="newtab"
                                                            >
                                                                <i
                                                                    className="fa fa-linkedin"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                        </li>

                                                        <li className="wow fadeIn" data-wow-delay=".6s">
                                                            <a
                                                                href="https://www.instagram.com/"
                                                                target="newtab"
                                                            >
                                                                <i
                                                                    className="fa fa-instagram"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                        </li>
                                                        <li className="wow fadeIn" data-wow-delay=".8s">
                                                            <a
                                                                href="https://twitter.com"
                                                                target="newtab"
                                                            >
                                                                <i
                                                                    className="fa fa-twitter"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                        </li>
                                                        <li className="wow fadeIn" data-wow-delay="1s">
                                                            <a
                                                                href="https://facebook.com"
                                                                target="newtab"
                                                            >
                                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parallax" data-velocity="-.1"></div>
                        <div className="parallax" data-velocity="-.5" data-fit="525"></div>
                    </div>

                    {/* <!-- ================================ ABOUT =============================== --> */}

                    <div id="about">
                        <div className="about-content">
                            <div className="love-grid text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="main-title text-center wow fadeIn">
                                                <h3>Who we are?</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    We work to share knowledge of applying OKRs & KPIs
                                                    in cultural associations to have a stunning impact on the community.
                                                    we would help you with
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row love-row wow fadeIn">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="love-details" data-wow-delay=".1s">
                                                <i
                                                    className="fa fa-pencil-square-o love-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>OKR Management</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Step-by-step OKR creation
                                                    Inbuilt OKR templates
                                                    Real-time Dashboards & Notifications</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="love-details" data-wow-delay=".3s">
                                                <i
                                                    className="fa fa-file-image-o love-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Task Management Software</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Plan your To-Do list and start your day at ease </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="love-details" data-wow-delay=".2s">
                                                <i
                                                    className="fa fa-globe love-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Performance Management</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Powerful Dashboard, and Reports</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="love-details" data-wow-delay=".2s">
                                                <i
                                                    className="fa fa-globe love-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Goal Analytics</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Track your progress</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="about-back"></div>
                        </div>
                    </div>

                    {/* <!-- ================================ Skill =============================== --> */}


                    {/* <!-- ================================ RESUME =============================== --> */}

                    <div id="resume">
                        <div className="resume-content">
                            <div className="resume-grid text-center">
                                <div className="container">
                                    <div className="row love-row wow fadeIn">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="resume-details" data-wow-delay=".2s">
                                                <div className="resume-hover"></div>
                                                <div className="resume-main">
                                                    <i
                                                        className="fa fa-home resume-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>What is a KPI?</h3>
                                                    {/*<h2>2010-2017</h2>*/}
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        KPI is an acronym for Key Performance Indicator.
                                                        The KPI in business is often set in order to provide numerical targets for achieving specific goals.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="resume-details" data-wow-delay=".3s">
                                                <div className="resume-hover"></div>
                                                <div className="resume-main">
                                                    <i
                                                        className="fa fa-graduation-cap resume-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>What is an OKR?</h3>
                                                    {/*<h2>2017-2020</h2>*/}
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        OKR acronym: Objectives and Key Results. OKRs in business
                                                        are used to communicate desirable outcomes throughout the organization,
                                                        bring focus to the most important areas of improvement, and deliver valuable results for the business.


                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="resume-details" data-wow-delay=".4s">
                                                <div className="resume-hover"></div>
                                                <div className="resume-main">
                                                    <i
                                                        className="fa fa-graduation-cap resume-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Can OKRs and KPIs work together?</h3>
                                                    {/*<h2>2022-2022</h2>*/}
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        KPIs and OKRs actually work together quite nicely:
                                                        KPI being a starting point of a conversation about
                                                        improvements to implement or problems to solve, and
                                                        OKR specifying a focus area and measurable outcomes
                                                        to be achieved to deliver on those improvements.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ============================================== SERVICE ===================================================== --> */}

                    <div id="service">
                        <div className="service-content">
                            <div className="service-grid text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="main-title text-center wow fadeIn">
                                                <h3>Our Products List</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    We always want to make things that make a difference.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row love-row wow fadeIn">
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details" data-wow-delay=".1s">
                                                <div className="service-head">
                                                    <img
                                                        src="assets/img/service/design-development.jpg"
                                                        alt="design-development"
                                                    />
                                                </div>
                                                <div className="service-bottom">
                                                    <i
                                                        className="fa fa-edit service-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Library</h3>
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        National,Academic,Public, and School.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details" data-wow-delay=".1s">
                                                <div className="service-head">
                                                    <img
                                                        src="assets/img/service/e-commarce.jpg"
                                                        alt="Museums"
                                                    />
                                                </div>
                                                <div className="service-bottom">
                                                    <i
                                                        className="fa fa-cart-plus exp-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Museums</h3>
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        Museums.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="service-details" data-wow-delay=".1s">
                                                <div className="service-head">
                                                    <img
                                                        src="assets/img/service/analytics.jpg"
                                                        alt="analytics"
                                                    />
                                                </div>
                                                <div className="service-bottom">
                                                    <i
                                                        className="fa fa-tachometer service-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Art and Cultural centers</h3>
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        Art & Cultural centers
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="testimonial">
                                <div className="testimonial-content">
                                    <div className="testimonial-grid">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="main-title text-center wow fadeIn">
                                                        <h3>Testimonials</h3>
                                                        <div className="underline1"></div>
                                                        <div className="underline2"></div>
                                                        <p>
                                                            About OKRs and KPIs
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-details">
                                            <section id="carousel">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-8 col-md-offset-2">
                                                            <div className="quote">
                                                                <i className="fa fa-quote-left fa-4x"></i>
                                                            </div>
                                                            <div
                                                                className="carousel slide"
                                                                id="fade-quote-carousel"
                                                                data-ride="carousel"
                                                                data-interval="3000"
                                                            >
                                                                <ol className="carousel-indicators">
                                                                    <li
                                                                        data-target="#fade-quote-carousel"
                                                                        data-slide-to="0"
                                                                        className="active"
                                                                    ></li>
                                                                    <li
                                                                        data-target="#fade-quote-carousel"
                                                                        data-slide-to="1"
                                                                    ></li>
                                                                    <li
                                                                        data-target="#fade-quote-carousel"
                                                                        data-slide-to="2"
                                                                    ></li>
                                                                </ol>
                                                                <div className="carousel-inner">
                                                                    <div className="active item">
                                                                        <blockquote>
                                                                            <p>
                                                                                “We have a lot of great opportunities...
                                                                                If we can't create OKRs that make you excited
                                                                                to come to work every day, something must be wrong.
                                                                                ”
                                                                                <br/>
                                                                                <span>Jonathan Rosenberg</span>
                                                                            </p>
                                                                        </blockquote>
                                                                    </div>
                                                                    <div className="item">
                                                                        <blockquote>
                                                                            <p>
                                                                                “The library environment provides
                                                                                access to both traditional and digital items; In order to achieve an added
                                                                                value for the community and invest in users, which is led by the library staff innovation.”
                                                                                <br/>
                                                                                <span></span>
                                                                            </p>
                                                                        </blockquote>
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
                            </div>
                        </div>
                    </div>



                    {/* <!-- ================================ CONTACT ========================== --> */}

                    <div id="contact">
                        <div className="contact-content">
                            <div className="text-grid">
                                <div className="text-grid-main">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="main-title text-center wow fadeIn">
                                                    <h3>Contact Us</h3>
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        We are always open to discussing our product work or
                                                        partnership opportunities.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-grid">
                                <div className="contact-form-details wow fadeIn">
                                    <div className="container">
                                        <div className="row contact-info-row text-center wow fadeIn">
                                            <div className="col-md-3 col-sm-6 contact-colamn">
                                                <div className="contact-col-info" data-wow-delay=".2s">
                                                    <i
                                                        className="fa fa-map-marker contact-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Address</h3>
                                                    <p>Cairo</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 contact-colamn">
                                                <div className="contact-col-info" data-wow-delay=".4s">
                                                    <i
                                                        className="fa fa-envelope contact-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Email</h3>
                                                    <a
                                                        href="mailto:contact.sanajitjana@gmail.com"
                                                        style={{
                                                            color: "black",
                                                            textDecoration: "none",
                                                            fontSize: "17px",
                                                        }}
                                                    >
                                                        test@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 contact-colamn">
                                                <div className="contact-col-info" data-wow-delay=".6s">
                                                    <i
                                                        className="fa fa-mobile contact-icon"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <h3>Phone</h3>
                                                    <a
                                                        href="tel:8372876775"
                                                        style={{
                                                            color: "black",
                                                            textDecoration: "none",
                                                            fontSize: "17px",
                                                        }}
                                                    >
                                                        +29378687238
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Home;
