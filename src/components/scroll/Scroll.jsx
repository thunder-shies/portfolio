import "./Scroll.css";
import py_icon from "../../assets/svg/icons8-python.svg";
import uni_icon from "../../assets/svg/icons8-unity.svg";
import td_icon from "../../assets/images/TouchDesigner_logo.png";
import h5_icon from "../../assets/svg/icons8-html-5.svg";
import css_icon from "../../assets/svg/icons8-css3.svg";
import js_icon from "../../assets/svg/icons8-javascript.svg";
import figma_icon from "../../assets/svg/icons8-figma.svg";
import ps_icon from "../../assets/svg/icons8-photoshop.svg";
import ai_icon from "../../assets/svg/icons8-adobe-illustrator.svg";
import dvr_icon from "../../assets/svg/icons8-davinci-resolve.svg";
import mso_icon from "../../assets/svg/icons8-microsoft-365.svg";


export const Scroll = () => {
  return (
    <div className="scroll-wrapper">
      <div className="skill skill1">
        <img src={py_icon} />
        <h3>Python</h3>
      </div>
      
      <div className="skill skill2">
        <img src={uni_icon} />
        <h3>Unity</h3>
      </div>

      <div className="skill skill3">
        <img src={td_icon} />
        <h3>TouchDesigner</h3>
      </div>

      <div className="skill skill4">
        <img src={h5_icon} />
        <h3>HTML</h3>
      </div>

      <div className="skill skill5">
        <img src={css_icon} />
        <h3>CSS</h3>
      </div>

      <div className="skill skill6">
        <img src={js_icon} />
        <h3>JavaScript</h3>
      </div>

      <div className="skill skill7">
        <img src={figma_icon} />
        <h3>Figma</h3>
      </div>

      <div className="skill skill8">
        <img src={ps_icon} />
        <h3>Photoshop</h3>
      </div>

      <div className="skill skill9">
        <img src={ai_icon} />
        <h3>Illustrator</h3>
      </div>

      <div className="skill skill10">
        <img src={dvr_icon} />
        <h3>DaVinci Resolve</h3>
      </div>

      <div className="skill skill11">
        <img src={mso_icon} />
        <h3>Microsoft Office</h3>
      </div>
    </div>
  );
};
export default Scroll;
