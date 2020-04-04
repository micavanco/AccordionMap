import React from "react";
import "./MapSection.scss";
import {
    CardHeader,
    CardBody,
    Collapse
} from "reactstrap";

const MapSectionView = ({onChangeSection, openedSection}) => {
    return (
        <div className="map-section">
            <CardHeader className="card-collapse" id="headingOne" role="tab">
                <h5 className="mb-0 panel-title">
                    <a
                        aria-expanded={openedSection === 'Map Section'}
                        className="collapsed"
                        data-parent="#accordion"
                        href="#"
                        id="collapseOne"
                        onClick={e => {
                            e.preventDefault();
                            onChangeSection('Map Section')
                        }}
                    >
                        Map Section{" "}
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse isOpen={openedSection === 'Map Section'}>
                <CardBody className="map-section__card">
                    <div id="map"></div>
                </CardBody>
            </Collapse>
        </div>
    );
};

export default MapSectionView;
