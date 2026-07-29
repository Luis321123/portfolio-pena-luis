import { Dispatch } from "react";
import ImageProfile from '@/assets/Yo.jpeg';
import { Link } from "react-scroll";
import WindowManager from "../WindowsManager"; 
import GitHubIcon from '@/assets/icons/githubpixel.svg';
import WSIcon from '@/assets/icons/whatsapp.svg';
import GifAnimation from '@/assets/Roversniff.gif'; 

type PropsType = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: PropsType) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <WindowManager
      isOpen={isOpen}
      onClose={handleClose}
      title="📁 Mi Portafolio"
      initialWidth={500}
      initialHeight={530}
    >
      <div className="flex flex-col gap-4">
        
        <div className="flex justify-center pt-2">
          <img 
              src={ImageProfile}
              alt="Luis Foto"   
              className="w-1/4 max-w-[120px] aspect-square rounded-full object-cover border-4 border-[#316ac5] shadow-md mx-auto"
            />
        </div>

        <ul className="w-full flex flex-row flex-wrap justify-center gap-2 sm:gap-4 font-light text-base tracking-widest">
          <li className="hover:bg-[#316ac5] hover:text-white px-2 py-2 rounded transition-colors cursor-pointer">
            <Link to="/" spy={true} smooth={true} offset={-100} duration={300} onClick={handleClose}>
              🏠 Home
            </Link>
          </li>
          <li className="hover:bg-[#316ac5] hover:text-white px-2 py-2 rounded transition-colors cursor-pointer">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={300} onClick={handleClose}>
              ℹ️ About
            </Link>
          </li>
          <li className="hover:bg-[#316ac5] hover:text-white px-2 py-2 rounded transition-colors cursor-pointer">
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={300} onClick={handleClose}>
              📂 Projects
            </Link>
          </li>
        </ul>

        <hr className="my-2" style={{ borderColor: "#c0c0c0" }} />

        <div className="w-full">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-center mb-3 text-[#316ac5]">
            👤 Hello me
          </h4>

          <div className="flex flex-row justify-center gap-0 w-full pl-1 pr-20">
            
            <div className="flex flex-row justify-start items-center gap-0 max-w-[320px] w-full">
              
              <div className="flex items-center shrink-0">
                <img 
                  src={GifAnimation} 
                  alt="Animación" 
                  className="w-32 h-auto object-contain"
                />
              </div>

              <div className="flex flex-col items-start pl-2 shrink-0">
                <ul className="flex flex-col gap-1 text-sm tracking-widest items-start">
                  <li className="px-2 py-1 flex items-center gap-2 hover:bg-[#e5f3ff] rounded transition-colors whitespace-nowrap">
                    <span className="text-base">📧</span>
                    <span>luis123321@gmail.com</span>
                  </li>
                  <li className="px-2 py-1 flex items-center gap-2 hover:bg-[#e5f3ff] rounded transition-colors whitespace-nowrap">
                    <img src={GitHubIcon} alt="GitHub" className="w-5 h-5" />
                    <a href="https://github.com/Luis321123" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      @Luis321123
                    </a>
                  </li>
                  <li className="px-2 py-1 flex items-center gap-2 hover:bg-[#e5f3ff] rounded transition-colors whitespace-nowrap">
                    <img src={WSIcon} alt="Whatsapp" className="w-5 h-5" />
                    <a href="tel:+584127483611" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      +58 4127483611
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2 pt-3 border-t border-[#c0c0c0]">
          <button
            onClick={handleClose}
            className="px-4 py-1 bg-[#c0c0c0] border-2 border-[#f0f0f0] border-r-[#404040] border-b-[#404040] hover:bg-[#d5d5d5] active:border-[#404040] active:border-r-[#f0f0f0] active:border-b-[#f0f0f0] text-sm font-medium"
          >
            Aceptar
          </button>
        </div>
      </div>
    </WindowManager>
  );
};

export default Navbar;