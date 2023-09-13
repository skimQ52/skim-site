import smartSuiteLogo from "./SmartSuite-Logo.png"
import austinAirport from "./austinAirport.jpg"
import React from "react";

const Brock2 = () => {
    return ( 
        <div className="CoopPage">
            <h1 className="header">Summer 2023 | Brock Solutions</h1>
            <h2 className="subheader">Software Developer Co-op (TL)</h2>


            <div className="chunk">
                <div className="block">
                    <p className="text" style={{fontWeight: "bold"}}>
                    In the summer of 2023, during my third CO-OP work term I had the privilege of returning as a Software Developer at Brock Solutions (Kitchener). 
                    This report is to detail my role, the experience I gained, and how it will benifit me going forward. 
                    <br/>
                    <br/>
                    Notice: since I was working on protected parts of a closed source system,
                    this report will often have generalizations and discuss details at a high level. Also, specific details will have to be witheld from this report.
                    </p>
                </div>
            </div>
            
            <div className="chunk">
                <h2 className="subheader">About Brock Solutions</h2>
                <div className="block">
                    <p className="text" style={{fontStyle:"italic"}}>
                    Brock Solutions is an engineering solutions and professional services company that specializes in everything from designing, 
                    building and implementing real-time solutions for a great deal of organizations. Born in Kitchener, it has now grown substantially, 
                    with locations across North America; Vancouver, Winston-Salem and Dallas, to name a few. Brock Solutions makes notable progress 
                    and improvements on a broad span of industries, such as Airports and Airlines, Automotive, Material Handling, and Food and Beverage.
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                    Brock brings innovation to the modern industrial world through a number of products. This is exemplified strongly with 'SmartSuite'. SmartSuite is a collection of technologies, 
                    all of which advance and enhance both airline/airport workers and visitors. SmartSuite directly provides a significant boost in business 
                    value to airports and their stakeholders, and is a Scalable, Flexible and Centralized solution. Read more about it <a href="https://www.brocksolutions.com/smartsuite/">here</a>.
                    In my last Co-op with Brock, I repeatedly heard about it as one of Brocks most coveted product, in a sense, their bread and butter. This co-op term however,
                    I actually got the chance to work on it!
                    <br></br>
                    <br></br>
                    <img src={smartSuiteLogo} alt="SmartSuite Logo" style={{width: "50vh"}} className="picture"></img>
                    </p>
                </div>
                {/* <div className="block">
                    <p className="text">
                        One of Brock’s greatest characteristics is its strong culture. At Brock, positive culture and values are built, prioritized and preserved 
                        and it is immediately apparent when working for them. Brock carries numerous programs that maintain and promote a healthy community such 
                        as BrockConnects, their corporate social responsibility program that specifically focuses on community outreach, charitable giving, 
                        sustainability along with personal wellness. Another unique yet powerful program Brock implements is their Talent Manager program which 
                        assigns every Brock employee (and co-op student) with a Talent Manager to be there for them and assist in their growth and development.
                        There are also consistently fun and original social events to attend, often which are done for charities, education or simply to celebrate success.
                        Some social events that I attended were a Charity BBQ, and a Movember social event to raise awareness, with pizza, local brewery ales and a fun 
                        moustache guess-who game. I even grew out a moustache for this event!
                        <br></br>
                        <br></br>
                    </p>
                </div> */}
            </div>

            <div className="chunk">
                <h2 className="subheader">My Role</h2>
                <div className="block">
                    <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "45%"}}>
                    I was placed onto the SmartSort team, which is a vital component of SmartSuite, In short, it is Sortation Software implemented as a High-Level Control system used by many of the worlds largest airports and airlines.
                    Its main use cases delve into Flight management, Searching bags, passengers or alarms, and viewing in-depth reports and dashboards which can be scheduled and run on demand.
                    After completing my training and onboarding. I had the exciting privilege to work on the Austin-Bergstrom International Airport project!

                    </p>
                    <img src={austinAirport} alt="Austin Airport aerial shot" style={{float:"right", width: "50vh"}} className="picture"></img>
                </div>
                <div className="block">
                    <p className="text">
                        Not only was I entrusted to be placed onto this important international airport project, I was actually set as the singular main developer for the software portion of the project.
                        I was not fully alone however, as I did have a Project Software Lead in Sharon Sims who aided me a ton and provided me with superb instructions and guided me greatly towards success.
                        That being said, it is without question that I had put on a lot of responsibilty and had to be very accountable for the effort I put into this project.
                    </p>
                </div>

                <div className="block">
                    <p className="text">
                    I started out in the project by doing a lot of setup and configurations. I created and setup the Virtual Machines for the project's Sort Allocation Controller and Data Historian servers (where the services would run),
                    I created and populated databases, and configured services and mandatory softwares for each of those servers as well. I also linked these servers with the PLC data using KepServerEx.

                    After the project was setup, what would be the focus of about half of the co-op term would begin: The BHS Map!
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Baggage Handling System Map</h2>
                <div className="block">
                    <p className="text">
                    A Baggage Handling System (BHS) is essentially the big large conveyor system which transports, tracks, sorts and even checks for dangers in passenger luggage through the airport.
                    Equipt with numerous devices throughout the system, while also being extremely large and complex simply as a conveyor system, a BHS can become difficult to manage easily.
                    An implementation of a BHS Map is essentially an easy to the eyes, simple yet informative web application tool, which can give you almost everything you need to know about the BHS.
                    Within the tool, you can view each and every bag that is running through the BHS at any given time. You can view the statuses of conveyors, bags and devices as well as all of the relavent statistics.
                    For the Austin-Bergstrom International Airport, there are around 10,000 to 12,000 bags going through it a day, so it was imperative I put in significant effort to get it done correctly.
                    <br></br>
                    <br></br>
                    </p>
                </div>
                <h2 className="subsubheader">My contribution</h2>
                <div className="block">
                    <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "65%"}}>
                    In the beginning, I was given a file that I could use as a baseline. This file was generated by the project's Emulation Team.
                    This gave me a rough but decent place to start with the (majority of) the conveyors layed out. After I had it imported, I needed to make note of all the things wrong with it.
                    Pieces missing, inconsistencies, and parts that simply looked unsatisfactory. I could then send my findings back the Emulation Team to get the missing pieces, while getting started
                    on fixing what I could.
                    <br></br>
                    <br></br>
                    After the conveyor system was setup, I could add in all of the other aspects of the BHS Map.
                    This primarily consisted of adding the BHS devices, such as Automatic Tag Readers, Explosive Detection Systems, Diverters (bag pusher) and more.
                    I configured these devices through the proper SQL tables, set up the Key Performance Indicators for their statistics. The last final step was setting the Time to Live
                    and Time to Complete times to be congruent with the times that the bags actually took to traverse the conveyors. This was a pretty difficult step, but went hand in hand with testing.
                    <br></br>
                    <br></br>
                    We preformed Integerated Testing to ensure all of the components were functional. This mainly included the statuses and statistics of devices, conveyors and bags (at different stages).
                    Testing these pieces involved sending many (fake) bags through the system, in a variety of different contexts. This gave plenty of data for updating the simulation times.
                    <br></br>
                    <br></br>
                    </p>
                    {/* <img src={javaPic} alt="Java Logo" style={{width: "35vh", height: "35vh"}} className="picture"></img> */}
                </div>
            </div>


            <div className="chunk">
                <h2 className="subheader">What I learned</h2>
                <div className="block">
                    <p className="text">
                    There are many things I learned about during this work term. From a technical stand-point, I believe my biggest takeaway
                    is in SQL. I worked often with the database, making plenty of queries, insertions, deletions, and even created databases themselves.
                    From a non technical perspective, I believe I gained something in particular which is somewhat out of the ordinary for a Co-op to receive.
                    Since I was the sole developer of the software portion of this project, I wielded both a lot of pressure and responsibility. Despite this,
                    provide a product that exceeded expectations of a co-op student. Going forward in my career, I think it will be pivotal for my confidence
                    and mindset in handling other situations where I am under a lot of pressure, since I have already overcome this.
                    <br></br>
                    <br></br>
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Final Thoughts</h2>
                <div className="block">
                    <p className="text">

                    This past term at Brock Solutions has been wonderful. Once again, I was treated with the utmost respect and essentially as a full-time developer.
                    It meant a lot that nothing was hidden from me and the others othe the SmartSort team all felt like they could have been a friend outside of work.
                    Resources provided to me exceeded expectations, and there was never a moment where I felt like I did not have enough help. Brock culture continues
                    to be a beautiful thing, filled with compassion and positivity. Not only have I progressed in my career at Brock, but I've also gained a lot of confidence
                    in myself and my value as an employee. Thank you Brock Solutions for this great opportunity and once again welcoming me into their friendly workspace.
                    <br></br>
                    <br></br>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Brock2;