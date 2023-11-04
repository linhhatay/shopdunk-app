import config from '~/configs';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import CustomerInfo from '~/pages/Customer/CustomerInfo';
import ForgotPassword from '~/pages/ForgotPassword';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Order from '~/pages/Order';
import OrderReturn from '~/pages/OrderReturn';
import PageNotFound from '~/pages/PageNotFound';
import Product from '~/pages/Product';
import ResetPassword from '~/pages/ResetPassword';
import Signup from '~/pages/Signup';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.pageNotFound, component: PageNotFound },
    { path: config.routes.register, component: Signup },
    { path: config.routes.login, component: Login },
    { path: config.routes.customerInfo, component: CustomerInfo },
    { path: config.routes.category, component: Category },
    { path: config.routes.orderDetails, component: Order },
    { path: config.routes.forgotPassword, component: ForgotPassword },
    { path: config.routes.resetPassword, component: ResetPassword },
    { path: config.routes.orderReturns, component: OrderReturn },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
