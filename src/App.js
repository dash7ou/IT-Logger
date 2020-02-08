import React, { useEffect, Fragment } from 'react';

// component
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModel from "./components/techs/AddTechModel";
import TechListModel from "./components/techs/TechListModal";

// Redux
import { Provider } from "react-redux";
import store from "./store/configureStore";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import './App.css';

const App = ()=> {
  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModel />
          <TechListModel />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
