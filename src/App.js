import { Fragment } from 'react';
import { publicRoutes } from '~/Routes';
import { GuestLayout } from './components/Layout/ExportLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = GuestLayout;
                    const Page = route.component;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
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
        </div>
    );
}

export default App;
