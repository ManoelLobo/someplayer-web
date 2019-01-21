import React from 'react';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://placeimg.com/250/250/nature" alt="Playlist" />

      <div>
        <span>Playlist</span>
        <h1>The best of The best of</h1>
        <p>16 tracks</p>

        <button type="button">Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="length" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Beautiful song</td>
          <td>Nice band</td>
          <td>Successful hits</td>
          <td>3:14</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Beautiful song</td>
          <td>Nice band</td>
          <td>Successful hits</td>
          <td>3:14</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Beautiful song</td>
          <td>Nice band</td>
          <td>Successful hits</td>
          <td>3:14</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Beautiful song</td>
          <td>Nice band</td>
          <td>Successful hits</td>
          <td>3:14</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Beautiful song</td>
          <td>Nice band</td>
          <td>Successful hits</td>
          <td>3:14</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Beautiful song</td>
          <td>Nice band</td>
          <td>Successful hits</td>
          <td>3:14</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
