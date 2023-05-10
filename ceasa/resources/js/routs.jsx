import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowProducts from './Pages/reports/WeeklyReport1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


const router = routs ([
    {
        path: '/',
        element: <AuthenticatedLayout />,
        children :{
            path: '/report',
            element: <ShowProducts/>
        }
    }


])

export default router;

