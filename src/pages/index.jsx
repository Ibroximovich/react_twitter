
import Home from "./Dashboard/Home";
import Explore from "./Dashboard/Explore";
import Notifications from "./Dashboard/Notifications";
import Messages from "./Dashboard/Messages";
import Bookmarks from "./Dashboard/Bookmarks";
import Lists from "./Dashboard/Lists";
import Profile from "./Dashboard/Profile";
import More from "./Dashboard/More";
import { lazy } from "react";

 export const Login = lazy(() => new Promise((resolve) =>{
    return setTimeout(() => resolve(import("./Auth/Login")),3000)
}))

export {Home,Explore,Notifications,Messages,Bookmarks,Lists,Profile,More}