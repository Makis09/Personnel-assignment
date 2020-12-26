import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import HomePage from "./views/Homepage";
import DetailPage from "./views/DetailPage";
import getData from "./utils/fetch";
import "./utils/fontawesome";
import usePrevious from "./utils/usePrevious";
import Spinner from "./components/Spinner/Spinner";

function App(props) {
  const [data, setData] = useState();

  const [singlePizza, setSinglePizza] = useState();

  const [activeFilters, setActiveFilters] = useState();

  const [query, setQuery] = useState("");

  const [activePage, setActivePage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const activeFiltersRef = usePrevious(activeFilters);

  const location = props.location;

  //Control items shown per page by changing this
  const itemsPerPage = 5;

  const displayedItems = (activePage - 1) * itemsPerPage;

  //Check if url or query changed and fetch data
  useEffect(() => {
    if (location.pathname === "/") {
      const fullUrl = `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=pizzas&${query}json=true`;
      const fetchData = async () => {
        const result = await getData(fullUrl);
        setData(result);
        setIsLoading(false);
      };
      fetchData();
    } else if (location.pathname === "/pizza") {
      setIsLoading(true);
      const id = location.hash.substring(1);
      const fetchData = async () => {
        const result = await getData(
          `https://world.openfoodfacts.org/api/v0/product/${id}.json`
        );
        setSinglePizza(result);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [location, query]);

  //Update query based on new active filters, then the other useEffect can fetch
  useEffect(() => {
    if (activeFilters !== activeFiltersRef) {
      let updatedQuery = "";
      for (const [index, value] of activeFilters.entries()) {
        updatedQuery += `tagtype_${index + 1}=ingredients&tag_contains_${
          index + 1
        }=contains&tag_${index + 1}=${value}&`;
      }
      setQuery(updatedQuery);
      setIsLoading(true);
      // if (window.innerWidth < 700) {
      //   // scrollToTop();
      // }
    }
  }, [activeFilters, activeFiltersRef]);

  //When filter changes, reset the active page to 1 and update active filters state
  const filtersChanged = (option, checked) => {
    if (checked) {
      const updatedActiveFIlters = activeFilters
        ? [...activeFilters, option]
        : [option];
      setActiveFilters(updatedActiveFIlters);
    } else {
      const updatedActiveFIlters = [...activeFilters];
      updatedActiveFIlters.splice(updatedActiveFIlters.indexOf(option), 1);
      setActiveFilters(updatedActiveFIlters);
    }
    setActivePage(1);
  };

  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/pizza">
          {isLoading ? <Spinner /> : <DetailPage data={singlePizza} />}
        </Route>
        <Route exact path="/">
          <HomePage
            data={data}
            filtersChanged={filtersChanged}
            displayedItems={displayedItems}
            activeFilters={activeFilters}
            pagination={{
              activePage: activePage,
              data: data,
              itemsPerPage: itemsPerPage,
            }}
            setPage={setActivePage}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
