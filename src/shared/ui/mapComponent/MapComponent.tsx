
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import 'ol/ol.css';

import { useEffect } from 'react';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Style, Circle as CircleStyle, Fill } from 'ol/style';

interface MapProps {
    points: number[],
    color?: string,
    zoom?: number,
    pointRaduis?: number,

}

const MapComponent = ({ points, color = '#f00000', zoom = 13, pointRaduis = 10 }: MapProps) => {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource(),
                }),
            ],
            view: new View({
                center: fromLonLat(points),
                zoom,
            }),
        });

        const marker = new Feature({
            geometry: new Point(fromLonLat(points)),
        });

        marker.setStyle(new Style({
            image: new CircleStyle({
                radius: pointRaduis,
                fill: new Fill({ color })
            }),
        }));

        const vectorLayer = map.getLayers().item(1) as VectorLayer;

        const source = vectorLayer.getSource();
        if (source) source.addFeature(marker);

        return () => map.setTarget(undefined);
    }, [points]);

    return <div id="map" />;
};

export default MapComponent;