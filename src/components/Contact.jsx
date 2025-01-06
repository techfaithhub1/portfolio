import Swal from 'sweetalert2'
import contactImg from "../assets/contact.png";

const Contact = () => {

     const onSubmit = async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
      
          formData.append("access_key", "bd7dff7f-38d3-4c95-9afe-51632deded70");
      
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
      
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json())
          .then((res)=>{
               Swal.fire({
                    title: "Success!",
                    text: res.message,
                    icon: "success"
               });
          }).catch(()=>{
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
               });
          });
          document.querySelectorAll("form .form-control").forEach((input)=>input.value = "");
          
        };

     return (
          <div id="contact" className="container-fluid container-lg container-sm">
               <h1>Contact With Me</h1>
               <div className="row contact_content">
                    <div className="col-lg-5 col-md-5 col-sm-10 img_info_elm">
                         <div className="f_img_elm">
                              <img src={contactImg} alt="contact" />
                         </div>
                         <div className="f_info_elm">
                              <h5>I am get ready for developing</h5>
                              <p><b>Permanent Address:- </b> Barwani District M.P.</p>
                              <p><b>Current Address:- </b> Indore M.P. India</p>
                              <p><b>Phone Number:- </b> +916265188287</p>
                              <p><b>Email:- </b> techfaithhub@gmail.com</p>
                         </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-10 form_elm">
                         <form onSubmit={onSubmit} className="row">
                              <div className="col-lg-6 mt-3">
                                   <label htmlFor="inputName" className="form-label">Name</label>
                                   <input type="text" name="name" className="form-control" id="inputName" required />
                              </div>
                              <div className="col-lg-6 mt-3">
                                   <label htmlFor="inputEmail" className="form-label">Email</label>
                                   <input type="email" name="email" className="form-control" id="inputEmail" required />
                              </div>
                              <div className="col-12 mt-3">
                                   <label htmlFor="inputSubject" className="form-label">Subject</label>
                                   <input type="text" name="subject" className="form-control" id="inputSubject" required />
                              </div>
                              <div className="col-12 mt-3">
                                   <label htmlFor="Textarea" className="form-label">Your Message</label>
                                   <textarea name="message" className="form-control" id="Textarea" rows={6} required />
                              </div>
                              <div className="col-12 text-center mt-4 mb-2 btn_elm">
                                   <button className="btn btn-md">Send Me <i className="bi bi-arrow-right"></i></button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Contact;