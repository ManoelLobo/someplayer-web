import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, Nav, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Browse</Link>
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
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add new playlist" />
          New Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
