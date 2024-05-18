import React from 'react';
import styled from 'styled-components';

const SubscriptionListContainer = styled.div`
  margin-top: 20px;
`;

const SubscriptionList = () => {
  const subscriptions = [
    { id: 1, channelName: 'Channel 1' },
    { id: 2, channelName: 'Channel 2' },
    { id: 3, channelName: 'Channel 3' },
    { id: 4, channelName: 'Channel 4' },
    { id: 5, channelName: 'Channel 5' },
    { id: 6, channelName: 'Channel 6' },
    { id: 7, channelName: 'Channel 7' },
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
