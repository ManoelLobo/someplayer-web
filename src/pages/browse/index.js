import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://placeimg.com/250/250/nature" alt="Playlist" />
        <strong>The best of The best of</strong>
        <p>Quite interesting definition of this playlist</p>
      </Playlist>

      <Playlist to="/playlists/2">
        <img src="https://placeimg.com/250/250/nature" alt="Playlist" />
        <strong>The best of The best of</strong>
        <p>Quite interesting definition of this playlist</p>
      </Playlist>

      <Playlist to="/playlists/3">
        <img src="https://placeimg.com/250/250/nature" alt="Playlist" />
        <strong>The best of The best of</strong>
        <p>Quite interesting definition of this playlist</p>
      </Playlist>

      <Playlist to="/playlists/4">
        <img src="https://placeimg.com/250/250/nature" alt="Playlist" />
        <strong>The best of The best of</strong>
        <p>Quite interesting definition of this playlist</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
