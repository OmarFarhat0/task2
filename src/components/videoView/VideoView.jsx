import "./videoView.css";
import PreviousAchievementCard from "../previousAchievementCard/PreviousAchievementCard";

export default function VideoView({
  nameSection,
  title,
  srcImage,
  srcPoster,
  srcVideo,
}) {
  return (
    <>
      <div className="container">
        <div className="introduce">
          <h2>| {nameSection}</h2>
          <h3>{title}</h3>
        </div>

        <div className="theVideo">
          <video controls poster={srcPoster}>
            <source src={srcVideo} type="video/mp4"></source>
          </video>
        </div>

        <div className="items">
          <div className="item">
            <div className="previousAchievementCard">
              <PreviousAchievementCard
                number="34"
                achievement="Buildings Finished Now"
              />
            </div>
          </div>

          <div className="item">
            <div className="previousAchievementCard">
              <PreviousAchievementCard
                number="34"
                achievement="Buildings Finished Now"
              />
            </div>
          </div>

          <div className="item">
            <div className="previousAchievementCard">
              <PreviousAchievementCard
                number="34"
                achievement="Buildings Finished Now"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="blockOne">
        <img src={srcImage} />
      </div>

      <div className="blockTwo"></div>
    </>
  );
}
