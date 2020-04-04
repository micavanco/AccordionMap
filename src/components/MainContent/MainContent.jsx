import React from 'react';
import MainContentView from './MainContentView';

class MainContent extends React.Component {
    state = {
        openedSection: ""
    };

    onChangeSection = (sectionName) => {
        this.setState({openedSection:sectionName});
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

