import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: wrap;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;

  margin: 0 20px 10px 0;
  width: 250px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  img {
    height: 250px;
  }

  &:hover img {
    opacity: 0.5;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
