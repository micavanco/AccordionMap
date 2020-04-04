import React from "react";
import "./TableSection.scss";
import {
    CardHeader,
    CardBody,
    Collapse
} from "reactstrap";

const TableSectionView = ({onChangeSection, openedSection}) => {
    return (
        <div>
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
                            onChangeSection('Table Section')
                        }}
                    >
                        Table Section{" "}
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse isOpen={openedSection === 'Table Section'}>
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
        </div>
    );
};

export default TableSectionView;
