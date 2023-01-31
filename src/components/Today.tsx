import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
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
    }
}

const Main = styled.div`
  overflow: auto;
  padding: 5px;
`;

const TextLeft = styled.div`
  float: left;
`;

const TextRight = styled.div`
  float: right;
`;

const Span = styled.span`
  font-weight: bold;
`;

const WeatherIcon = styled.img`
  width: 90px;
  height: 90px;
  top: 0;
`;

const UnitIcon = styled.img`
  width: 22px;
  height: 22px;
  align-self: center;
  margin-right: 4px;
  margin-left: 20px;
`;

const UnitIcon1 = styled(UnitIcon)`
  font-size: 15px;
`;

const Today: React.FC<TodayProps> = ({ today }) => {
    return (
      <CardContent>
        <Main>
          <TextLeft>
            <WeatherIcon src={`https://openweathermap.org/img/w/${today.icon}.png`} alt={today.icon} />
            <Typography variant="h3" gutterBottom >
              {today.temp}°C
            </Typography>
            <Typography variant="h6" gutterBottom>
              {today.main}, {today.desc}
            </Typography>
          </TextLeft>
          <TextRight>   
            <Typography variant="h6" gutterBottom>
              <UnitIcon src={'http://openweathermap.org/img/wn/01d@2x.png'} alt={"Logo"} /> {today.sunrise} A.M.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <UnitIcon src={`http://openweathermap.org/img/wn/01n@2x.png`} alt="Logo" /> {today.sunset} P.M.
            </Typography>
          </TextRight>
        </Main>
        <div>
          <UnitIcon1 src={`http://openweathermap.org/img/wn/50d@2x.png`} alt="Logo" />
          <Span>{today.pressure} hPa</Span>
          <UnitIcon src={`http://openweathermap.org/img/wn/13d@2x.png`} alt="Logo" />
          <Span>{today.humidity} %</Span>
          <UnitIcon src={`http://openweathermap.org/img/wn/03d@2x.png`} alt="Logo" />
          <Span>{today.wind} m/s N</Span>
        </div>
      </CardContent>    
    );
  };
  
  export default Today;