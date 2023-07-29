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
      <Route path="/" element={<Dashboard />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/account" element={<Account/>} />
      <Route path="/actor" element={<Actor/>} />
      <Route path="/billing-plans" element={<BillingPlan/>} />
      <Route path="/country" element={<Country/>} />
      <Route path="/director" element={<Director/>} />
      <Route path="/genres" element={<Genres/>} />
      <Route path="/writer" element={<Writer/>} />
    </Routes>
  );
}

export default App;
