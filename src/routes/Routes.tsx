import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import RootLayout from '../components/RootLayout';
import Profile from '../pages/Profile';
import AboutMe from '../pages/AboutMe';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<NotFound />}
    >
      <Route errorElement={<NotFound />}>
        <Route index element={<Profile />} />
        <Route
          path="/aboutMe"
          element={<AboutMe />}
        />
        <Route
          path="/contact"
          element={<Contacts />}
        />
        <Route
          path="/projects"
          element={<NotFound />}
        />
      </Route>
    </Route>
  )
);

export default router;