import { Routes, Route } from "react-router-dom";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Movie from "./Containers/Movie/Movie";
import LayoutAuth from "./Containers/Auth/LayoutAuth";
import Login from "./Containers/Auth/Login";
import Actor from "./Containers/Actor/Actor";
import BillingPlan from "./Containers/BillingPlan/BillingPlan";
import Country from "./Containers/Country/Country";
import Director from "./Containers/Director/Director";
import Genres from "./Containers/Genres/Genres";
import Writer from "./Containers/Writer/Writer";
import Account from "./Containers/Account/Account";

function App() {
  return (
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/account" element={<Account/>} />
    </Routes>
  );
}

export default App;
