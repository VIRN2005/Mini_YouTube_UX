import React from 'react';
import styled from 'styled-components';

const SubscriptionListContainer = styled.div`
  margin-top: 20px;
`;

const SubscriptionList = () => {
  const subscriptions = [
    { id: 1, channelName: 'Real Madrid' },
    { id: 2, channelName: 'DjMarioo' },
    { id: 3, channelName: 'Mr. Beast' },
    { id: 4, channelName: 'David Zuniga' },
    { id: 5, channelName: 'Doc Tops' },
    { id: 6, channelName: 'DrossRotzank' },
    { id: 7, channelName: 'SKXKafei' },
    { id: 7, channelName: 'Chelsea' },
    { id: 7, channelName: 'Cristiano Ronaldo' },
  ];

  return (
    <SubscriptionListContainer>
      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map((subscription) => (
          <li key={subscription.id}>{subscription.channelName}</li>
        ))}
      </ul>
    </SubscriptionListContainer>
  );
};

export default SubscriptionList;