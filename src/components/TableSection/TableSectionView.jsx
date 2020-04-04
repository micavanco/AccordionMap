import React from "react";
import "./TableSection.scss";
import {
    CardHeader,
    CardBody,
    Collapse
} from "reactstrap";

const TableSectionView = ({onChangeSection, openedSection, markers, onMarkerRemove}) => {
    return (
        <div className="table-section">
            <CardHeader className="card-collapse table-section__header"
                        role="tab"
                        onClick={e => {
                            e.preventDefault();
                            onChangeSection('Table Section')
                        }}
            >
                    <a
                        aria-expanded={openedSection === 'Table Section'}
                        data-toggle="collapse"
                        data-parent="#accordion"
                        className="mb-0 panel-title collapsed"
                        href="#"
                    >
                        Table Section
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                    </a>
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
                                    <td>{marker._lngLat.lng.toFixed(5)}</td>
                                    <td>{marker._lngLat.lat.toFixed(5)}</td>
                                    <td className="td-actions text-right">
                                        <button type="button"
                                                rel="tooltip"
                                                data-placement="right"
                                                title="Remove marker"
                                                className="btn btn-neutral btn-just-icon"
                                                onClick={() => onMarkerRemove(marker)}
                                        >
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
