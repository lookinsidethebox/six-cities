import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import type { PropertyType, Offers } from '../../types/Property';
import type { City } from '../../types/City';

export type MapProps = {
  offers: Offers,
  selectedOffer?: PropertyType | undefined,
  city: City,
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

function CityMap(props: MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.city.location);

  useEffect(() => {
    if (map) {
      props.offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        map.setView([props.city.location.latitude, props.city.location.longitude], props.city.location.zoom);

        marker
          .setIcon(
            offer.id === props.selectedOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, props.offers, props.selectedOffer, props.city]);

  return (
    <div
      style={{ height: `${props.height}px` }}
      ref={mapRef}
    >
    </div>
  );
}

export default CityMap;
