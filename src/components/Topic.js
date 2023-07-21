import { Link } from "react-router-dom";

const Topic = ({ topic, type, desc, link }) => {
  return (
    <Link to={link}>
      <div className="topic">
        <h4>{topic}</h4>
        <p>{desc}</p>
        <img src={require(`../../public/images/${type}.png`)} alt="error" />
        {/* <button>
        <Link to={link}>Read</Link>
      </button> */}
      </div>
    </Link>
  );
};

export default Topic;
