//Layouts
import { HeaderOnly } from '~/components/Layout';
import { HeaderAndFooter } from '~/components/Layout';
// import { HeaderAccount } from '~/components/Layout'
import { AccountLayout } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import ChangePassword from '~/pages/ChangePassword';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import BookShow from '~/pages/BookShow';
import MyBook from '~/pages/MyBook';
import AccountSetting from '~/pages/AccountSetting';
import Profile from '~/pages/Profile';
import News from '~/pages/News';
import ShowNews from '~/pages/ShowNews';
import Genres from '~/pages/Genres';
import Genre from '~/pages/Genre';

//Pubic Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/news', component: News, layout: HeaderAndFooter },
    { path: '/shownews', component: ShowNews, layout: HeaderAndFooter },
    { path: '/changepassword', component: ChangePassword, layout: AccountLayout },
    { path: '/profile', component: Profile, layout: AccountLayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
    { path: '/mybook', component: MyBook, layout: AccountLayout },
    { path: '/accountsetting', component: AccountSetting, layout: AccountLayout },
    { path: '/genres', component: Genres, layout: HeaderAndFooter },
    { path: '/genre', component: Genre, layout: HeaderAndFooter },
    { path: '/bookshow', component: BookShow, layout: HeaderAndFooter },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
