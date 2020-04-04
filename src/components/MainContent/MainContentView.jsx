import React from "react";
import "./MainContent.scss";
import MapSection from "../MapSection/MapSection";
import TableSection from "../TableSection/TableSection";
import {Card} from "reactstrap";

const MainContentView = ({onChangeSection, openedSection, markers, onAddMarker}) => {
  return (
    <div className="main-content">
        <h1>AccordionMap</h1>
        <div aria-multiselectable={true} id="accordion" role="tablist" className="main-content__accordion">
            <Card className="main-content__accordion__card">
                <MapSection onChangeSection={onChangeSection} openedSection={openedSection} onAddMarker={onAddMarker}/>
                <TableSection onChangeSection={onChangeSection} openedSection={openedSection} markers={markers}/>
            </Card>
        </div>
    </div>
  );
};

export default MainContentView;
