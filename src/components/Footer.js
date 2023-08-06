import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const Footer = ({ screenSize }) => {
  return (
    <footer style={{ top: screenSize }}>
      <ul>
        <li>
          <a
            href="https://soumyakhanda.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LanguageIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SoumyaSagnik/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/soumya-sagnik-khanda-0446641b8/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a href="mailto:soumyasagnik@gmail.com">
            <MailRoundedIcon fontSize="medium" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
