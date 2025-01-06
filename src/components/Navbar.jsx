
function Navbar() {
     
     addEventListener("scroll", ()=>{
          const navElm = document.querySelector("nav");
          if(scrollY > 680){
               navElm.classList.add("nav_sticky");
          }else{
               navElm.classList.remove("nav_sticky");
          }
     });

     return (
          <nav className="navbar navbar-expand-lg">
               <div className="container-fluid container-lg container-sm width">
                    <a className="navbar-brand" href="#"><span>Port</span>folio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
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