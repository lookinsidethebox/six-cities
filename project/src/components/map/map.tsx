import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { PropertyType } from '../../types/Property';
import type { City } from '../../types/City';
import useMap from './useMap';

type CityMapProps = {
  offers: PropertyType[],
  selectedOffer?: PropertyType | undefined,
  city: City,
  height: number
}

function CityMap(props: CityMapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.city);

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

  useEffect(() => {
    if (map) {
      props.offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);

        marker
          .setIcon(
            offer.id === props.selectedOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, props.offers, props.selectedOffer]);

  return (
    <div
      style={{ height: `${props.height}px` }}
      ref={mapRef}
    >
    </div>
  );
}

export default CityMap;
