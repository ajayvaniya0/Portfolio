import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <div>
      <section id='Projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link={"https://github.com/ajayvaniya0/ReactTodoApp"}
            h3="ToDo"
            p="TodoList App"
            />
            <ProjectCard src={freshBurger} link={"https://github.com/ajayvaniya0/Restaurent-Website-Project"}
            h3="Fresh Food"
            p="Restaurent App"
            />
            <ProjectCard src={hipsster} link={"https://github.com/ajayvaniya0/weather-app"}
            h3="WeatherFast"
            p="Weather App"
            />
            <ProjectCard src={fitLift} link={"https://swoley-gym-fit.vercel.app/"}
            h3="swoley-fit"
            p="Gym Workout App"
            />
        </div>
      </section>

    </div>
  )
}

export default Projects
