import React from "react";
import IG from "../assets/ig.png";
import FB from "../assets/fb.png";
import TWT from "../assets/twt.png";

export default function Footer() {
    return(
        <footer className="bg-dark text-white position-absolute bottom-0 width-full">
            <div className="container py-3">
                <div className="row">
                <div className="col-md-4 d-flex justify-content-center p-4 gap-5">
                    <img src={IG} alt="ig" width="23" height="23" className="my-auto"/>
                    <img src={FB} alt="fb" width="10" height="22" className="my-auto"/>
                    <img src={TWT} alt="twt" width="20" height="16" className="my-auto"/>
                </div>
                <div className="col-md-8 my-auto">
                    <div className="d-flex flex-wrap justify-content-center text-center gap-md-4">
                        <p className="m-0 text-3">Terms & Condition</p>
                        <p className="m-0 d-none d-lg-block">|</p>
                        <p className="m-0 text-3">Copyright © 2018. All rights reserved. PT Radya Gita Bahagi</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )   
}