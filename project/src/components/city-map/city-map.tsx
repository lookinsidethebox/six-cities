import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import type { PropertyType } from '../../types/Property';
import type { Location } from '../../types/City';

export type MapProps = {
  offers: PropertyType[],
  selectedOffer?: PropertyType | undefined,
  centerLocation: Location,
  height: number
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [20, 30],
  iconAnchor: [20, 30]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [20, 30],
  iconAnchor: [20, 30]
});

const DEFAULT_ZOOM = 13;

function CityMap(props: MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.centerLocation, DEFAULT_ZOOM);

  useEffect(() => {
    if (map) {
      props.offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        map.setView([props.centerLocation.latitude, props.centerLocation.longitude], DEFAULT_ZOOM);

        marker
          .setIcon(
            offer.id === props.selectedOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, props.offers, props.selectedOffer, props.centerLocation]);

  return (
    <div
      style={{ height: `${props.height}px` }}
      ref={mapRef}
    >
    </div>
  );
}

export default CityMap;
