import { Route, Routes } from "react-router-dom";
import { Header } from "./compoments/header";
import { Posts } from "./pages/home";
import { PostDescription } from "./pages/postDescription";
import { User } from "./pages/user";
import { UserDescription } from "./pages/userDescription";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Posts />} />
        <Route path="/" element={<Posts />} />
        <Route path="/postDescription/:id" element={<PostDescription />} />
        <Route path="/user" element={<User />} />
        <Route path="/userDetails/:id" element={<UserDescription />} />
      </Routes>
    </>
  );
}

export default App;
