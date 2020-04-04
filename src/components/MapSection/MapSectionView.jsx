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
            <CardHeader className="card-collapse map-section__header"
                        role="tab"
                        onClick={e => {
                            e.preventDefault();
                            onChangeSection('Map Section')
                        }}
            >
                    <a
                        aria-expanded={openedSection === 'Map Section'}
                        data-toggle="collapse"
                        data-parent="#accordion"
                        className="mb-0 panel-title collapsed"
                        href="#"
                    >
                        Map Section
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                    </a>
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
