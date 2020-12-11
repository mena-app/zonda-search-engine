import React, { useContext } from "react";

//Librería de Searchkit
import { TopBar } from "searchkit";

// services
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../services/GlobalContext";

const TopBarHeader = () => {
  const state = useContext(GlobalStateContext);
  return (
    <TopBar
      className={
        state.show
          ? "topbar__margin  topbar__margin__true"
          : "topbar__margin  topbar__margin__false"
      }
    >
      <div className="my-logo">
        <div className="zonda">ZONDA Order Search Engine</div>
        <p className="wip">WIP</p>
      </div>
    </TopBar>
  );
};

export default TopBarHeader;