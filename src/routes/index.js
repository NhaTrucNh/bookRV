//Layouts
import { HeaderOnly } from '~/components/Layout';
import { HeaderAndFooter } from '~/components/Layout';
import { AccountLayout } from '~/components/Layout';
import { DashboardFrame } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import ChangePassword from '~/pages/ChangePassword';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import BookShow from '~/pages/BookShow';
import Review from '~/pages/Review';
import MyBook from '~/pages/MyBook';
import AccountSetting from '~/pages/AccountSetting';
import Profile from '~/pages/Profile';
import News from '~/pages/News';
import ShowNews from '~/pages/ShowNews';
import Genres from '~/pages/Genres';
import Genre from '~/pages/Genre';
import UserManagement from '~/pages/UserManagement';
import ModManagement from '~/pages/ModManagement';
import BooksManagement from '~/pages/BooksManagement';
import CategoryManagement from '~/pages/CategoryManagement';
import CommentManagement from '~/pages/CommentManagement';
import StatisticManagement from '~/pages/Statistic';

//Pubic Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/news', component: News, layout: HeaderAndFooter },
    { path: '/shownews', component: ShowNews, layout: HeaderAndFooter },
    { path: '/changepassword', component: ChangePassword, layout: AccountLayout },
    { path: '/profile', component: Profile, layout: AccountLayout },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
    { path: '/mybook', component: MyBook, layout: AccountLayout },
    { path: '/accountsetting', component: AccountSetting, layout: AccountLayout },
    { path: '/genres', component: Genres, layout: HeaderAndFooter },
    { path: '/genre', component: Genre, layout: HeaderAndFooter },
    { path: '/bookshow', component: BookShow, layout: HeaderAndFooter },
    { path: '/review', component: Review, layout: AccountLayout },
    { path: '/dashboardframe', component: DashboardFrame, layout: null },
    { path: '/user', component: UserManagement, layout: DashboardFrame },
    { path: '/mod', component: ModManagement, layout: DashboardFrame },
    { path: '/books', component: BooksManagement, layout: DashboardFrame },
    { path: '/category', component: CategoryManagement, layout: DashboardFrame },
    { path: '/comment', component: CommentManagement, layout: DashboardFrame },
    { path: '/statistic', component: StatisticManagement, layout: DashboardFrame },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
