import { Toaster } from "react-hot-toast";
import { Header } from "./components";
import { HomePage, AboutPage, ProjectPage, ContactPage } from "./pages";
import ButtonUp from "./components/PrimitiveElements/ButtonUp";

const App = () => {
  return (
    <>
      <Header />
      <Toaster />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
};

export default App;
