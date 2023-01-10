//Layouts
import { DashboardFrame, HeaderAndFooter, HeaderOnly } from '~/components/Layout';

//Pages
import AccountSetting from '~/pages/AccountSetting';
import BookShow from '~/pages/BookShow';
import BooksManagement from '~/pages/BooksManagement';
import CategoryManagement from '~/pages/CategoryManagement';
import ChangePassword from '~/pages/ChangePassword';
import CommentManagement from '~/pages/CommentManagement';
import Genre from '~/pages/Genre';
import Genres from '~/pages/Genres';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ModManagement from '~/pages/ModManagement';
import MyBook from '~/pages/MyBook';
import News from '~/pages/News';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import Review from '~/pages/Review';
import ShowNews from '~/pages/ShowNews';
import StatisticManagement from '~/pages/Statistic';
import UserManagement from '~/pages/UserManagement';

//Pubic Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/news', component: News, layout: HeaderAndFooter },
  { path: '/shownews', component: ShowNews, layout: HeaderAndFooter },
  { path: '/changepassword', component: ChangePassword, layout: HeaderAndFooter },
  { path: '/profile', component: Profile, layout: HeaderAndFooter },
  { path: '/login', component: Login, layout: HeaderOnly },
  { path: '/register', component: Register, layout: HeaderOnly },
  { path: '/mybook/:list', component: MyBook, layout: HeaderAndFooter },
  { path: '/accountsetting', component: AccountSetting, layout: HeaderAndFooter },
  { path: '/genres', component: Genres, layout: HeaderAndFooter },
  { path: '/genre/:code', component: Genre, layout: HeaderAndFooter },
  { path: '/book/:id', component: BookShow, layout: HeaderAndFooter },
  { path: '/review/:id', component: Review, layout: HeaderAndFooter },
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
