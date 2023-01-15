import "./App.css";
import { useState } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import notes from "./meta.json";
import { AnimatePresence } from "framer-motion";

import CSSSpecificity from "./Pages/CSSSpecificity";
import JSArrayFunctions from "./Pages/JSArrayFunctions";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let validItems;
  const [items, setItems] = useState(notes);
  const srch = (ref) => {
    const searchValue = ref.current.value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "");
    validItems = notes.filter(
      (data) =>
        data.topic.toLowerCase().trim().includes(searchValue) ||
        searchValue.includes(data.type) ||
        data.search.some((val) => val.includes(searchValue))
    );
    setItems(validItems);
    navigate("/");
  };

  return (
    <main>
      <Header search={notes} searchValue={srch} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Content notes={items} />} />
          <Route
            path="/css-specificity"
            element={
              <>
                <Sidebar data={notes} />
                <CSSSpecificity />
              </>
            }
          />
          <Route
            path="/js-array-functions"
            element={
              <>
                <Sidebar data={notes} />
                <JSArrayFunctions />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default App;
