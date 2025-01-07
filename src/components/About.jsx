import myImg from "../assets/myImg.png";
import reactImg from "../assets/react.png";
import jsImg from "../assets/js.png";
import bootstrapImg from "../assets/bootstrap.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import gitImg from "../assets/git.png";
import gitHubImg from "../assets/git_hub.png";

const About = () => {
     return (
          <>
               <div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div className="modal-dialog modal-lg">
                              <div className="modal-content about_more">
                                   <div className="modal-header">
                                        <h2 className="modal-title" id="exampleModalLabel">More About <span>Me</span></h2>
                                        <button type="button" className="btn-close text-success" data-bs-dismiss="modal" aria-label="Close" />
                                   </div>
                                   <div className="modal-body">
                                        <p>Beyond coding, I&rsquo;m an <b>English speaker</b>&rsquo;s ability to <b>communicate</b> effectively, and a <b>lifelong learner</b> who loves exploring <b>new technologies</b> and improving my craft. Let&rsquo;s connect and collaborate to bring <b>impactful projects</b> to life!</p>
                                        <div className="about_skills">
                                             <h4>My Professional Skills:- </h4>
                                             <img src={reactImg} alt="react" title="ReactJS" />
                                             <img src={jsImg} alt="js" title="JavaScript" />
                                             <img src={bootstrapImg} alt="bootstrap" title="Bootstrap" />
                                             <img src={cssImg} alt="css" title="Cascading Style Sheet" />
                                             <img src={htmlImg} alt="html" title="Hyper Text Markup Lang." />
                                             <img src={gitImg} alt="git" title="Git" />
                                             <img src={gitHubImg} alt="github" title="Git Hub" />
                                        </div>
                                        <div className="personal_info">
                                             <h4>Personal Information:- </h4>
                                             <p><b>Current Address:- </b> Indore M.P.</p>
                                             <p><b>Contact:- </b> +916265188287</p>
                                             <p><b>Email:- </b> techfaithhub@gmail.com</p>
                                             <p><b>GitHub:- </b> <a target="blank" href="https://github.com/techfaithhub1/">Open GitHub</a></p>
                                        </div>
                                   </div>
                                   <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">
                                             <a target="blank" href="https://drive.google.com/file/d/1e3MDr_-NkJxBgLw1g8APkbcdOKftDzk8/view">Download CV</a>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div id="about" className="container-fluid container-lg">
                    <div className="row content">
                         <div className="col-lg-5 col-md-5 col-sm-10 about_img">
                              <img src={myImg} alt="img" />
                         </div>
                         <div className="col-lg-7 col-md-7 col-sm-10 about_text">
                              <h2>About <span>Me</span></h2>
                              <p>Hello! I&rsquo;m Gulabsing Jamre, a passionate <b>Web Developer</b>, with a knack for creating <b>innovative</b> and <b>user-friendly solutions</b>. I specialize in <b>ReactJS development</b>, <b>git</b>, and <b>deployment to GitHub</b>, and I have created <b>user interfaces</b> and <b>responsive web applications</b>.</p>
                              <button className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Learn More</button>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default About