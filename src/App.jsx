import Layout from './components/Layout';
import PersistLogin from './components/PersistLogin';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Dashboard from './components/Dashboard';
import DashboardLayout from './components/DashboardLayout'; // Import the DashboardLayout
import Blogs from './components/Blogs';
import UserDetails from './components/UserDetails';
import UserDelete from './components/UserDelete';
import BlogDetails from './components/BlogDetails';
import BlogDelete from './components/BlogDelete';
import BlogCreate from './components/BlogCreate';
import BlogEdit from './components/BlogEdit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* protected routes */}
      <Route element={<PersistLogin />}>
        <Route path="/dashboard" element={<DashboardLayout />}> 
          {/* Nested routes within DashboardLayout */}
          <Route element={<RequireAuth />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="blogs" element={<Blogs />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="blogs/create" element={<BlogCreate />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="blogs/edit/:id" element={<BlogEdit />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="blogs/details/:id" element={<BlogDetails />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="blogs/delete/:id" element={<BlogDelete />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="users" element={<Users />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="users/details/:id" element={<UserDetails />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="users/delete/:id" element={<UserDelete />} />
          </Route>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
