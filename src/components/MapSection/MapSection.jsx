import React from 'react';
import MapSectionView from './MapSectionView';

class MapSection extends React.Component {

    render() {
        return (
            <MapSectionView onChangeSection={this.props.onChangeSection} openedSection={this.props.openedSection}/>
        )
    }
}

export default MapSection;
