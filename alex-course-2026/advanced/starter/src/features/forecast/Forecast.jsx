import { useForecastWeather } from '../../hooks/useForecastWeather';

import Loading from '../../ui/Loading';
import AppNav from './AppNav';
import ForecastList from './ForecastList';
import { useRouteLoaderData } from 'react-router';


function Forecast() {
  const position = useRouteLoaderData('root');
  const { weatherForecastList, isLoading } = useForecastWeather(position);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <AppNav />

          <ForecastList weatherForecastList={weatherForecastList} />
        </>
      )}
    </>
  );
}
export default Forecast;
