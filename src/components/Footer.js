const Footer = ({ screenSize }) => {
  return (
    <footer style={{ top: screenSize }}>
      <ul>
        <li>
          <a
            href="http://portfolio.soumyakhanda.tech/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require(`../images/name.png`)} alt="SSK" id="name" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SoumyaSagnik/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require(`../images/github.png`)}
              alt="GitHub"
              id="github"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/soumya-sagnik-khanda-0446641b8/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require(`../images/linkedin.png`)}
              alt="linkedin"
              id="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="mailto:soumyasagnik@gmail.com">
            <img src={require(`../images/email.png`)} alt="mail" id="mail" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
