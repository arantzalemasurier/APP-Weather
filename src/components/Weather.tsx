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

const Card = styled.div`
  padding: 20px;
`;

const Section = styled(Card)`
  height: 100%;
  padding-top: 5px;
  background-color: rgba(5, 4, 2, 0.1);
`;

const Weather: React.FC<WeatherProps> = ({ today, weekly }) => {
  return (
    <Root>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Section>
            <LocalInfo today={today} />
          </Section>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Section>
            <Today today={today} />
          </Section>
        </Grid>
        <Grid item xs={12}>
          <Section>
            <Weekly weekData={weekly} />
          </Section>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Weather;
