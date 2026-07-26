import "../Stylesheets/mystyle.css";

const percent = (total, goal) => {
  return (total / goal) * 100;
};

const CalcScore = (total, goal) => {
  return percent(total, goal).toFixed(2);
};

export default function CalculateScore({ Name, School, total, goal }) {
  return (
    <div className="formatstyle">
      <h1 className="Name">Student Details:</h1>

      <div className="School">
        <span>School: </span>
        <span>{School}</span>
      </div>

      <div className="Total">
        <span>Total: </span>
        <span>{total}</span>
      </div>

      <div className="Score">
        <span>Score: </span>
        <span>{CalcScore(total, goal)}%</span>
      </div>
    </div>
  );
}