import { Link } from "react-router-dom";

const Topic = ({ topic, type, desc, link }) => {
  return (
    <div className="topic">
      <h3>{topic}</h3>
      <p>{desc}</p>
      <img src={require(`../../public/images/${type}.png`)} alt="error" />
      <button>
        <Link to={link}>Read</Link>
      </button>
    </div>
  );
};

export default Topic;
