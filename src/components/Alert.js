import { useEffect, useRef } from "react";
const audiopath =
  "https://mp3melodii.ru/files_site_02/001/standartnaya_melodiya_na_zvonok_iphone_7.mp3";

export default function Alert(props) {
  const audio = useRef(null);

  useEffect(() => {
    if (props.isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [audio, props]);

  return <audio ref={audio} src={audiopath} autoPlay loop hidden></audio>;
}
