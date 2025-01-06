import weather from "../assets/weather.jpg";
import todo from "../assets/todo.jpg";
import quiz from "../assets/quiz.jpg";

const Project = () => {
     return (
          <div id="project" className="container-fluid container-lg container-sm">
               <h1>My Portfolio</h1>
               <div className="row project_section">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="card">
                              <a target="blank" href="https://techfaithhubcontact1.github.io/p10_js_weather_app/ " title="Show Project">
                                        <div className="img_elm">
                                             <img src={weather} className="card-img-top" alt="..." />
                                        </div>
                              </a>
                              <div className="card-body">
                                   <h5 className="card-title">JS Weather App</h5>
                                   <a target="blank" href="https://github.com/techfaithhubcontact1/p10_js_weather_app/tree/master" title="Show Code">
                                        <ul className="card-text">
                                             <li>REST API Calling</li>
                                             <li>fetch, map method</li>
                                             <li>current & forecast weather</li>
                                        </ul>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="card">
                              <a target="blank" href=" https://techfaithhubcontact1.github.io/ps6_js_todo_list_app/" title="Show Project">
                                   <div className="img_elm">
                                        <img src={todo} className="card-img-top" alt="..." />
                                   </div>
                              </a>
                              <div className="card-body">
                                   <h5 className="card-title">JS Todo List App</h5>
                                   <a target="blank" href=" https://github.com/techfaithhubcontact1/ps6_js_todo_list_app/tree/master" title="Show Code">
                                        <ul className="card-text">
                                             <li>Locale Storage</li>
                                             <li>filter method & mediaQuery</li>
                                             <li>Array methods</li>
                                        </ul>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="card">
                              <a target="blank" href="https://techfaithhubcontact1.github.io/p5_js_quiz_web/ " title="Show Project">
                                   <div className="img_elm">
                                        <img src={quiz} className="card-img-top" alt="..." />
                                   </div>
                              </a>
                              <div className="card-body">
                                   <h5 className="card-title">JS Quiz App</h5>
                                   <a target="blank" href="https://github.com/techfaithhubcontact1/p5_js_quiz_web/tree/main" title="Show Code">
                                        <ul className="card-text">
                                             <li>Events & ReuseableFunction</li>
                                             <li>DOM methods & font Icons </li>
                                             <li>setInterval & setTimeout </li>
                                        </ul>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Project;