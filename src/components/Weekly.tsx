import React from 'react';
import styled from 'styled-components';

interface Props {
  weekData: any[];
}

const Root = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

const ImageListItem = styled.li`
  width: 50%;
  text-align: center;
  border: 1px groove;
  min-width: 185px;
  list-style: none;
`;

const WeatherIcon = styled.img`
  width: 62px;
  height: 62px;
  top: 0;
  transform: translateY(0%);
  left: 0;
`;

const Info = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

const Title = styled(Info)`
  text-align: center;
`;

const Subtitle1 = styled.p`
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: inherit;
`;

const Subtitle2 = styled(Subtitle1)`
  color: #bb0043;
  font-size: 21px;
`;

const Weekly: React.FC<Props> = ({ weekData }) => {
  return (
    <Root>
      <ImageList>
        {weekData.map((data) => (
          <ImageListItem key={data.key}>
            {data.key === 0 ? (
              <Title>Hoy</Title>
            ) : (
              <Title>{data.day}</Title>
            )}
            <WeatherIcon
              src={`https://openweathermap.org/img/w/${data.icon}.png`}
              alt={data.icon}
            />
            <Info>
              {data.lTemp}°C - {data.hTemp}°C
            </Info>
            <Subtitle1>{data.main}</Subtitle1>
            <Subtitle2>{data.desc}</Subtitle2>
          </ImageListItem>
        ))}
      </ImageList>
    </Root>
  );
};

export default Weekly;
