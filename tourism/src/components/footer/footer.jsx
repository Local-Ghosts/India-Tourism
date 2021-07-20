
function footer(){
    return (
        <div>
            <div className="container">
                <div className="ig">
                    <img src="tourist.jpg" />
                    <div id="color-overlay"></div>
                </div>

                <div className="footer">
                    <div className="icon">
                        <h3>Follow us on :</h3>
                        <span><a href="https://www.instagram.com/devsnest.in/" target="_blank" className="fa fa-instagram ico" aria-hidden="true"></a></span>
                        <span><a href="https://www.facebook.com/devsnest" target="_blank" className="fa fa-facebook-official ico" aria-hidden="true"></a></span>
                        <span><a href="https://twitter.com/devsnest_" target="_blank" className="fa fa-twitter ico" aria-hidden="true"></a></span>
                        <span><a href="https://www.linkedin.com/company/devsnest/" target="_blank" className="fa fa-linkedin-square ico" aria-hidden="true"></a></span>
                        <span><a href="https://www.youtube.com/channel/UCkxqJvZRzhM0oaBjbu3ZjFg" target="_blank" className="fa fa-youtube-play ico" aria-hidden="true"></a></span>
                    </div>

                    <div id="elem">
                        <div className="contact el">
                            <h3>Contact us</h3>
                            <ul>
                                <li>sitar@devsnest.com</li>
                                <li>XXXXXXXXXX</li>
                            </ul>
                        </div>
                        <div className="overview el">
                            <h3>Overview</h3>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="privacy el">
                            <h3>Privacy Policy</h3>
                        </div>
                        <div className="term el">
                            <h3>Terms of Use</h3>
                        </div>
                        <div className="ad el">
                            <h3>Advertising</h3>
                            <ul>
                                <li>Media Kit</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;