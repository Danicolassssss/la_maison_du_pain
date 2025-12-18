'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const position: LatLngExpression = [46.227638, 5.139638];

export default function ContactMap() {
    return (
        <div className="w-full h-64 md:h-80">
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
                <Marker position={position} />
            </MapContainer>
        </div>
    );
}
