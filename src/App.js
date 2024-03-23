import { Provider, useSelector } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Premium from './Components/Home-Component/Premium';
import LoginForm from "./Components/Login-Signup-Component/Login"
import SignUpForm from "./Components/Login-Signup-Component/SignUp"
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import appStore from './utils/appStore';
import MusicHome from './Components/Music-Component/MusicHome';
import CategoriesPlayListItem from './Components/Music-Component/CategoriesPlayList';
import CategoryItemId from './Components/Music-Component/CategoryItemId';
import SearchMusicAlbum from './Components/Music-Component/SearchMusicAlbum';
import PremiumPlan from './Components/Music-Component/PremiumPlan';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/login",
      element: <LoginForm />
    },
    {
      path: "/SignUp",
      element: <SignUpForm />
    },
    {
      path: "/premium",
      element: <Premium />
    },
    {
      path: "/home",
      element: <MusicHome />
    },
    {
      path: "/:categoryName",
      element: <CategoriesPlayListItem />
    },
    {
      path: "/track/:trackId",
      element: <CategoryItemId />
    },
    {
      path: "/albums/:albumId",
      element: <SearchMusicAlbum />
    },
    {
      path:"/plan",
      element:<PremiumPlan/>
    }
  ])

  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
