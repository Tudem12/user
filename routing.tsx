import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/edit-user/:id" element={<EditUserPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
