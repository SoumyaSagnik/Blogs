import Topic from "./Topic";
import { motion } from "framer-motion";

const Content = ({ notes }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content-container">
        <div className="content">
          {notes.map((note) => (
            <Topic
              key={note.id}
              topic={note.topic}
              type={note.type}
              desc={note.desc}
              link={note.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Content;
