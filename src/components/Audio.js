import ReactHowler from "react-howler";
import {useState} from 'react'

const PlayPause = () => {
  const [playpause, setPlaypause] = useState(false);
  return (
    <div>
      <ReactHowler
        src='lab.mp3'
        mute={playpause}
        volume={0.1}
      />
      {playpause ? <button onClick={() => setPlaypause(!playpause)}>mute</button> : <button onClick={() => setPlaypause(!playpause)}>play</button>}
    </div>
  );
};

export default PlayPause;