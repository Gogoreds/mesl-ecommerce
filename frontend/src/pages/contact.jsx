import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

  return ( 
    <div className=" py-16 px-4  bg-gradient-to-l from-[#8FACF4] to-[#FFFFFF] 4xl:pr-[23%] w-full ">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
      <div className="flex flex-col justify-center pl-8 pt-4 m-8">
        <h1 className="md:text-4xl sm:text-3xl font-mono text-2xl font-bold py-2">
          Act now and modernize your IT system
        </h1>
        <p>Send us an email and we will get back to you.</p>
      </div>
      <div className="relative flex flex-col justify-center  min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto border-2 rounded-md shadow-2xl lg:max-w-xl">
          <h1 className="text-3xl font-mono text-center text-indigo-700 decoration-wavy">
            Contact Us
          </h1>

          <form
            className="mt-6"
            action="mailto:hello@sudosweden.com"
            method="get"
            enctype="text/plain"
          >
            <div>
              <h3 className="font-mono">
                Subject<br></br>
              </h3>
              <input
                className="text-gray-700 font-mono border-2 rounded-md border-gray-300 mb-2 w-full px-2"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <h3 className="font-mono">
                Email<br></br>
              </h3>
              <input
                className="border-2 border-gray-300 font-mono rounded-md mb-2 w-full px-2"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <h3 className="font-mono">
                Write to us<br></br>
              </h3>
              <textarea
                className="border-2 rounded-md font-mono w-full px-2 "
                name="body"
                rows="5"
                cols="30"
                placeholder="Hello..."
              ></textarea>
            </div>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={() => setCaptcha(!captcha)}
            />
            {!captcha ? (
              <button
                disabled
                className="bg-[#343B63] text-[#FFFFFF] rounded-3xl font-medium my-14 mx-auto ml-[23%] px-6 py-3  md:ml-[35%] hover:bg-gradient-to-r from-[#0D124B] via-[#8FACF4] to-[#0D124B]"
                >Connect with us
                </button>
            ) : (
              <button
                type="submit"
                className="bg-[#343B63] text-[#FFFFFF] rounded-3xl font-medium my-14 mx-auto ml-[23%] px-6 py-3  md:ml-[35%] hover:bg-gradient-to-r from-[#0D124B] via-[#8FACF4] to-[#0D124B]"
                >Connect with us
                </button>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>

   );
}
 
export default Contact;