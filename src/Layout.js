import { Route, Routes } from "react-router-dom";
import App from "./App";
import Admin from "./component/Admin/Admin";
import HomePage from "./component/Home/HomePage";
import ManagerUser from "./component/Admin/Content/ManagerUser";
import Dashboard from "./component/Admin/Content/Dashboard";
import Login from "./component/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./component/Auth/Register";
import ListQuiz from "./component/User/ListQuiz";
import DetailQuiz from "./component/User/DetailQuiz";
import ManageQuiz from "./component/Admin/Content/Quiz/ManageQuiz";
import Questions from "./component/Admin/Content/Question/Questions";
import PrivateRoute from "./routes/PrivateRoute";
import { Suspense } from "react";

const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">
      404. Not found data with you current URL
    </div>
  );
};

const Layout = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="users"
            element={
              <PrivateRoute>
                <ListQuiz />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManagerUser />} />
          <Route path="manage-quizzes" element={<ManageQuiz />} />
          <Route path="manage-questions" element={<Questions />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Suspense>
  );
};

export default Layout;
