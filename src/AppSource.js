import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './firebase/components/auth/login';
import Register from './firebase/components/auth/register';
import Home from './firebase/components/home';
import { AuthProvider } from './firebase/contexts/authContexts';
import Header from './firebase/components/header';

function AppSource() {

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      <AuthProvider>
        <Router>
        <Header />
          <Routes>
            {routesArray.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default AppSource;