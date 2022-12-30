import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AboutMe from '../pages/AboutMe';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import RootLayout from '../components/RootLayout';

const router = createHashRouter(
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