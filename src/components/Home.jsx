import Typewriter from "typewriter-effect";
import image from "../assets/project.png";
import reactImg from "../assets/react.png";
import jsImg from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import cssImg from "../assets/css.png";

function Home() {
     const autoType = ()=>{
          return (
               <Typewriter className="display-inline"
                    options={{
                         strings: ["Web Developer.", "Frontend Developer.", "Web Developer."],
                         autoStart: true, 
                         loop: true, 
                         delay: 50, 
                         deleteSpeed: 30, 
                         pauseFor: 1500,
                    }}
               />
          )
     };

     return (
          <div className="home_page" id="home">
               <div className="container-fluid container-lg">
                    <div className="row banner">
                         <div className="banner_text col-lg-7 col-md-7 col-sm-10">
                              <h5>WELCOME TO MY PORTFOLIO!</h5>
                              <h1>Hi, I&rsquo;m Gulabsing Jamre</h1>
                              <h2>And a &nbsp; <span> {autoType()} </span></h2>
                              <p>
                                   I am a expertise in modern web technologies like HTML, CSS, JavaScript, and frameworks like React and Bootstrap.
                                   Explore my projects to see how I combine creativity and technical skill to deliver impactful solutions.
                              </p>
                              <button className="btn btn-md">Download CV</button><br />
                              <div className="banner_link">
                                   <div className="links">
                                        <h5>FIND WITH ME</h5>
                                        <a href="#"><i className="bi bi-github me-3"></i></a>
                                        <a href="#"><i className="bi bi-telegram me-3"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                   </div>
                                   <div className="skill">
                                        <h5>MY BEST SKILLS</h5>
                                        <span><img src={jsImg} alt="js" /></span>
                                        <span><img src={reactImg} alt="react" /></span>
                                        <span><img src={bootstrap} alt="bootstrap" /></span>
                                        <span><img src={cssImg} alt="css" /></span>
                                   </div>
                              </div>
                         </div>
                         <div className="banner_img col-lg-5 col-md-5 col-sm-8 text-sm-center"><img src={image} alt="img" /></div>
                    </div>
               </div>
               {/* <div className="arrow">
                    <a href="#home"><i className="bi bi-arrow-up"></i></a>
               </div> */}
          </div>
     );
};

export default Home;