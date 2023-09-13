import javaPic from "./java.png"
import React from "react";

const Brock = () => {
    return ( 
        <div className="CoopPage">
            <h1 className="header">Fall 2022 | Brock Solutions</h1>
            <h2 className="subheader">Software Developer Co-op (MG)</h2>

            <div className="chunk">
                <div className="block">
                    <p className="text" style={{fontWeight: "bold"}}>
                    In the fall of 2022, during my second CO-OP work term I worked as a Software Developer for Brock Solutions (Kitchener). 
                    This report is to detail and specify what I learned and the experiences which made it very profitable.
                    </p>
                </div>
            </div>
            
            <div className="chunk">
                <h2 className="subheader">About Brock Solutions</h2>
                <div className="block">
                    <p className="text">
                    Brock Solutions is an engineering solutions and professional services company that specializes in everything from designing, 
                    building and implementing real-time solutions for a great deal of organizations. Born in Kitchener, it has now grown substantially, 
                    with locations across North America; Vancouver, Winston-Salem and Dallas, to name a few. Brock Solutions makes notable progress 
                    and improvements on a broad span of industries, such as Airports and Airlines, Automotive, Material Handling, and Food and Beverage.
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                    One example of Brock’s many great benefits to the modern industrial world is SmartSuite. SmartSuite is a collection of technologies, 
                    all of which advance and enhance both airline/airport workers and visitors. SmartSuite directly provides a significant boost in business 
                    value to airports and their stakeholders, and is a Scalable, Flexible and Centralized solution. Read more about it <a href="https://www.brocksolutions.com/smartsuite/">here</a>.
                    </p>
                </div>
                <div className="block">
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
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">My Role and Contributions</h2>
                <div className="block">
                    <p className="text">
                    The project I was brought onto was extending an existing implementation of a Manufacturing Execution System to encompass a new field of features, 
                    resulting in a much broader sum of implementations, which is to all be used by engineers daily. It was developed in Java, using Groovy in its startup 
                    and SQL for its databases.  
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                    While the overarching project collaborated via (Azure) DevOps, my small team worked individually yet tightly knit amongst each other. 
                    With daily standup meetings to keep everyone up to pace, bi-weekly internal sprint demos to demonstrate our contributions, and active 
                    discussion in-person and through Microsoft Teams, our team created a healthy and efficient work environment.
                    </p>
                </div>

                <div className="block">
                    <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "65%"}}>
                    The bulk of the work done in Java was in developing and implementing both ends of user interfaces, as well as a number of service classes 
                    to interact with project prevalent classes, and DAOs (Data Access Objects ) to access and read from the database; With a large SQL database, 
                    a substantial piece of my role and contributions was creating and manipulating stored procedures which each queried the database for feature 
                    appropriate data. These DAOs were used to ‘queue’ these stored procedures, and receive the resultant data.
                    Java was also used in the form of Groovy scripts, which were needed upon startup of the MES. 
                    </p>
                </div>

                <div className="block">
                    <p className="text">
                    The project worked in an almost exclusively Model-View-Presenter format for user interfaces:
                    <ul>
                        <li>The Model is an interface which defines the data to be displayed or interacted with (a Java Interface)</li>
                        <li>The View implements and displays data (the model) and routes user commands or events to the presenter to act upon that data (a class which implements the model interface)</li>
                        <li>The Presenter acts as the ‘middleman’, housing all presentation logic, formatting the models data and displaying it in the view (a separate class)</li>
                    </ul>
                    </p>
                </div>
            </div>




            <div className="chunk">
                <h2 className="subheader">What I learned</h2>
                <div className="block">
                    <p className="text">
                    There are two main sides to what I learned throughout this work term. There were things that I expected to learn; 
                    going into a technical position, it's no surprise I would improve my technical skills. On the flip side, 
                    there were also a number of very useful things I was exposed to and learned about which I was not expecting.
                    <br></br>
                    <br></br>
                    </p>
                </div>
                <h2 className="subsubheader">What I learned that I 'expected' to learn</h2>
                <div className="block">
                    <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "65%"}}>
                    Starting with the set of things I learned that were no stark surprise, the project I was assigned to worked in an environment primarily in Java 
                    (and Groovy scripts, where Java code works in Groovy), and so in my 4 months of contribution I thoroughly improved my Object Oriented Programming skills. 
                    This includes inheritance and abstraction among other Java principles.
                    <br></br>
                    <br></br>
                    Another great sum of technical experience I received was in SQL, making stored procedures, learning how to use SSMS (SQL Server Management Studio) 
                    and interacting with large databases.
                    <br></br>
                    <br></br>
                    The last thing I learned that I expected to learn given the role I had, was how to develop and work in a team of software developers. 
                    Working in a DevOps environment, I got experience with Azure DevOps but most notably I had first hand vision of how a large project flows and just 
                    how to work in a team, something I hadn’t yet had experience in.
                    <br></br>
                    <br></br>
                    </p>
                    <img src={javaPic} alt="Java Logo" style={{width: "35vh", height: "35vh"}} className="picture"></img>
                </div>
                <h2 className="subsubheader">What I learned unexpectedly</h2>
                <div className="block">
                    <p className="text">
                    There are a number of things that I also learned, unexpectedly. Particularly relating to career development. 
                    And things outside of a technical context.
                    <br></br>
                    <br></br>
                    Firstly, I learned about what matters most in a position, looking at total compensation versus community and culture. 
                    Brock’s rich and friendly culture, as well as direct advisory from my Talent Manager, enlightened me about the importance 
                    of working in a healthy and happy environment, that working amongst your friends and people that care for you is just as 
                    important if not more important than the compensation you receive. This is something you hear about all the time through 
                    friends and family growing up: “Work somewhere you love and you won’t work a day in your life” etc… but I believe it was very eye opening to see such things first hand.
                    <br></br>
                    <br></br>
                    Another useful thing I gained insight on was how to navigate through an organization, 
                    how to keep things fresh and bountiful while staying at the same ‘job’. This is something I’ve 
                    always kind of wondered about. Andrew, my talent manager, challenged me to have an out-of-the-blue meeting with 
                    another employee at Brock, Greg, who had worked there for over two decades. Not only did this meeting reinforce my ability 
                    to make connections with others in a workplace environment, but Greg told me about his long and interesting arc throughout 
                    Brock, how he navigated around positions and kept it rewarding.
                    <br></br>
                    <br></br>
                    The last, and furthest from least thing I learned unexpectedly, was that asking is always worth it. Throughout my 4 months 
                    working at Brock, there were many times where I needed to ask something. Whether it was “Am I contributing enough as a Co-op 
                    student?”, “What can I improve on?” or very frequently “I need help!”, I was always worried about what the response of these 
                    questions might be, and the perception that asking them would set upon me. However, after mustering up the courage to ask these 
                    questions, over time I consistently found that the responses were always super relieving and helpful, far more so than I had 
                    anticipated. I learned that it was accepted and always rewarding to ask things. Ask and you shall receive.
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Final Thoughts</h2>
                <div className="block">
                    <p className="text">
                    Working at Brock Solutions this fall work term has been nothing but splendid. 
                    Being treated almost as a full-time regular developer, I had the chance to contribute to a large scale active 
                    project and augment my confidence in my technical skills, particularly object-oriented programming. Additionally, 
                    I’ve also unexpectedly gained a fair bit of insight towards career building and progression. I profited from these 
                    things while being surrounded by a very helpful, friendly and overall positive community of people, and I have much 
                    appreciation for all of them. Thank you to my Talent Manager, Andrew Brigham for being a very discerning mentor who 
                    always had my back. Thank you to Mike and Emma for always being there to help me when I got lost, creating a great 
                    developing environment and teaching so much. Finally thank you to the organization as a whole, Brock Solutions for 
                    this bountiful opportunity and welcoming me into their gratifying workspace. Brock Culture, along with the technical 
                    experience my role provided led to a very worthwhile experience and has certainly progressed my programming career.
                    <br></br>
                    <br></br>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Brock;