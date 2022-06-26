import '~/App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routers';
import LayoutClient from './components/layouts/client/LayoutClient';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || LayoutClient;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </main>
        </div>
    );
}

export default App;
