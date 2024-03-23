import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/userSlice";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAccessToken } from "../../utils/accessTokenSlice";
import { UseMusicCategoriesData } from "../../Custom-hooks/useMusicCategoriesData";
import HeaderMusicSync from "./MusicSyncHeader";
import SideBarComponent from "./SideBarComponent";
import Player from "./Player";

const MusicHome = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  UseMusicCategoriesData();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,checking authentication
        const { uid, email, displayName } = user;

        dispatch(
          addUser(
            {
              uid: uid,
              email: email,
              displayName: displayName
            }));

        getToken();

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);


  const getToken = () => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.localStorage.setItem("token", token);

    }
    dispatch(addAccessToken(token));

  }

  return (
    <>
      <div className="bg-black text-white">
          <div className="bg-black text-white h-24">
          <HeaderMusicSync/>
          </div>
          <SideBarComponent/>   
        
      </div>
 

    </>
  );
}

export default MusicHome;