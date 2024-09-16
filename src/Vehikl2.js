import React from "react";

import laraconPic from "./imgs/laracon1.jpg"
import laracon2Pic from "./imgs/laracon2.jpg"

const Vehikl = () => {
    return ( 
        <div className="CoopPage">
            <h1 className="header">Summer 2024 | Vehikl</h1>
            <h2 className="subheader">Software Developer Co-op</h2>

            <div className="chunk">
                <div className="block">
                    <p className="text" style={{fontWeight: "bold"}}>
                    In the summer of 2024, during my fifth and final CO-OP work term, I worked as a Software Developer for Vehikl (Waterloo). 
                    This report is to detail and specify my learnings as well as contributions throughout my work term. Due note, the majority of my
                    contributions do fall under NDA information, therefore specific implementation details will be omitted, yet the high level ideas
                    remain.
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
                    Vehikl is not just another software company. Vehikl uses innovative and encouraging processes which simply aren't seen in other organizations. Growth is particularly focused, as learning
                    new things every day at Vehikl is inevitable. For one, programming at Vehikl is exclusively done in a Mob! Mob programming goes like this: Have the entire team work on a single machine
                    (remotely connect to it), then have a Driver who will control the device. To aid and direct the Driver, a Navigator will provide High Level intentions to the Driver (but not give them exact directions)
                    The rest of the team is left as the "Mob" who will research and aid whenever they see fit. After 5 or so minutes, the mob rotates. This way everyone gets practice, growth and a break!
                    Addidtionally, every day after client work is wrapped up, developers host and attend growth sessions! In growth sessions, mobs can work on and practice whatever they like collectively!
                    They provide a chance to practice and solidify things that are learned, explore new topics and meet new people! Finally, there is plenty of time allocated in a day for personal growth time!
                    Read more about Vehikl's work flow <a href="https://vehikl.com/how-we-work">here</a>.
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">My Role and Contributions</h2>
                <div className="block">
                    <p className="text">
                    For the beginning of this summer co-op term, I continued working on the "Welcome-Wagon" team. Despite it being the same team, there was a signficant change to my role!
                    Starting in may, 2 new Co-op's had joined myself and the team lead, and suddenly I was a 'higher-up' in the team structure and was able to act as a mentor for the new co-ops.
                    It was an awesome shift and great learning experience to sort of be a teacher, while still having my team lead to fall back to. 

                    Though, about halfway through the term (2 or so months in), I was swapped to a new team! Having some experience with this company and it being my second Co-op term at Vehikl, I was ready for a change! 
                    With a new team meant new technologies,
                    Laravel was still as prevalent as ever in this team, but the front-end side of things was shifted from React to Vue, something I had never had the chance to work with! Additionally,
                    this new project used a MySQL database over the MongoDB alternative I had been using previously. My new team was assigned to a company who had their own set of clients, all who used their
                    signature software. A HR management tool to aid in the adjustments of all things employees! It was our job to update this software from a legacy base PHP version into a new and beautiful, 
                    'Laravelified' 2.0 version. Not only was there a change with the technologies, but the shift from developing fresh software like the old team and 'upgrading' exisiting software suprisingly presented differences as well.

                    Another important piece of this work term to mention is Growth Sessions. Every day at Vehikl, developers part-take in Growth Sessions, a cahnce to hone your skills and meet and work with new people.
                    Lsat co-op term I was almost always attending other developers Growth Sessions, but this time around I was sure to host a bunch of my own! It was great to have some really strong and competent developers
                    join my growth sessions, as well as some newer developers which I was able to spread my (limited) knowledge to!

                    The last big thing to mention is the amazing opportunity I was given to wrap up my Co-op(s) at Vehikl, a trip to Laracon Dallas! During the last week of August, Vehikl was nice enough to invite and fly out each every
                    Vehikalien! The convention was 2 days filled with educational talks, great meetups and just an absolutely awesome service. I learned so much and I had so much fun at Laracon, and I cannot
                    thank Vehikl enough for that amazing experience.
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Final Thoughts</h2>
                <div className="block">
                    <p className="text">
                    Working my second consecutive Co-op at Vehikl this summer work term has been a truly amazing experience. From the get-go back in January of my last co-op all the way to the end of august,
                    I was treated with kindness, maturity and respect. I will never forget my experience at Vehikl and I'd like to give a massive thank you to all of the developers and community team members
                    at Vehikl for their wonderful energy and contributions to such a splendid working environment. A huge thanks to my team leads, Nick Down and Alisa, as well as the other developers I had the priveledge
                    to work alongside: Russell Paddick, Xiao Xue and Ryan Dooley!
                    <br></br>
                    <br></br>
                    </p>
                </div>
            </div>

            <div className="block">
                <div style={{display: "flex"}}>
                    <img src={laraconPic} alt="Laracon view" style={{width: "35vh", height: "35vh"}} className="picture"></img>
                    <img src={laracon2Pic} alt="Laracon view" style={{width: "35vh", height: "35vh"}} className="picture"></img>
                </div>
            </div>
            
        </div>
     );
}
 
export default Vehikl;