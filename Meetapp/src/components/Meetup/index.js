import React from 'react';
import PropTypes from 'prop-types';
import { formatBrDate } from 'services/utils/helpers';
import {
  Action,
  Banner,
  Container,
  Content,
  Information,
  Line,
  MiniIcon,
  Title,
} from './styles';

const Meetup = ({ id, meetup, action, actionTitle, disabled }) => (
  <Container>
    <Banner source={{ uri: `http://localhost:3333/file/${meetup.banner}` }} />
    <Content>
      <Title>{meetup.title}</Title>
      <Line>
        <MiniIcon name="event" />
        <Information>
          {formatBrDate(meetup.date, "dd 'de' MMMM, 'às' HH:mm'h'")}
        </Information>
      </Line>
      <Line>
        <MiniIcon name="place" />
        <Information>{meetup.location}</Information>
      </Line>
      <Line>
        <MiniIcon name="person" />
        <Information>{`Organizador: ${meetup.user.name}`}</Information>
      </Line>
      <Action disabled={disabled} onPress={() => action(meetup.id, id)}>
        {actionTitle}
      </Action>
    </Content>
  </Container>
);

Meetup.propTypes = {
  action: PropTypes.func.isRequired,
  actionTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  meetup: PropTypes.shape({
    banner: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

Meetup.defaultProps = {
  disabled: undefined,
  id: undefined,
};

export default Meetup;
