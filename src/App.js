import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TheHeader from "./components/layout/header/TheHeader";
import TheFooter from "./components/layout/TheFooter";
import TheSpinner from "./components/ui/TheSpinner";
// import MoviesPage from "./pages/MoviesPage";
// import DetailPage from "./pages/DetailPage";
// import SingupPage from "./pages/SignupPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import CollectionPage from "./pages/CollectionPage";

const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));

function App() {
  // state that controls the theme color of the page
  const [theme, setTheme] = useState("original");

  function selectTheme(e) {
    setTheme(e);
  }

  return (
    <BrowserRouter>
      <main className={theme}>
        <TheHeader selectTheme={selectTheme} />
        <Suspense fallback={<TheSpinner />}>
          <AnimatePresence>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  return <MoviesPage page={1} />;
                }}
              />
              <Route
                path={[
                  "/page/:page",
                  "/search/:search",
                  "/search/:search/page/:page",
                ]}
                exact
                render={(props) => {
                  const { page, search } = props.match.params;
                  return <MoviesPage page={page} search={search} />;
                }}
              />
              <Route path="/movie/:movieId" exact component={DetailPage} />
              <Route
                path="/collection/:collectionId"
                exact
                component={CollectionPage}
              />
              <Route path="/auth/singup" exact component={SignupPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </AnimatePresence>
        </Suspense>
        <TheFooter />
      </main>
    </BrowserRouter>
  );
}

export default App;
