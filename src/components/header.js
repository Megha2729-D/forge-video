import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="container py-4">
                <h1 className="h3 text-center">Forge Your Real Estate Video!</h1>
                <div className="d-flex justify-content-end start_butt gap-3">
                    <button className="text-uppercase">
                        <i class="bi bi-stars me-1"></i>
                        Auto Select</button>
                    <button>
                        <i class="bi bi-file-earmark-plus-fill me-1"></i>
                        Start New</button>
                </div>
            </div>
        )
    }
}

export default Header;
