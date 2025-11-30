import "../../App.css";

const BtnNetlify = ({ weblink }) => {
  return (
    <a href={weblink} target="_blank" rel="noreferrer" className="btn-outline">
      Netlify website
    </a>
  );
};

export default BtnNetlify;