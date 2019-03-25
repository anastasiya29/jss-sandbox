import React from 'react';
import styled from 'styled-components';
import { Text } from 'rebass';
import { Card } from '../../theme/Card';
import Moment from 'react-moment';

const Title = styled(Text)`
  text-transform: uppercase;
  display: table;
  font-weight: bold;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`

const PrimaryCard = styled(Card)`
    color: white;
    display: grid;
    grid-template: auto 1fr / 3fr 1fr;
    grid-column-gap: 20px;
`

const Primary = ({ item: { pageTitle, description, image, startDate, flag } }) => (
    <PrimaryCard image={image ? image.src : null} >
        <Title my={2} pb={1}>{pageTitle.value}</Title>
        <Moment format="MMM D YYYY">{startDate.value}</Moment>
        {description &&
            <Text style={{ overflow: 'auto', alignSelf: 'end' }}>{description.value}</Text>
        }
        {flag &&
            <img src={flag.src} style={{ placeSelf: 'end', height: '50px' }} />
        }
    </PrimaryCard>
);

const DetailedCard = styled(Card)`
    color: text;
    display: grid;
    grid-template: auto / 1fr;
    grid-column-gap: 20px;
`

const Detailed = ({ item: { pageTitle, description, secondaryImage, startDate, flag } }) => (
    <DetailedCard image={secondaryImage ? secondaryImage.src : null}>
        <Title my={2} pb={1}>{pageTitle.value}</Title>
        <Text>{startDate.value}</Text>
        {description &&
            <Text style={{ overflow: 'auto', alignSelf: 'end' }}>{description.value}</Text>
        }

    </DetailedCard>
);

export default {
    Primary,
    Detailed
};
