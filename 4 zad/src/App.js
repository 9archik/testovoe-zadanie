import logo from "./logo.svg";
import "./App.css";
import UserItem from "./components/userList/userItem/userItem";
import { Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="/:id" element={<UserInfoPage />} />
    </Routes>
  );
}

export default App;
