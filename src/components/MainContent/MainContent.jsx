import React from 'react';
import MainContentView from './MainContentView';

class MainContent extends React.Component {
    state = {
        openedSection: 'Map Section',
        markers: []
    };

    onChangeSection = sectionName => {
        const sectionNameValue = sectionName === this.state.openedSection ? '' : sectionName;
        this.setState({openedSection:sectionNameValue});
    };

    onAddMarker = marker => {
        const markers = [...this.state.markers, marker];
        this.setState({markers});
    };

    onMarkerRemove = marker => {
        const markers = this.state.markers.filter(element =>
            element._pos.x !== marker._pos.x && element._pos.y !== marker._pos.y
        );
        marker.remove();
        this.setState({markers});
    };

    render() {
        return (
            <MainContentView onChangeSection={this.onChangeSection.bind(this)}
                             openedSection={this.state.openedSection}
                             markers={this.state.markers}
                             onAddMarker={this.onAddMarker.bind(this)}
                             onMarkerRemove={this.onMarkerRemove.bind(this)}
            />
        )
    }
}

export default MainContent;

