
function Navbar() {
     
     addEventListener("scroll", ()=>{
          const navElm = document.querySelector("nav");
          if(scrollY > 600){
               navElm.classList.add("nav_sticky");
          }else{
               navElm.classList.remove("nav_sticky");
          }
     });

     const dismiss1 = (e)=>{ 
          document.querySelector("nav i").classList.remove("hide");
          e.target.classList.add("hide");
          document.querySelector("nav .navbar-collapse").classList.remove("hide");
     }
     const dismiss2 = (e)=>{
          document.querySelector("nav .navbar-toggler-icon").classList.remove("hide");
          e.target.classList.add("hide");
          document.querySelector("nav .navbar-collapse").classList.add("hide");
     }

     return (
          <nav className="navbar navbar-expand-lg">
               <div className="container-fluid container-lg container-sm width">
                    <a className="navbar-brand" href="#"><span>Port</span>folio</a>
                    <button className="navbar-toggler" onClick={dismiss1} type="button" >
                         <span className="navbar-toggler-icon" />
                    </button>
                    <i className="bi bi-x-lg cancel hide" onClick={dismiss2} />
                    <div className="hide navbar-collapse d-lg-flex justify-content-end" >
                         <ul className="navbar-nav mb-2 mb-lg-0 fs-5 gap-lg-5 text-md-end">
                              <li className="nav-item">
                                   <a className="nav-link" aria-current="page" href="#">Home</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" aria-current="page" href="#about">About</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" aria-current="page" href="#project">Project</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" aria-current="page" href="#contact">Contact</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>

     );
}

export default Navbar;