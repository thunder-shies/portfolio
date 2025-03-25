import Lightning from "../components/Reactbits/Lightning/Lightning";
import { Contact } from "../components/ui/contact/Contact";
import { ProjectDetails } from "../components/sections/ProjectDetails";
import { BackButton } from "../components/ui/backbutton/BackButton";

export const ParallelRealities = () => {
    return (
        <div className="container">
            <div className="lightning-bg">
            <Lightning hue={15} xOffset={1} intensity={1.5} speed={1} size={3} />
            </div>

            <Contact />

            <div className="content">
            <BackButton to="/" label="Back" />
            <ProjectDetails projectId="parallel-realities" />
            </div>
        </div>
    );
};

export default ParallelRealities;