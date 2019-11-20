import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { intialState } from "./reducers/reducer";

const App = () => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={intialState.car} />
        <AddedFeatures car={intialState.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={intialState.additionalFeatures}
        />
        <Total
          car={intialState.car}
          additionalPrice={intialState.additionalPrice}
        />
      </div>
    </div>
  );
};

export default App;
