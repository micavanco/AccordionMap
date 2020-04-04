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

    };

    render() {
        return (
            <MainContentView onChangeSection={this.onChangeSection.bind(this)}
                             openedSection={this.state.openedSection}
                             markers={this.state.markers}
                             onAddMarker={this.onAddMarker.bind(this)}
            />
        )
    }
}

export default MainContent;

