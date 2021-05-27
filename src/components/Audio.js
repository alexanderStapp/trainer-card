import ReactHowler from "react-howler";
import {useState} from 'react'
import {RiVolumeUpFill, RiVolumeMuteFill} from 'react-icons/ri'

const PlayPause = () => {
  const [playpause, setPlaypause] = useState(false);
  return (
    <div className='audio-control' >
      <ReactHowler
        src='lab.mp3'
        mute={playpause}
        volume={0.07}
        loop={true}
      />
      {!playpause ? <button onClick={() => setPlaypause(!playpause)}><RiVolumeUpFill /></button>
      : <button onClick={() => setPlaypause(!playpause)}><RiVolumeMuteFill /></button>}
    </div>
  );
};

export default PlayPause;