import Button from "./Button";

export default function Toolbar({onPlayMovie,onUploadImage}) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Uplaod Image</Button>
    </div>
  )
}
