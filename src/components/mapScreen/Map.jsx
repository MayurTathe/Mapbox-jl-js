import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapHome.css'

// Import mapbox styles
import 'mapbox-gl/dist/mapbox-gl.css';
import NavBar from '../navigation/NavBar';

const Map = () => {

  const [data, setData] = useState(
    {
      title: '',
      description: '',
      coordinates: ''
    })

  useEffect(() => {
    mapboxgl.accessToken = 'Use Your API Key';

    const geojson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [73.8567, 18.5204]
          },
          'properties': {
            'title': 'Current Location',
            'description': 'Pune, Maharashtra'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [73.7898, 19.9975]
          },
          'properties': {
            'title': 'Permanent Location',
            'description': 'Nashik, Maharashtra'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [80.2707, 13.0827]
          },
          'properties': {
            'title': 'Visited Location',
            'description': 'Chennai, Tamil Nadu'
          }
        }
      ]
    };

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.5946, 12.9716],
      zoom: 6.2
    });

    map.addControl(new mapboxgl.NavigationControl());

    // add markers to map
    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map);

      el.addEventListener('click', () => {
        displayMarkerProperties(feature.properties, feature.geometry.coordinates);
      });
    }

    const displayMarkerProperties = (properties, coordinates) => {
      console.log(properties);
      setData({
        title: properties.title,
        description: properties.description,
        coordinates: formatCoordinates(coordinates)
        // ...properties,
        // name: 'value',
      })
    };

    const formatCoordinates = (coordinates) => {
      const latitude = coordinates[1].toFixed(4); // Round to 4 decimal places
      const longitude = coordinates[0].toFixed(4); // Round to 4 decimal places
      const latDirection = latitude >= 0 ? 'N' : 'S';
      const lonDirection = longitude >= 0 ? 'E' : 'W';
      return `${Math.abs(latitude)}° ${latDirection}, ${Math.abs(longitude)}° ${lonDirection}`;
    };

    // Clean up
    return () => map.remove();
  }, []);

  return <>
    <NavBar />
    <div className="container">
      <div id="map" style={{ position: 'absolute', top: '15%', width: '45%' }}></div>
      <div id="marker-properties" style={{ position: 'absolute', top: '15%', left: '50%', width: '45%', backgroundColor: '#fff', padding: '10px' }}>
        <h2>Marker Properties</h2>
        <div className="markerDetails">
          {
            data.title && (
              <>
                <p>Residence: &nbsp; {data.title}</p>
                <p>Location: &nbsp; {data.description}</p>
                <p>Coordinates: &nbsp; {data.coordinates}</p>
              </>
            )
          }
          {
            !data.title && (<p>Select the Marker on Map</p>)
          }
        </div>

      </div>
    </div>
  </>
}

export default Map;
