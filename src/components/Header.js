import { Link } from "react-router-dom";
import { useRef } from "react";

const Header = ({ searchValue }) => {
  const inputRef = useRef();
  return (
    <header id="header">
      <div className="logo">
        <Link to={"/"}>
          <h1>Blogs</h1>
        </Link>
      </div>
      <div className="search">
        <input
          type="search"
          ref={inputRef}
          onChange={() => searchValue(inputRef)}
          placeholder="Search"
        />
      </div>
    </header>
  );
};

export default Header;
