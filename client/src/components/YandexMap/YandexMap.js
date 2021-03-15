import React from 'react';
import { YMaps, Map, Placemark, Polygon, FullscreenControl, TypeSelector, ZoomControl } from 'react-yandex-maps';
import './yandexmap.css';
import balloon from './balloon.png';

const geoData = [/* geaData arr */];

const YandexMap = () => (
  <div className="map-wrapper">
    <YMaps query={{ apikey: 'e6763205-24a3-4522-ae07-e547c476f586' }}>
      <Map
        defaultState={{
          center: [/* latitude, longitude */],
          zoom: 5,
        }}
        width='100%'
        height='100%'
      >
        <Placemark
          geometry={[/* latitude, longitude */]}
          options={{
            iconLayout: 'default#image',
            iconImageHref: balloon,
            iconImageSize: [22, 40],
            iconImageOffset: [-11, -40]
          }}
        />

        <Polygon
          geometry={geoData}
          options={{
            fill: false,
            strokeColor: '#3c33e3',
            strokeOpacity: 0.6,
            strokeWidth: 2,
            strokeStyle: 'solid',
          }}
        />

        <ZoomControl />

        <TypeSelector />

        <FullscreenControl />
      </Map>
    </YMaps>
  </div>
);

export default YandexMap;