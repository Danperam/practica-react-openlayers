import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, WMSTileLayer } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { version } from 'react';


function Mapa() {
  const position = [19.432608, -99.133209]
  return (
    <div>
        <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CustomMarker id={1} position={[19.432608, -99.133209]} title="Centro Histórico de la CDMX" />
            <WMSTileLayer
            url="http://localhost:8080/geoserver/curso_gis/wms"
            params={{format: 'image/png', 
                     layers: 'curso_gis:area_estudio_cdmx',
                    transparent: true,
                    version: '1.1.0',
                    attribution: 'CDMX'}}
            />
        </MapContainer>
    </div>
  );
}

function CustomMarker({id, position, title}) {
    return (
        <Marker key={id} position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>{title}</Popup>
        </Marker>
    )
}

export default Mapa;
