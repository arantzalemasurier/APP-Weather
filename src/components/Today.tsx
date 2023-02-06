import React from 'react';
import { Typography, CardContent } from '@material-ui/core';
import styled from 'styled-components';

interface TodayProps {
  today: {
    temp: number;
    main: string;
    esc: string;
    con: string;
    sunrise: string;
    sunset: string;
    pressure: number;
    humidity: number;
    wind: number;
    icon: string;
    desc: string;
  };
}

const Main = styled.div`
  display: flex;
  padding: 5px;
`;

const Text = styled.div`
  text-align: center;
  width: 50%;
`;

const WeatherIcon = styled.img`
  width: 90px;
  height: 90px;
`;

const UnitIcon = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 4px 0 20px;
`;

const UnitIcon1 = styled(UnitIcon)`
  font-size: 15px;
`;

const Today: React.FC<TodayProps> = ({ today }) => {
  return (
    <CardContent>
      <Main>
        <Text>
          <WeatherIcon src={`https://openweathermap.org/img/w/${today.icon}.png`} alt={today.icon} />
          <Typography variant="h3" gutterBottom>
            {today.temp}°C
          </Typography>
          <Typography variant="h6" gutterBottom>
            {today.main}, {today.desc}
          </Typography>
        </Text>
        <Text>
          <Typography variant="h6" gutterBottom>
            <UnitIcon src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Logo" /> {today.sunrise} A.M.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <UnitIcon src={`http://openweathermap.org/img/wn/01n@2x.png`} alt="Logo" /> {today.sunset} P.M.
          </Typography>
        </Text>
      </Main>
      <div>
        <UnitIcon1 src={`http://openweathermap.org/img/wn/50d@2x.png`} alt="Logo" />
        <span>{today.pressure} hPa</span>
        <UnitIcon src={`http://openweathermap.org/img/wn/13d@2x.png`} alt="Logo" />
        <span>{today.humidity} %</span>
        <UnitIcon src={`http://openweathermap.org/img/wn/03d@2x.png`} alt="Logo" />
        <span>{today.wind} m/s N</span>
      </div>
    </CardContent>
  );
};

export default Today;
