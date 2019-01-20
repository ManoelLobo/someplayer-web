import React from 'react';

import { Container, Nav, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="/browse">Browse</a>
        </li>
        <li>
          <a href="/radio">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Your library</span>
        </li>
        <li>
          <a href="/placeholder">Daily Mix</a>
        </li>
        <li>
          <a href="/placeholder">Played recently</a>
        </li>
        <li>
          <a href="/placeholder">Songs</a>
        </li>
        <li>
          <a href="/placeholder">Albums</a>
        </li>
        <li>
          <a href="/placeholder">Artists</a>
        </li>
        <li>
          <a href="/placeholder">Videos</a>
        </li>
        <li>
          <a href="/placeholder">Local files</a>
        </li>
        <li>
          <a href="/placeholder">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="/placeholder">The best of The best of</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add new playlist" />
      New Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
