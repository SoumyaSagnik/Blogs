const Footer = ({ screenSize }) => {
  return (
    <footer style={{ top: screenSize }}>
      <ul>
        <li>
          Author:{" "}
          <p>
            <a
              href="http://portfolio.soumyakhanda.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Soumya Sagnik Khanda
            </a>
          </p>
        </li>
        <li>
          Phone: <p>8093438354</p>
        </li>
        <li>
          Email:{" "}
          <p>
            <a href="mailto:soumyasagnik@gmail.com">soumyasagnik@gmail.com</a>
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
