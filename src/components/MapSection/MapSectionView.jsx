import React from "react";
import "./MapSection.scss";
import {
    Card,
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";

const MapSectionView = props => {
    return (
        <Card className="no-transition">
            <CardHeader className="card-collapse" id="headingOne" role="tab">
                <h5 className="mb-0 panel-title">
                    <a
                        // aria-expanded={collapses.includes(1)}
                        className="collapsed"
                        data-parent="#accordion"
                        href="#pablo"
                        id="collapseOne"
                        // onClick={e => {
                        //     e.preventDefault();
                        //     changeCollapse(1);
                        // }}
                    >
                        Default Collapsible Item 1{" "}
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse>
                <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore wes anderson cred nesciunt sapiente ea proident.
                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you
                    probably haven't heard of them accusamus labore sustainable
                    VHS.
                </CardBody>
            </Collapse>
        </Card>
    );
};

export default MapSectionView;
