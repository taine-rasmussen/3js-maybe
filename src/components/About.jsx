import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc'
import { styles } from '../styles';
import Tilt from 'react-tilt';


const ServiceCard = (props) => {
  const {
    index,
    title,
    icon
  } = props

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-1 rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt >
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='mt-10 flex flex-row'
      >
        <a href='src/assets/TaineRasmussenCV.pdf' download>
          <h3 className='sm:text-[24px] text-[20px] text-white uppercase tracking-wider bold'>Download CV</h3>
        </a>
      </motion.div >

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-2-3x1 leading-[30px]'
      >
        As a dedicated Full Stack developer, my passion for programming and interest in exploring new things have led me to graduate from a web development bootcamp, in addition to gaining professional experience at a SaaS company in New Zealand over the past 14 months. With a solid foundation in web development and technical knowledge, I bring expertise and a detail-oriented approach to all projects. Having recently relocated to London, I am eager to explore new opportunities and contribute my skills and enthusiasm to a new team.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')