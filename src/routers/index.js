import SingUp from '~/pages/auth/Signup';
import Home from '~/pages/client/Home';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signup',
        component: SingUp,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
