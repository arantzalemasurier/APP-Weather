import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

interface Props {
    today: {
    city: string;
    country: string;
    date: string;
    population: number;
    }
}

const LocalInfo: React.FC<Props> = ({ today: { city, country, date, population } }) => {
return (
    <CardMedia style={{ textAlign: 'center', marginTop: '7%', marginBottom: '7%'}}>
        <Typography variant="h3" gutterBottom>
            {city}, {country}
        </Typography>
        <Typography variant="h5" gutterBottom>
            {date}
        </Typography>
        <Typography variant="h6" gutterBottom>
            Población: {population.toLocaleString()}
        </Typography>
    </CardMedia>
    );
};

export default LocalInfo;