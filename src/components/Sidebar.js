import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({ data, height }) => {
  let location = useLocation();
  const currentTitle = location.pathname;
  const asideLinks = data.filter((d) => d.link !== currentTitle);
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <aside style={{ height: height ?? "90%" }}>
        <h2>Other Topics</h2>
        <ul>
          {asideLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.topic}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </motion.div>
  );
};

export default Sidebar;
