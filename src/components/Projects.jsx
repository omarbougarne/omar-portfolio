import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/myanimedb.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>🎬 MyAnimeDb</h3>
          <p>
            A comprehensive anime database and tracking application where users can
            discover, track, and manage their anime watchlist with detailed information
            and personalized recommendations.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/omarbougarne/myanimedb" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Code
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/sportpal.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>⚽ Sportpal</h3>
          <p>
            Your ultimate sports companion app for tracking activities, connecting
            with athletes, and managing sports events. Features real-time updates
            and social engagement tools.
          </p>
          <div className="project-tech">
            <span>React Native</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Express</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/omarbougarne/sportpal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Code
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/java-rpg.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>🎮 Java RPG Game</h3>
          <p>
            A turn-based role-playing game built with Java, featuring character
            customization, strategic combat system, inventory management, and
            an immersive storyline.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>JavaFX</span>
            <span>OOP</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/omarbougarne/java-rpg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Code
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};