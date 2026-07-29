import LinkedinIconPixel from "@/assets/icons/linkedinPixel.svg";
import githubPixel from "@/assets/icons/githubpixel.svg";

const ContactPage = () => {
  return (
    <footer className="bg-third rounded-lg  m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center ">
          © 2025 LuisPeña™
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black  sm:mt-0">
          <li>
            <a
              href="https://github.com/Luis321123"
              className="hover:underline me-4 md:me-6 flex gap-1 items-center"
            >
              Github
              <img
                src={githubPixel}
                alt="github icon logotype"
                className="w-6 h-6"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luis-pe%C3%B1a-b76a51151/"
              className="hover:underline me-4 md:me-6 flex gap-1 items-center"
            >
              Linkedin
              <img
                src={LinkedinIconPixel}
                alt="linkedin icon logotype"
                className="w-6 h-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactPage;
