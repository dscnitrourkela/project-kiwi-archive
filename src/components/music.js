import ReactAudioPlayer from 'react-audio-player';
import { Box, } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Music = ({ muted, handleMute }) => {
  return (
    <>
      <div
        onClick={handleMute}
        style={{
          width: '1rem'
        }}
      >
        {muted ? (
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} />
        )}
      </div>
      <Box sx={{ display: 'none' }}>
        <ReactAudioPlayer
          src="/music/score.mp3"
          controls
          autoPlay
          muted={muted}
        />
      </Box>
    </>
  );
};

export default Music;
