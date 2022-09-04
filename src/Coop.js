import roboticsPic from "./robotics_institute_logo.png"
import yoloPic from "./yolo.png"
import horsePic from "./horse.png"
import React from "react";
// import { Spring } from "react-spring/renderprops";
// import VisibilitySensor from "react-visibility-sensor";


const Coop = () => {
    return ( 
        <div className="Coop">
            <h1 className="header">Summer 2022 | University of Guelph</h1>
            <h2 className="subheader">Machine Vision and Robotics Reasearch Assistant</h2>

            <div className="chunk">
                <div className="block">
                    <p className="text">
                        In the summer of 2022, during my first CO-OP work term I worked as an Undergraduate Research Assistant 
                        under Dr. Medhat Moussa in the University of Guelph Robotics Institute. It was a great experience and this 
                        report is to detail my role and what I learned along the way.
                    </p>
                </div>
            </div>
            
            <div className="chunk">
                <h2 className="subheader">About the Robotics Institute</h2>
                <div className="block">
                    <img src={roboticsPic} alt="Robotics Institute Logo" style={{width: "15vh", height: "15vh"}} className="picture"></img>
                    <p className="text" style={{marginLeft: "1vw", width: "69%"}}>
                        The Robotics Institute, part of the School of Engineering at the University of Guelph, is a deep and advanced 
                        research lab tackling automation in areas of application including agriculture, healthcare, accessibility, 
                        rehabilitation, food and many more. With research areas such as robotic grasping/manipulation, machine and computer vision, machine learning architectures and human and robot interactivity,
                    </p>
                </div>
                <div className="block">
                    <p className="text">
                        An example of a notable project the Institute has recently conducted research on is in the field of rehabilitation robotics. 
                        In collaboration with physiotherapists, Robo Rehab investigates building systems of robotics to directly aid those with limb 
                        impairments and disabilities, whether caused by injury or accident.
                        <br></br>
                        <br></br>
                        There are many moving parts and team members in the Robotics Institute, and they all come together and strive to solve real 
                        world problems, and show no signs of slowing down. I was welcomed with open arms and I had substantial privilege to learn and 
                        grow as a student of computing.

                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">My Role and Contributions</h2>
                <div className="block">
                    <p className="text">
                        In the world of robotics, machine vision–the technological methods used to provide imaging-based automatic inspection and 
                        analysis–is absolutely key, specifically in the context of object detection, and that is exactly where I come in. As a 
                        Machine Vision and Robotics Research Assistant, I had primary influence on several parts of the machine vision and object 
                        detection process. While my academic studies have definitely helped in terms of general knowledge of programming and automation, 
                        what I did throughout the semester mainly needed to be learned on the job.
                        <br></br>
                        <br></br>
                        {/* <ul style={{fontSize: "3vh", marginLeft: "5vw"}}>
                            <li>New Object Detection Libraries</li>
                            <li>Annotating Datasets</li>
                            <li>Miscellaneous Script Creation</li>
                        </ul> */}
                    </p>
                </div>
                <h2 className="subsubheader">New Object Detection Libraries</h2>
                <div className="block">
                    <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "65%"}}>
                    My greatest contribution over the summer was researching, studying and developing documentation on new (for the lab) 
                    object detection libraries. In the past, the Robotics Institute has mainly been using only one object detection library, 
                    Facebook Architecture’s ‘Detectron2’. While Detectron2 is great, it is not always sufficient or the most optimal for a given 
                    problem and it’s useful to have information and understanding of other libraries and be able to get them up and running with 
                    little hassle. I acted as the ‘Guinea Pig’, delving into 3 new object detection libraries, YOLOv5, SSD and YOLACT. I got 
                    comfortable with the implementations, tested their capabilities, created tutorial-like documentation and even refactored 
                    code and constructed repositories so that anyone working in the Robotics Institute who needed access to any of the libraries 
                    could use them, specifically, train and detect with a custom dataset. Additionally, if anyone needed any extra assistance in 
                    setting up and running the models, I was there to help. Delving into new sizable libraries with little direction and aid like 
                    the ones I did can be extremely tedious. The contributions I made make that grueling experience significantly smoother.
                    <br></br>
                    <br></br>
                    </p>
                    <img src={yoloPic} alt="YOLOv5 Logo" style={{width: "35vh", height: "35vh"}} className="picture"></img>
                </div>
                <h2 className="subsubheader">Annotating Datasets</h2>
                <div className="block">
                    <p className="text">
                    A secondary piece of my job here and there over the summer was generating annotated datasets, using 'COCO Annotator'. 
                    COCO Annotator is a web-based annotation tool used on datasets to label images in creating training data for image localization and object detection.
                    This is an imperative step in almost every single project within the Robotics Institute. There can be no object detection 
                    with no properly annotated dataset. I annotated over 500 images, each having a deep array of objects and areas (categories) to annotate, using various tools within the program.
                    While being extremely strenuous and not exactly exhilarating, understanding its crucialness 
                    to the process of object detection, conjoined with the responsibility of getting it done properly yet efficiently was indeed motivating.
                    <br></br>
                    <br></br>
                    <br></br>
                    Aside from the two above main aspects of my position as an undergraduate research assistant, there were often times where 
                    adequate tools did not already exist for solving a specific problem, and it was me who was assigned to create Python scripts 
                    in order to complete and or automate such a task. For example, one script I programmed was to merge separate datasets which 
                    both had annotations on the same image set, a niche issue that we needed solved.
                    <br></br>
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">What I Learned</h2>
                <div className="block">
                    <p className="text">
                    Heading into this semester, I had several relevant goals I wished to achieve throughout my time there. 
                    As of now, having finished the work term, I am very proud of my progress and accomplishments with respect to my set goals.
                    <br></br>
                    <br></br>
                    The goal which was most important for me this summer was to become comfortable programming in Python. 
                    Before this work term, I was a beginner in Python programming. I had little understanding of its capabilities 
                    and intricacies along with minimal experience. In machine learning and object detection, Python is prevalent and I was interacting and developing with it every day. With the aid of this position and a desire to learn and become proficient with the language, I am now a strong programmer in Python.
                    <br></br>
                    <br></br>
                    Another goal that was truly important to me was going above and beyond what is asked, going the extra mile instead 
                    of just what I’m told. I’ve had this goal for a long time, and have been working on it steadily since, including 
                    during this work term. I find this goal particularly challenging, specifically determining what actually could be done. 
                    That being said, a strong example of where I went above and beyond lies when I was first assigned to begin studying new 
                    object detection libraries. Originally, I was simply supposed to be comfortable with the implementations, to essentially 
                    be there to explain them upon request. Instead, given that the process was more complex than anticipated and explanations 
                    were not sustainable, I decided it would be best to immortalize the process in documentation.
                    <br></br>
                    <br></br>
                    My final goal for the work term was to learn how to be a strong teammate in a context of programming. I’ve had a ton of 
                    experience as a teammate in other aspects of my life, namely sports, yet none in my professional field. Unfortunately, 
                    since I was delving into things never done before in the lab, working effectively on my own, I was not given the chance to 
                    work on it, and so I will certainly look for such opportunities in the future.
                    <br></br>
                    <br></br>
                    Aside from my personal set learning goals, I had a great privilege in learning about the theory and process that 
                    is machine learning object detection. I had first hand exposure to all of its aspects and got to see so many applications 
                    in projects. Studying deeper into machine learning and object detection is now surely on my radar, both academically and 
                    on my own time.

                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Final Thoughts</h2>
                <div className="block">
                    <p className="text">
                    The Summer of 2022 was such a productive and insightful experience. I benefited so greatly working in a lab with 
                    so many bright faces and intelligent minds, while strengthening my computing knowledge base with topics from Python programming to object detection. 
                    I owe a big thank you to Dr. Medhat Moussa for this splendid opportunity, my lab supervisor Cole for always being there to 
                    assist with any in-lab needs, Matt for teaching me so much, giving me clear and concise instructions and being only a message 
                    away for aid, and finally to the rest of the Robotics Institute (including the horse in the window) for creating such a welcoming and friendly environment.
                    I am so grateful for this CO-OP work term and I am excited to hear about what great things the Robotics Institute does next.
                    <br></br>
                    <br></br>
                    </p>
                </div>
                <img src={horsePic} alt="me and the horse!" style={{width: "50vw", margin: "auto", display: "block", marginBottom: "10vh"}} className="picture"></img>
            </div>
        </div>
     );
}
 
export default Coop;