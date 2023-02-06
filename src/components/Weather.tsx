import React from 'react';
import Grid from '@material-ui/core/Grid';
import LocalInfo from './LocalInfo';
import Today from './Today';
import Weekly from './Weekly';
import styled from "styled-components";

interface WeatherProps {
  today: any,
  weekly: any
}

const Root = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 60px;
  padding: 15px;
`;

const WeatherCard = styled.div`
  padding: 20px;
  height: 100%;
  padding-top: 5px;
  background-color: rgba(5, 4, 2, 0.1);
`;

const Weather: React.FC<WeatherProps> = ({ today, weekly }) => {
  return (
    <Root>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <WeatherCard>
            <LocalInfo today={today} />
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <WeatherCard>
            <Today today={today} />
          </WeatherCard>
        </Grid>
        <Grid item xs={12}>
          <WeatherCard>
            <Weekly weekData={weekly} />
          </WeatherCard>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Weather;
