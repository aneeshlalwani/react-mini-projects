import Button from "./Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  return (
    <>
      <section className="form-container">
        <div className="contact-form">
          <div className="top-btn">
            <Button
              buttonIcon={<MdMessage fontSize="24px" />}
              buttonText="via support chat"
            />
            <Button
              buttonIcon={<FaPhoneAlt fontSize="24px" />}
              buttonText="via call"
            />
          </div>
          <Button
            isOutline={true}
            buttonIcon={<HiMail fontSize="24px" />}
            buttonText="via email form"
          />
          <form action="">
            <div className="form_control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form_control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form_control">
              <label htmlFor="text">Text</label>
              <textarea name="text" rows={10}></textarea>
            </div>
            <div className="submit-btn">
              <Button buttonText="submit" />
            </div>
          </form>
        </div>

        <div className="contact-img">
          <img src="/images/service-img.svg" alt="service image" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
