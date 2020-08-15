import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

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
        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'ElladanTasartir'}
                  reponame={'react-clean-tdd'}
                  description={'React com TDD e Clean Architecture'}
                  language={
                    n % 3 === 0 ? 'JavaScript' : 'TypeScript'
                  }
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
