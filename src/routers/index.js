import SingUp from '~/pages/auth/Signin';
import Home from '~/pages/client/Home';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/admin/signin',
        component: SingUp,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
