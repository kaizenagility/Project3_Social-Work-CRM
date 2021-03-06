import React from 'react';

const HomeButtons = () => {
    return(
        <div>
        <div className="resources_sections">
            <div id="housing_banner">
                <center>
                    <a href="housing.html"><img src="images/housing_icon.png" styles={{width: 200}} /></a>
                    <h2>Housing</h2>
                    <a href="#modal_housing"><button type="button" id="housing_button">I'm worried about losing my home.</button></a>
                </center>
            </div>

            <div id="modal_housing" className="modal">
                <div>
                    <a href="#close" title="Close" class="close">X</a>
                    <h2>Help with Housing</h2><br /><br />
                    <p>My landlord is trying to evict me.</p>
                    <a href="#">Know your rights as a tenant. Get free or low-cost legal aid.</a><br /><br />
                    <p>I am behind on rent and need help with making payments.</p>
                    <a href="#">Access short-term emergency funding for preventing homelessness.</a><br /><br />
                    <p>I don't feel safe in my home.</p>
                    <a href="#">Get help for domestic violence.</a><br /><br />
                    <p>I am homeless and in need of a place to sleep tonight.</p>
                    <a href="#">Emergency shelter and homeless services. </a>
                </div>
            </div>
            <br />

            <div id="income_banner">
                <center><img src="images/food_icon.png" styles={{width: 200}} />
                    <h2>Food & Income</h2>
                    <a href="#modal_income"><button type="button" id="income_button">I'm worried about issues with money.</button></a>
                </center>
            </div>

            <div id="modal_income" className="modal">
                <div>
                    <a href="#close" title="Close" class="close">X</a>
                    <h2>Food and Income Support</h2><br /><br />
                    <p>I can't afford to eat all the meals that I need to live healthfully.</p>
                    <a href="#">Access SNAP Benefits and find food pantries in the city.</a><br /><br />
                    <p>I can't afford a metrocard to come to class.</p>
                    <a href="#">Sign up to receive a metrocard from Per Scholas</a><br /><br />
                    <p>I need some help to cover basic living expenses right now.</p>
                    <a href="#">Access Temporary Assistance.</a><br /><br />
                    <p>I am confused about my unemployment benefits.</p>
                    <a href="#">Get support on navigating your unemployment benefits while at Per Scholas.</a>
                </div>
            </div>
        </div>
            <br />

            <div className="resources_sections">
                <div id="health_banner">
                    <center>
                        <a href="health.html"><img src="images/health_icon.png" styles={{width: 200}} /></a>
                        <h2>Health & Counseling</h2>
                        <a href="#modal_health"><button type="button" id="health_button">I need affordable healthcare options.</button></a>
                    </center>
                </div>

                <div id="modal_health" className="modal">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>Health & Counseling</h2><br /><br />
                        <p>I don't have medical insurance.</p>
                        <a href="#">Apply for medicaid and get help with medical bills.</a><br /><br />
                        <p>I need psychological support.</p>
                        <a href="#">Connect with a free or low-cost mental health professional.</a><br /><br />
                        <p>I need disability services.</p>
                        <a href="#">Get information on disability rights and services in NYC.</a><br /><br />
                        <p>I need long-term supportive housing.</p>
                        <a href="#">Access supportive housing for disability.</a>
                    </div>
                </div>
                <br />

                <div id="community_banner">
                    <center>
                        <img src="images/community_icon.png" styles={{width: 200}} />
                        <h2>Community Orgs <br /> & Other Resources</h2>
                        <a href="#modal_community"><button type="button" id="community_button">I have other concerns.</button></a>
                    </center>
                </div>

                <div id="modal_community" className="modal">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>Community Orgs and Other Resources</h2><br /><br />
                        <p>I need affordable childcare and/or elder care.</p>
                        <a href="#">Find financial assistance for childcare and elder care.</a><br /><br />
                        <p>I need a business suit for inverviews.</p>
                        <a href="#">Access funds at Per Scholas for interview attire.</a><br /><br />
                        <p>I have issues with immigration.</p>
                        <a href="#">Connect to legal aid and immigration services.</a><br /><br />
                        <p>I'd like to find out about other community resources.</p>
                        <a href="#">Connect with other local organizations.</a>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default HomeButtons;