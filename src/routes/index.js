//Layouts
import { HeaderOnly } from '~/components/Layout';
import { HeaderAndFooter } from '~/components/Layout';
// import { HeaderAccount } from '~/components/Layout'

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import BookShow from '~/pages/BookShow';

//Pubic Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
    { path: '/bookshow', component: BookShow, layout: HeaderAndFooter },
    { path: '/search', component: Search, layout: null },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
