import { Component } from 'react';
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
  margin: 7% auto;
`;

class LocalInfo extends Component<Props> {
  render() {
    const { city, country, date, population } = this.props.today;
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
  }
}

export default LocalInfo;