import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { HogakPlayer } from '@peerline/hogak-player';

function App() {
  const [isPlay, setIsPlay] = React.useState(false);
  const [inputUrl, setInputUrl] = React.useState('https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8');
  const [url, setUrl] = React.useState('https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8');
  const [width, setWidth] = React.useState(640);
  const [height, setHeight] = React.useState(360);

  return (
    <div className="App">
      <header>
        <h1>Hogak Player 샘플</h1>
      </header>
      <FlexContainer>
        <HogakPlayer
          isPlay={isPlay}
          setIsPlay={setIsPlay}
          url={url}
          width={width}
          height={height}
        />
        <table>
          <tbody>
            <tr>
              <th>URL</th>
              <td>
                <input type="text" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} style={{ width: '400px' }} />
                <button onClick={(e) => setUrl(inputUrl)}>로드</button>
              </td>
            </tr>
            <tr>
              <th>width * height</th>
              <td>
                <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} style={{ width: '60px' }} />
                <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} style={{ width: '60px' }} />
              </td>
            </tr>
            <tr>
              <th>설정</th>
              <td>
                <button onClick={(e) => setIsPlay(false)}>정지</button>
                <button onClick={(e) => setIsPlay(!isPlay)}>{isPlay ? '일시정지' : '재생'}</button>
                <button onClick={(e) => { }}>Fullscreen</button>
              </td>
            </tr>
          </tbody>
        </table>
      </FlexContainer>
    </div>
  );
}

export default App;

const FlexContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;