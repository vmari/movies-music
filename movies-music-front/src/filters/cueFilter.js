export default function (track) {
  if (!track) return '';
  return track.reel + 'm' + track.cueNumber;
}
