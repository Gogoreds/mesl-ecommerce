import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [captcha, setCaptcha] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ug6oxqv",
        "template_hwvv6id",
        form.current,
        "z6GQb5XMBoxvDu4XS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Form sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="  4xl:pr-[23%] w-full bg-white px-4 ">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2 ">
        <div className="m-8 flex flex-col justify-center pl-8 pt-4">
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Act now and modernize your warderobe
          </h1>
          <p>Send us an email and we will get back to you.</p>
        </div>
        <div className="relative flex min-h-screen flex-col justify-center  overflow-hidden p-12 ">
          <div className="m-auto w-full rounded-md border-2 p-6 shadow-2xl lg:max-w-xl">
            <h1 className="text-center text-3xl text-gray-700 decoration-wavy">
              Contact Us
            </h1>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6"
              method="get"
              encType="text/plain"
            >
              <div>
                <h3 className="">
                  Subject<br></br>
                </h3>
                <input
                  className="mb-2 w-full rounded-md border-2 border-gray-300 px-2 text-gray-700"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div>
                <h3 className="">
                  Email<br></br>
                </h3>
                <input
                  className="mb-2 w-full rounded-md border-2 border-gray-300 px-2"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <h3 className="">
                  Write to us<br></br>
                </h3>
                <textarea
                  className="w-full rounded-md border-2 px-2 "
                  name="message"
                  rows="5"
                  cols="30"
                  placeholder="Hello..."
                ></textarea>
              </div>
              {/* <ReCAPTCHA
              sitekey="6Lc8jjgmAAAAALpy5lW_-5jBgibhhH1OmYK_UTF-"
              onChange={() => setCaptcha(!captcha)}
            />
            {!captcha ? (
              <button
                disabled
                className="bg-[#343B63] text-[#FFFFFF] rounded-md hover:bg-blue-600 font-medium my-14 mx-auto ml-[23%] px-6 py-3  md:ml-[35%] "
                >Connect with us
                </button>
            ) : ( */}
              <button
                type="submit"
                value="Send"
                className="mx-auto my-14 ml-[19%] rounded-md bg-[#343B63] px-6 py-3 font-medium text-[#FFFFFF] hover:bg-blue-600  md:ml-[35%] "
              >
                Contact us
              </button>
              {/* )} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
