import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };
        checkAuth();
        window.addEventListener('storage', checkAuth);
        return () => {
            window.removeEventListener('storage', checkAuth);
        };
    }, []);
    if (isAuthenticated === null) return <p>Carregando...</p>;
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
