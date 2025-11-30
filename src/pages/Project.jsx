import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"
import BtnNetlify from "../components/btnNetlify/BtnNetlify";

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-content">
					<h1 className="title-1">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-content__image"
					/>

					<div className="project-content__info">
						<p>Skills: {project.skills}</p>
					</div>

					<div className="project-list">

						{project.gitHubLink && (
						<BtnGitHub link={project.gitHubLink} />
					)}

					  {project.netlifyLink && (
						<BtnNetlify weblink={project.netlifyLink} />
					)}

					</div>

					
				</div>
			</div>
		</main>
	);
}

export default Project;