import config from '~/configs';
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import PageNotFound from '~/pages/PageNotFound';
import Product from '~/pages/Product';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.pageNotFound, component: PageNotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
