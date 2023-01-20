//Layouts
import { DashboardFrame, HeaderAndFooter, HeaderOnly, ModDashboardFrame } from '~/components/Layout';

//Pages
import AccountSetting from '~/pages/AccountSetting';
import BookShow from '~/pages/BookShow';
import BooksManagement from '~/pages/BooksManagement';
import BooksManagementMod from '~/pages/BooksManagementMod';
import CategoryManagement from '~/pages/CategoryManagement';
import ChangePassword from '~/pages/ChangePassword';
import CommentManagement from '~/pages/CommentManagement';
import CommentManagementMod from '~/pages/CommentManagementMod';
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
import UserInfo from '~/pages/UserInfo';
import UserManagement from '~/pages/UserManagement';
import UserManagementMod from '~/pages/UserManagementMod';
import ViewMore from '~/pages/ViewMore';

//Pubic Routes
const publicRoutes = [
  { path: '/', component: Home }, // done
  { path: '/news', component: News, layout: HeaderAndFooter }, //done default
  { path: '/shownews', component: ShowNews, layout: HeaderAndFooter }, //done default
  { path: '/changepassword', component: ChangePassword, layout: HeaderAndFooter },
  { path: '/profile', component: Profile, layout: HeaderAndFooter }, // done
  { path: '/user/:id', component: UserInfo, layout: HeaderAndFooter }, // done
  { path: '/login', component: Login, layout: HeaderOnly }, // done
  { path: '/register', component: Register, layout: HeaderOnly }, // done
  { path: '/mybook', component: MyBook, layout: HeaderAndFooter }, // done
  { path: '/mybook/:list', component: MyBook, layout: HeaderAndFooter }, //done
  { path: '/accountsetting', component: AccountSetting, layout: HeaderAndFooter }, // done
  { path: '/genres', component: Genres, layout: HeaderAndFooter }, // done
  { path: '/genre/:code', component: Genre, layout: HeaderAndFooter }, // done
  { path: '/viewmore', component: ViewMore, layout: HeaderAndFooter },
  { path: '/viewmore/:list', component: ViewMore, layout: HeaderAndFooter },
  { path: '/book/:id', component: BookShow, layout: HeaderAndFooter }, // done
  { path: '/review/:id', component: Review, layout: HeaderAndFooter }, // done
  { path: '/dashboardframe', component: DashboardFrame, layout: null },
  { path: '/user', component: UserManagement, layout: DashboardFrame },
  { path: '/mod', component: ModManagement, layout: DashboardFrame },
  { path: '/books', component: BooksManagement, layout: DashboardFrame },
  { path: '/category', component: CategoryManagement, layout: DashboardFrame },
  { path: '/comment', component: CommentManagement, layout: DashboardFrame },
  { path: '/mcomment', component: CommentManagementMod, layout: ModDashboardFrame },
  { path: '/muser', component: UserManagementMod, layout: ModDashboardFrame },
  { path: '/mbooks', component: BooksManagementMod, layout: ModDashboardFrame },
  { path: '/statistic', component: StatisticManagement, layout: DashboardFrame }, // done
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
