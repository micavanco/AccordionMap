import React from "react";
import "./TableSection.scss";
import {
    CardHeader,
    CardBody,
    Collapse
} from "reactstrap";

const TableSectionView = ({onChangeSection, openedSection, markers}) => {
    return (
        <div className="table-section">
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Longitude</th>
                                <th>Latitude</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {markers.map((marker, index) => (
                                <tr key={marker._pos.x}>
                                    <td className="text-center">{index}</td>
                                    <td>{marker._lngLat.lng}</td>
                                    <td>{marker._lngLat.lat}</td>
                                    <td className="td-actions">
                                        <button type="button" rel="tooltip" data-placement="left" title="Remove item"
                                                className="btn btn-neutral btn-just-icon">
                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            </Collapse>
        </div>
    );
};

export default TableSectionView;
