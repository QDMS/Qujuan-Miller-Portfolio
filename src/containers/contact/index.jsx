import React, {useRef} from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdContactSupport } from "react-icons/md";
import "./styles.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6vvebr9', 'template_h766w6g', form.current, 'BE1-PFccDY91yHF5V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<MdContactSupport size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Chat</h3>
        <form ref={form} onSubmit={sendEmail}>
        <div className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            <div className="nameWrapper">
              <input name="name" className="inputName" type="text" />
              <label htmlFor="name" className="namelabel">
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input name="email" className="inputEmail" type="text" />
              <label htmlFor="email" className="emaillabel">
                Email
              </label>
            </div>
            <div className="subjectWrapper">
              <input name="subject" className="inputSubject" type="text" />
              <label htmlFor="subject" className="subjectlabel">
                Subject
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                name="description"
                className="inputDescription"
                type="text"
                rows={"5"}
                styles={{ resize: "none" }}
              />
              <label htmlFor="description" className="descriptionlabel">
                Description
              </label>
            </div>
          </div>
          <div className="button">
          <button type="submit">Submit</button>
          </div>
        </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
