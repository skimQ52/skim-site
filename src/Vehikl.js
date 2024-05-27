import React from "react";

import laravelPic from "./imgs/laravel.png"

const Vehikl = () => {
    return ( 
        <div className="CoopPage">
            <h1 className="header">Winter 2024 | Vehikl</h1>
            <h2 className="subheader">Software Developer Co-op</h2>

            <div className="chunk">
                <div className="block">
                    <p className="text" style={{fontWeight: "bold"}}>
                    In the winter of 2024, during my fourth CO-OP work term I worked as a Software Developer for Vehikl (Waterloo). 
                    This report is to detail and specify my learnings as well as contributions throughout my work term. Due note, the majority of my
                    contributions do fall under NDA information therefore specific implementation details will be omitted, yet the high level ideas
                    may persist.
                    </p>
                </div>
            </div>
            
            <div className="chunk">
                <h2 className="subheader">About Vehikl</h2>
                <div className="block">
                    <p className="text">
                   Vehikl is a software consulting company that specializes in Website and Mobile Application development. Developers at Vehikl
                   are PHP and JavaScript experts. Specifically, 'Vehikaliens' are top-notch developers of various Frameworks/Libraries like Laravel, React and Vue.
                   So much so infact, as it happens, Vehikl are actually official sponsers of both Laravel and Vue.js!
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                    Vehikl has created software for a number of significant and world-impacting clients. Some examples include 'wework', 'AbleTo', 'SourceDay' and Ontario's very own Queen's University!
                    Vehikl just another software company. Vehikl uses innovative and encouraging processes which simply aren't seen in other organizations. Growth is particularly focused, as learning
                    new things every day at Vehikl is inevitable. For one, programming at Vehikl is exclusively done in a Mob! Mob programming goes like this: Have the entire team work on a single machine
                    (remotely connect to it), then have a Driver who will control the device. To aid and direct the Driver, a Navigator will provide High Level intentions to the Driver (but not give them exact directions)
                    The rest of the team is left as the "Mob" who will research and aid whenever they see fit. After 5 or so minutes, the mob rotates. This way everyone gets practice, growth and a break!
                    Addidtionally, every day after client work is wrapped up, developers host and attend growth sessions! In growth sessions, mobs can work on and practice whatever they like collectively!
                    They provide a chance to practice and solidify things that are learned, explore new topics and meet new people! Finally, there is plenty of time allocated in a day for personal growth time!
                    Read more about Vehikl's work flow <a href="https://vehikl.com/how-we-work">here</a>.
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                        One of Vehikl’s greatest characteristics is its strong culture. At Vehikl, positive culture and values are a strong priority. Company wide morning announcements are
                        cheerful and welcoming. Also, as a co-op the rampup experience is exceptional. Due to working in a mob, every day working with a senior developer who really knows there stuff
                        as well as how to communicate in an effective, educational, yet gentile way, leads to immaculate growth.
                        Often ramp-ups can be extremely slow where the first few weeks Co-ops are left with little to nothing to do.
                        Vehikl, on the other hand, has new team members working on real client projects day one, which is great.
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">My Role and Contributions</h2>
                <div className="block">
                    <p className="text">
                    I was brought onto one of the "Welcome-Wagon" projects that are there for new-hires. The product is called ElephasCare, and it is a device which uses Artificial Intelligence
                    in order to monitor Long-term care home residents' activity and safety. As a software consulting company, Vehikl and our team's role is to develop the desktop dashboard (website)
                    and the mobile application, as well as the backend which ties everything together. The tech-stack of our work was Laravel for the backend, React for the web dashboard and React-Native
                    for the mobile application.
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                    With Daily Standups to provide updates on all fronts, and weekly demos to show off what we got done the past week.
                    Paired with an active dicussion over Slack channels, there a very tight-knit and healthy relationship between Vehikl and the client.
                    </p>
                </div>

                <div className="block">
                    <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "65%"}}>
                    The bulk of the work done was in Laravel for the backend, interacting with the AI ElephasCare data. Presenting it in different places, sending relevant
                    push notifications to the mobile app, Interacting with and handling data within the mongoDB database connection. I got a ton of experience with the Laravel Framework,
                    creating and using Models, Controllers, Routes, Jobs, Commands, Routes, Facades in general, Service Container and making providers and a whole bunch of fancy Laravel tools.

                    The other side of the equation is in React JS (and React native) for the front-end(s), where I also gained a ton of knowledge. While React was unlike Laravel in that it was not completely new to me, I still
                    learned a ton about the library and became much more competent using it's toolbox, including useState, useEffect, useMemo, hooks, IIFEs, dealing with re-renders and so much more.
                    </p>
                    <img src={laravelPic} alt="Laravel Logo" style={{width: "35vh", height: "35vh"}} className="picture"></img>
                </div>

                <div className="block">
                    <p className="text">
                    There are some important things to mention about the workflow of our project, practices which lead to me learning some really valuable skills which I will use for the rest
                    of my programming career.
                    
                    For one, in (most) Vehikl teams, programming is done through Test Driven Development. That means before source code can be added to, we must create an adequate test (or add to an existing test)
                    which provides a failure message, that complains that we don't have the feature we are trying to implement. At first I was extremely skeptical of this approach. Initially, I was a little
                    worried that the whole TDD process would be extremely convoluted and unreasonably slow. However, after doing TDD for 4 months, I am completely and utterly sold. Creating tests before
                    altering source code allows you to create code you actually understand, that is, code with intent. Moreover, the amount of time spent creating tests which completely cover our code is
                    insignificant when compared to the amount of time saved by having 1000+ tests over the three sides of the project.

                    We strictly follow a "Red, Green, Refactor" process. What this means is we make a failing test, make the test pass, then if it is, appropriate, refactor.

                    Refactoring, and simply keeping code clean is another crucial piece of the workflow at Vehikl. We spend plenty of time maintaining our code and ensuring it is as readable as possible while keeping
                    up its efficiency. Project specifications change often, and so not having to deal with a messy code base all of the time when a simple change needs to happen also saves us a lot of time.
                    Its also worth mentioning that part of the reason my personal rampup was so smooth was due to the cleanliness of the codebases.
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Final Thoughts</h2>
                <div className="block">
                    <p className="text">
                    Working at Vehikl this winter work term has been more educational, impactful and enjoyable than I could ever have thought. 
                    Contributing daily to a meaningful project working on things I am very interested in was amazing, but the level of competency I feel I have gained is priceless.
                    I strongly feel like I could not have had much of a better co-op experience anywhere else. I'd like to give a massive thank you to my Mentor and Team leader Nick Down.
                    Nick has been a phenomenal teacher who has shown me the ways in a very patient, understanding and informative way. He ensured we had a healthy relationship and he prioritized
                    my growth as a developer. He has undeniably impacted the rest of my career in software. I'd also like to shout out Armand Kauffman for being a great mentor as well. When I joined he was a recent new hire and so he provided a lot of insight
                    and companionship while he was a part of the team. Finally, a big thank you to Vehikl as a whole for trusting me with this awesome opportunity. I am so grateful and cannot commend
                    their community enough.
                    <br></br>
                    <br></br>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Vehikl;