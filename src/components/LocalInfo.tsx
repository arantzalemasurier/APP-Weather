import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { CardMedia } from '@material-ui/core';

interface Props {
  today: {
    city: string;
    country: string;
    date: string;
    population: number;
  };
}

const StyledCardMedia = styled(CardMedia)`
  text-align: center;
  margin-top: 7%;
  margin-bottom: 7%;
`;

const LocalInfo: React.FC<Props> = ({ today: { city, country, date, population } }) => {
  return (
    <StyledCardMedia>
      <Typography variant="h3" gutterBottom>
        {city}, {country}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {date}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Población: {population.toLocaleString()}
      </Typography>
    </StyledCardMedia>
  );
};

export default LocalInfo;