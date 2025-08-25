import React, { Component, createRef } from "react";
import Step1Icon from "../images/icon/video-category.png";
import Step2Icon from "../images/icon/video-content.png";
import Step3Icon from "../images/icon/video-final.png";
import IntroVideo from "../images/video/intro.mp4";
import RealEstateVideo from "../images/video/real-estate.mp4";
import SocialMediaVideo from "../images/video/social-media.mp4";
import OtherMediaVideo from "../images/video/other-video.mp4";

class Home extends Component {
    constructor(props) {
        super(props);
        this.videoRef = createRef();
        this.state = {
            showPlayIcon: true,
            showControls: false,
        };
    }

    handlePlayClick = () => {
        const video = this.videoRef.current;
        if (video) {
            video.play();
        }
        this.setState({
            showPlayIcon: false,
            showControls: true,
        });
    };

    handleVideoEnd = () => {
        this.setState({
            showPlayIcon: true,
            showControls: false,
        });
        if (this.videoRef.current) {
            this.videoRef.current.currentTime = 0; // Reset video to start
        }
    };

    render() {
        return (
            <div className="first_sec">
                <section className="bg-lgorange welcome_sec">
                    <div className="container py-lg-5">
                        <div className="py-5">
                            <h1 className="text-center">One video is worth a thousand words</h1>
                            <p className="text-center">
                                Easily record and share quick video messages with teammates and customers to
                                streamline communication and boost productivity.
                            </p>
                            <div className="d-flex gap-3 mt-4 justify-content-center">
                                <a href="#start-creating">
                                    <button className="sitebutt_dark">Get Started for free</button>
                                </a>
                            </div>
                            <div className="mt-5 col-12 position-relative">
                                {this.state.showPlayIcon && (
                                    <div
                                        className="playIconOuter"
                                        onClick={this.handlePlayClick}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="playIconInner">
                                            <i className="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                )}
                                <video
                                    ref={this.videoRef}
                                    className="w-100 rounded-5 shadow"
                                    playsInline
                                    controls={this.state.showControls}
                                    onEnded={this.handleVideoEnd}
                                >
                                    <source src={IntroVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="steps_bg">
                    <div className="container py-5">
                        <div className="row justify-content-between">
                            <div className="col-md-3">
                                <div className="d-flex flex-column justify-content-center align-items-center ">
                                    <img src={Step1Icon} alt="" />
                                    <h6 className="text-white mt-3">Select your category</h6>
                                    <p className="text-center text-white fw-bold text-decoration-underline mb-0">STEP 1</p>
                                </div>
                            </div>
                            <div className="col-md-1 d-flex justify-content-center align-items-center my-4 my-lg-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <i className="bi bi-chevron-double-right fs-4 text-white text-end"></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column justify-content-center align-items-center ">
                                    <img src={Step2Icon} alt="" />
                                    <h6 className="text-white mt-3">Add Content and Choose Effects</h6>
                                    <p className="text-center text-white fw-bold text-decoration-underline mb-0">STEP 2</p>
                                </div>
                            </div>
                            <div className="col-md-1 d-flex justify-content-center align-items-center my-4 my-lg-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <i className="bi bi-chevron-double-right fs-4 text-white text-end"></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column justify-content-center align-items-center ">
                                    <img src={Step3Icon} alt="" />
                                    <h6 className="text-white mt-3">Generate URL, Watch & Enjoy</h6>
                                    <p className="text-center text-white fw-bold text-decoration-underline mb-0">STEP 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="start-creating">
                    <div className="get_start_sec container py-5">
                        <h2 className="h1 text-center fw-bold">Millions of people across 400,000 companies choose Forge</h2>
                        <div className="row mt-5">
                            <div className="col-md-4 my-3 my-lg-0">
                                <div className="opts">
                                    <video className="bg-video" autoPlay loop muted playsInline>
                                        <source src={RealEstateVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="opt_outer p-3">
                                        <div className="opt_inner d-flex flex-column justify-content-center align-items-center p-3">
                                            <h3 className="mb-0 fw-bold">Real Estate</h3>
                                            <p className="mt-1 mb-0 fw-bold d-flex align-items-center justify-content-center">Start Creating <i className="bi bi-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-lg-0">
                                <div className="opts">
                                    <video className="bg-video" autoPlay loop muted playsInline>
                                        <source src={SocialMediaVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="opt_outer p-3">
                                        <div className="opt_inner d-flex flex-column justify-content-center align-items-center p-3">
                                            <h3 className="mb-0 fw-bold">Social Media</h3>
                                            <p className="mt-1 mb-0 fw-bold d-flex align-items-center justify-content-center">Start Creating <i className="bi bi-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-lg-0">
                                <div className="opts">
                                    <video className="bg-video" autoPlay loop muted playsInline>
                                        <source src={OtherMediaVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="opt_outer p-3">
                                        <div className="opt_inner d-flex flex-column justify-content-center align-items-center p-3">
                                            <h3 className="mb-0 fw-bold">Others</h3>
                                            <p className="mt-1 mb-0 fw-bold d-flex align-items-center justify-content-center">Start Creating <i className="bi bi-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
