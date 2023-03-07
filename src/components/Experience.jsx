import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { staggerContainer, textVariant } from "../utils/motion";

const ExperienceCard = (experience, index) => {
  return (
    'asdf'
  );
}

const Experience = () => {
  return (
    <>
      <motion.div
        vvariants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experince.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, i) => <ExperienceCard experience={experience} index={i} />)}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')