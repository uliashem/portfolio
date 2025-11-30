import gitHubIcon from '../../img/icons/gitHub-black.svg';
import "../../App.css";

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="gitHub button" />
			GitHub repo
		</a>
	);
};

export default BtnGitHub;