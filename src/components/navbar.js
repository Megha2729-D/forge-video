import React, { Component } from "react";
import UserIcon from "../images/icon/user-login.png";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTopBar: true, // controls top bar visibility
        };
    }

    handleGoHome = () => {
        this.props.history.push('/');
    };

    handleCloseTopBar = () => {
        this.setState({ showTopBar: false });

        // Add topbar_removed class to first_sec
        const firstSec = document.querySelector(".first_sec");
        if (firstSec) {
            firstSec.classList.add("topbar_removed");
        }
    };

    render() {
        return (
            <div className="navigation_sec d-flex w-100 flex-column-reverse flex-lg-column">
                {/* Top Bar */}
                {this.state.showTopBar && (
                    <div className="top_bar p-3 bg-black position-relative">
                        <div
                            className="position-absolute close_topbar"
                            onClick={this.handleCloseTopBar}
                            style={{ cursor: "pointer" }}
                        >
                            <i className="bi bi-x text-white"></i>
                        </div>
                        <p className="text-white mb-0 text-center">
                            <span className="fw-bold me-3">
                                <i className="bi bi-camera-reels"></i> Forge Videos: Create
                                Stunning Videos in Minutes
                            </span>
                            – Perfect for Real Estate, Social Media, and More! 🔥 Start today
                            and make your brand unforgettable.
                        </p>
                    </div>
                )}

                {/* Navbar */}
                <nav>
                    <div className="sectionContainer d-flex justify-content-between align-items-center">
                        <div
                            className="logo"
                            onClick={this.handleGoHome}
                            style={{ display: "inline-block", cursor: "pointer" }}
                        >
                            <div className="logoName">
                                <span className="text-uppercase">Forge</span> Videos
                            </div>
                        </div>
                        <div className="navButt d-flex align-items-center profileSec">
                            <i className="bi bi-bell d-flex text-dark me-2"></i>
                            <div className="d-none d-lg-flex">
                                <button className="login bg-transparent border-0 text-black">
                                    Sign in
                                </button>
                                <button className="sitebutt_dark">Get Forge for free</button>
                            </div>
                            <div className="d-flex d-lg-none">
                                <img src={UserIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
