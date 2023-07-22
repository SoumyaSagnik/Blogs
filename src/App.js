import "./App.css";
import "./Loader.css";
import { useState, lazy, Suspense } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import notes from "./meta.json";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const CSSSpecificity = lazy(() => import("./Pages/CSSSpecificity"));
const JSArrayFunctions = lazy(() => import("./Pages/JSArrayFunctions"));
const Git = lazy(() => import("./Pages/Git"));
const JSHoisting = lazy(() => import("./Pages/JSHoisting"));
const IWJSFunctions = lazy(() => import("./Pages/IWJSFunctions"));
const WindowAndThis = lazy(() => import("./Pages/WindowAndThis"));
const UndefinedVsNotDefined = lazy(() =>
  import("./Pages/UndefinedVsNotDefined")
);
const JSLooselyTyped = lazy(() => import("./Pages/JSLooselyTyped"));
const ScopeAndLE = lazy(() => import("./Pages/ScopeAndLE"));
const JSHoisting2 = lazy(() => import("./Pages/JSHoisting2"));
const Errors = lazy(() => import("./Pages/Errors"));
const BlockScopeAndShadowing = lazy(() =>
  import("./Pages/BlockScopeAndShadowing")
);
const Closures = lazy(() => import("./Pages/Closures"));
const JSInterview = lazy(() => import("./Pages/JSInterview"));
const Jargons = lazy(() => import("./Pages/Jargons"));
const Callback = lazy(() => import("./Pages/Callback"));
const EventLoop = lazy(() => import("./Pages/EventLoop"));
const OptionalChaining = lazy(() => import("./Pages/OptionalChaining"));
const Nullish = lazy(() => import("./Pages/Nullish"));
const FactoryAndConstructorFunctions = lazy(() =>
  import("./Pages/FactoryAndConstructorFunctions")
);
const ConstructorProperty = lazy(() => import("./Pages/ConstructorProperty"));
const PrimitiveVsReference = lazy(() => import("./Pages/PrimitiveVsReference"));
const ForInAndForOfLoop = lazy(() => import("./Pages/ForInAndForOfLoop"));
const ObjectCloning = lazy(() => import("./Pages/ObjectCloning"));
const DebounceAndThrottle = lazy(() => import("./Pages/DebounceAndThrottle"));
const MimicLifecycleUseEffect = lazy(() =>
  import("./Pages/MimicLifecycleUseEffect")
);

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
      <Helmet>
        <title>Blogs by SSK</title>
        <meta
          name="description"
          content="Blog articles related to web development."
        />
        <meta name="keywords" content="blog, article" />
      </Helmet>
      <Header search={notes} searchValue={srch} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Content notes={items} />} />
          <Route
            path="/css-specificity"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="57.5rem" />
                <CSSSpecificity />
              </Suspense>
            }
          />
          <Route
            path="/js-array-functions"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <JSArrayFunctions />
              </Suspense>
            }
          />
          <Route
            path="/git"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <Git />
              </Suspense>
            }
          />
          <Route
            path="/js-hoisting"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <JSHoisting />
              </Suspense>
            }
          />
          <Route
            path="/js-iw-functions"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <IWJSFunctions />
              </Suspense>
            }
          />
          <Route
            path="/js-windowAndthis"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="90rem" />
                <WindowAndThis />
              </Suspense>
            }
          />
          <Route
            path="/js-undefinedVsNotDefined"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <UndefinedVsNotDefined />
              </Suspense>
            }
          />
          <Route
            path="/js-loosely-typed"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="33rem" />
                <JSLooselyTyped />
              </Suspense>
            }
          />
          <Route
            path="/js-scope&le"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <ScopeAndLE />
              </Suspense>
            }
          />
          <Route
            path="/js-hoisting-let&const"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <JSHoisting2 />
              </Suspense>
            }
          />
          <Route
            path="/js-errors"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="50rem" />
                <Errors />
              </Suspense>
            }
          />
          <Route
            path="/js-block&shadowing"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <BlockScopeAndShadowing />
              </Suspense>
            }
          />
          <Route
            path="/js-closures"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <Closures />
              </Suspense>
            }
          />
          <Route
            path="/js-interview"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="60rem" />
                <JSInterview />
              </Suspense>
            }
          />
          <Route
            path="/js-jargons"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <Jargons />
              </Suspense>
            }
          />
          <Route
            path="/js-callback"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <Callback />
              </Suspense>
            }
          />
          <Route
            path="/js-eventLoop"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <EventLoop />
              </Suspense>
            }
          />
          <Route
            path="/js-optionalChaining"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <OptionalChaining />
              </Suspense>
            }
          />
          <Route
            path="/js-nullish"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="65rem" />
                <Nullish />
              </Suspense>
            }
          />
          <Route
            path="/js-factory-constructor"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="80rem" />
                <FactoryAndConstructorFunctions />
              </Suspense>
            }
          />
          <Route
            path="/js-constructorProperty"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <ConstructorProperty />
              </Suspense>
            }
          />
          <Route
            path="/js-primitiveVsReference"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <PrimitiveVsReference />
              </Suspense>
            }
          />
          <Route
            path="/js-forIn&forOf"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <ForInAndForOfLoop />
              </Suspense>
            }
          />
          <Route
            path="/js-objectCloning"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <ObjectCloning />
              </Suspense>
            }
          />
          <Route
            path="/js-debounce&Throttle"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} />
                <DebounceAndThrottle />
              </Suspense>
            }
          />
          <Route
            path="/react-MimicLifecycle"
            element={
              <Suspense fallback={<Loader />}>
                <Sidebar data={notes} height="85rem" />
                <MimicLifecycleUseEffect />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default App;
