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

const Experience = () => {
  return (
    <>
      <motion.div
        vvariants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experince.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')