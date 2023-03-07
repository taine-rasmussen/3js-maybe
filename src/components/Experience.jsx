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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      key={experience.title}
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232621' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h=[60%] object-contain'
          />
        </div>
      }
    >
      {experience.date}
    </VerticalTimelineElement>
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
          {experiences.map((experience, i) => <ExperienceCard experience={experience} />)}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')