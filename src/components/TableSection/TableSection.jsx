import React from 'react';
import TableSectionView from './TableSectionView';

class TableSection extends React.Component {

    render() {
        return (
            <TableSectionView onChangeSection={this.props.onChangeSection} openedSection={this.props.openedSection}/>
        )
    }
}

export default TableSection;
