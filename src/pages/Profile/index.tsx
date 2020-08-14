import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'ElladanTasartir'}
            name={'Erick Malta'}
            avatarUrl={
              'https://avatars0.githubusercontent.com/u/51251287?v=4'
            }
            followers={233}
            following={8}
            company={'Rocketseat'}
            location={'São Paulo, Brazil'}
            email={'erickmalta100@gmail.com'}
            blog={undefined}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
