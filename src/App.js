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
import Git from "./Pages/Git";
import JSHoisting from "./Pages/JSHoisting";
import IWJSFunctions from "./Pages/IWJSFunctions";
import WindowAndThis from "./Pages/WindowAndThis";
import UndefinedVsNotDefined from "./Pages/UndefinedVsNotDefined";
import JSLooselyTyped from "./Pages/JSLooselyTyped";
import ScopeAndLE from "./Pages/ScopeAndLE";
import JSHoisting2 from "./Pages/JSHoisting2";
import Errors from "./Pages/Errors";
import BlockScopeAndShadowing from "./Pages/BlockScopeAndShadowing";
import Closures from "./Pages/Closures";
import JSInterview from "./Pages/JSInterview";
import Jargons from "./Pages/Jargons";
import Callback from "./Pages/Callback";
import EventLoop from "./Pages/EventLoop";
import OptionalChaining from "./Pages/OptionalChaining";
import Nullish from "./Pages/Nullish";
import FactoryAndConstructorFunctions from "./Pages/FactoryAndConstructorFunctions";
import ConstructorProperty from "./Pages/ConstructorProperty";
import PrimitiveVsReference from "./Pages/PrimitiveVsReference";
import ForInAndForOfLoop from "./Pages/ForInAndForOfLoop";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let validItems;
  const [items, setItems] = useState(notes);
  const srch = (ref) => {
    const searchValue = ref.current.value.toLowerCase().trim();
    validItems = notes.filter(
      (data) =>
        (data.topic.toLowerCase().trim().includes(searchValue) &&
          data.topic.toLowerCase().trim().substring(0, searchValue.length) ===
            searchValue) ||
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
          <Route
            path="/git"
            element={
              <>
                <Sidebar data={notes} />
                <Git />
              </>
            }
          />
          <Route
            path="/js-hoisting"
            element={
              <>
                <Sidebar data={notes} />
                <JSHoisting />
              </>
            }
          />
          <Route
            path="/js-iw-functions"
            element={
              <>
                <Sidebar data={notes} />
                <IWJSFunctions />
              </>
            }
          />
          <Route
            path="/js-windowAndthis"
            element={
              <>
                <Sidebar data={notes} />
                <WindowAndThis />
              </>
            }
          />
          <Route
            path="/js-undefinedVsNotDefined"
            element={
              <>
                <Sidebar data={notes} />
                <UndefinedVsNotDefined />
              </>
            }
          />
          <Route
            path="/js-loosely-typed"
            element={
              <>
                <Sidebar data={notes} />
                <JSLooselyTyped />
              </>
            }
          />
          <Route
            path="/js-scope&le"
            element={
              <>
                <Sidebar data={notes} />
                <ScopeAndLE />
              </>
            }
          />
          <Route
            path="/js-hoisting-let&const"
            element={
              <>
                <Sidebar data={notes} />
                <JSHoisting2 />
              </>
            }
          />
          <Route
            path="/js-errors"
            element={
              <>
                <Sidebar data={notes} />
                <Errors />
              </>
            }
          />
          <Route
            path="/js-block&shadowing"
            element={
              <>
                <Sidebar data={notes} />
                <BlockScopeAndShadowing />
              </>
            }
          />
          <Route
            path="/js-closures"
            element={
              <>
                <Sidebar data={notes} />
                <Closures />
              </>
            }
          />
          <Route
            path="/js-interview"
            element={
              <>
                <Sidebar data={notes} />
                <JSInterview />
              </>
            }
          />
          <Route
            path="/js-jargons"
            element={
              <>
                <Sidebar data={notes} />
                <Jargons />
              </>
            }
          />
          <Route
            path="/js-callback"
            element={
              <>
                <Sidebar data={notes} />
                <Callback />
              </>
            }
          />
          <Route
            path="/js-eventLoop"
            element={
              <>
                <Sidebar data={notes} />
                <EventLoop />
              </>
            }
          />
          <Route
            path="/js-optionalChaining"
            element={
              <>
                <Sidebar data={notes} />
                <OptionalChaining />
              </>
            }
          />
          <Route
            path="/js-nullish"
            element={
              <>
                <Sidebar data={notes} />
                <Nullish />
              </>
            }
          />
          <Route
            path="/js-factory-constructor"
            element={
              <>
                <Sidebar data={notes} />
                <FactoryAndConstructorFunctions />
              </>
            }
          />
          <Route
            path="/js-constructorProperty"
            element={
              <>
                <Sidebar data={notes} />
                <ConstructorProperty />
              </>
            }
          />
          <Route
            path="/js-primitiveVsReference"
            element={
              <>
                <Sidebar data={notes} />
                <PrimitiveVsReference />
              </>
            }
          />
          <Route
            path="/js-forIn&forOf"
            element={
              <>
                <Sidebar data={notes} />
                <ForInAndForOfLoop />
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
