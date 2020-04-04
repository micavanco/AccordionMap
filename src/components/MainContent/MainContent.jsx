import React from 'react';
import MainContentView from './MainContentView';

class MainContent extends React.Component {
    state = {
        openedSection: 'Map Section'
    };

    onChangeSection = (sectionName) => {
        const sectionNameValue = sectionName === this.state.openedSection ? '' : sectionName;
        this.setState({openedSection:sectionNameValue});
    };

    render() {
        return (
            <MainContentView onChangeSection={this.onChangeSection.bind(this)}
                             openedSection={this.state.openedSection}
            />
        )
    }
}

export default MainContent;

