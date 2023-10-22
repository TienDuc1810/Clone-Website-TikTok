import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";
import Upload from "~/Pages/Upload";
import { UserLayout } from "~/components/Layout/ExportLayout";


//Guest component
export const publicRoutes = [
    {path:'/', component: Home},
    {path:'/following', component: Following},
    {path:'/profile', component: Profile},
    {path:'/upload', component: Upload, layout: UserLayout}
];

//User component
export const privateRoutes = [
    {path:'/upload', component: Upload, layout: null} 
];