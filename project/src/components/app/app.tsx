import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  placesCount: number;
  placeName: string;
  cities: string[];
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      placesCount={props.placesCount}
      placeName={props.placeName}
      cities={props.cities}
    />
  );
}

export default App;
