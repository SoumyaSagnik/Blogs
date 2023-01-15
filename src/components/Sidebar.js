import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({ data }) => {
  let location = useLocation();
  const currentTitle = location.pathname;
  const asideLinks = data.filter((d) => d.link !== currentTitle);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <aside>
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
