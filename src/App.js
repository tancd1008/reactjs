import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routers';

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </main>
        </div>
    );
}

export default App;
