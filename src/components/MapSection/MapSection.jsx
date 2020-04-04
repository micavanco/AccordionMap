import React from 'react';
import MapSectionView from './MapSectionView';
import mapboxgl from 'mapbox-gl';
import baseUtils from "../../utils/baseUtils";

class MapSection extends React.Component {

    constructor(params) {
        super(params);

        this.Map = null;
        this.state = {
            updateMap: true
        };
    }

    componentDidMount() {
        mapboxgl.accessToken = baseUtils.mapApiAccessToken;
        this.Map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9,
            attributionControl: false
        });
        this.Map.on('click', this.onAddMarker.bind(this));
    }

    onAddMarker(e) {

        // const el = document.createElement('div');
        // el.className = 'marker';

        const marker = new mapboxgl.Marker().setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(this.Map);
        console.log(marker);
    }

    render() {
        return (
            <MapSectionView onChangeSection={this.props.onChangeSection} openedSection={this.props.openedSection}/>
        )
    }
}

export default MapSection;
