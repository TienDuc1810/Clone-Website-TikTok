import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import { OnlyHeaderLayout } from '~/components/Layout/ExportLayout';

//Guest component
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: OnlyHeaderLayout },
];

// Only Header component
// export const privateRoutes = [
//     {path:'/upload', component: Upload, layout: OnlyHeaderLayout}
// ];
