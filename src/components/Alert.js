const audiopath =
  "https://mp3melodii.ru/files_site_02/001/standartnaya_melodiya_na_zvonok_iphone_7.mp3";

export default function Alert() {
  return <audio src={audiopath} autoPlay loop hidden></audio>;
}
