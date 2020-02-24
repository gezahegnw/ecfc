import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

//import { Icon } from "leaflet";
import * as mapData from "./Data.json";
import "../../App.css";

function BibleStudyComp() {
  const [map, setMap] = React.useState(null);
  return (
      <Container fluid='md'>
      <p>
        Blessed is the one who reads aloud the words of this prophecy, and
        blessed are those who hear, and who keep what is written in it, for the
        time is near.
      </p>
      <h5>Revelation 1:3 ESV</h5>
      <hr />
  <Row>
    <Col sm={4}>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
      <th>Register</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Dr. Girma Small Group</td>
      <td>Youth small group with Dr. girma as as leader</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Helina small group</td>
      <td>Youth small group with Helen as a group leader</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dr. Samuel Teferra</td>
      <td>Small group with Dr. Samuel as a leader</td>
      <td>Register</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Jerry small group</td>
      <td>Small group </td>
      <td>Register</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Kibret small group</td>
      <td>Youth small group with Kibret as a group leader</td>
      <td>Register</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Menna small group</td>
      <td>Youth small group with Menna as a group leader</td>
      <td>Register</td>
    </tr>
  </tbody>
</Table>
    </Col>
    <Col sm={8}>
    <Map center={[38.9, -94.8]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {mapData.features.map(mapItem => (
          <Marker
            key={mapItem.properties.MAP_ID}
            position={[
              mapItem.geometry.coordinates[0],
              mapItem.geometry.coordinates[1]
            ]}
            onClick={() => {
              setMap(mapItem);
            }}
          />
        ))}
        {map && (
          <Popup
            position={[
              map.geometry.coordinates[0],
              map.geometry.coordinates[1]
            ]}
            onClose={() => {
              setMap(null);
            }}
          >
            <div>
              <h2>{map.properties.NAME}</h2>
              <p>{map.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        )}
      </Map>
    </Col>
  </Row>
</Container>      
  );
}

export default BibleStudyComp;

// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from './Marker';

//   const BibleStudyComp = (props) => {
//     const getMapOptions = (maps) => {
//       return {
//         disableDefaultUI: true,
//         mapTypeControl: true,
//         streetViewControl: true,
//         styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
//       };
//     };

//     const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
//     const [zoom, setZoom] = useState(11);

//     return (
//   // Important! Always set the container height explicitly
//   <div style={{ height: '100vh', width: '100%' }}>
//       <h1>This Bible Study Component</h1>
//       <h2>Revelation 1:3 ESV</h2>
//       <p>
//         Blessed is the one who reads aloud the words of this prophecy, and
//         blessed are those who hear, and who keep what is written in it, for the
//         time is near.
//       </p>
//       <h2>Here i need to add the MAP and locations for bible study</h2>
//       <GoogleMapReact
//           bootstrapURLKeys={{ key: {/*'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIZg7LRqXjMGy2tIb-w-ubJXgwikCZlkA&callback=initMap' */}}}
//           defaultCenter={center}
//           defaultZoom={zoom}
//           options={getMapOptions}
//         >
//           <Marker
//             lat={11.0168}
//             lng={76.9558}
//             name="My Marker"
//             color="blue"
//           />
//         </GoogleMapReact>
//     </div>
//   );
// };

// export default BibleStudyComp;
