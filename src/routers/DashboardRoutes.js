import { NavBar } from "../Components/ui/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import MarvelScreen from "../Components/marvel/marvelScreen";
import HeroScreen from "../Components/heroes/HeroScreen";
import DcScreen from "../Components/dc/DcScreen";
import SearchScreen from "../Components/search/SearchScreen";
const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heoreId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
