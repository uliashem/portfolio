import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Projects</h1>
				<ul className="project-list">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
