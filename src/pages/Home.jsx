import Lightning from "../components/Reactbits/Lightning/Lightning";
import { Contact } from "../components/ui/contact/Contact";
import { Navbar } from "../components/ui/navbar/Navbar";
import { About } from "../components/sections/About";
import { Work } from "../components/sections/Work";

export function Home () {
  return (
    <div className="container">
      <div className="lightning-bg">
        <Lightning hue={230} intensity={1.2} speed={0.8} size={1.2} />
      </div>

      <Contact />

      <div className="content">
        <Navbar />
        <About />
        <Work />
      </div>
    </div>
  );
};

export default Home;