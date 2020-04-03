import React from "react";
import "./MainContent.scss";
import MapSection from "../MapSection/MapSection";
import TableSection from "../TableSection/TableSection";

const MainContentView = props => {
  return (
    <div className="main-content">
        <h1>AccordionMap</h1>
        <div id="acordeon">
            <div aria-multiselectable={true} id="accordion" role="tablist">
                <MapSection/>
                <TableSection/>
            </div>
        </div>
    </div>
  );
};

export default MainContentView;
