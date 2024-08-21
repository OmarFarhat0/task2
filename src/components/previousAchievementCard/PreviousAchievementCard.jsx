import "./previousAchievementCard.css";

export default function PreviousAchievementCard({ number, achievement }) {
  return (
    <>
      <p className="number">{number}</p>
      <p className="achievement">{achievement}</p>
    </>
  );
}
