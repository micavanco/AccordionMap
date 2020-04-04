import React from 'react';
import TableSectionView from './TableSectionView';

class TableSection extends React.Component {

    render() {
        return (
            <TableSectionView onChangeSection={this.props.onChangeSection}
                              openedSection={this.props.openedSection}
                              markers={this.props.markers}
                              onMarkerRemove={this.props.onMarkerRemove}
            />
        )
    }
}

export default TableSection;
