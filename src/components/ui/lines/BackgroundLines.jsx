import "./BackgroundLines.css";

const LINES = [
  { top: "0px", left: "-6%", flip: false },
  { top: "1000px", right: "-8%", flip: true },
  { top: "2000px", left: "-6%", flip: false },
];

export default function BackgroundLines() {
  return (
    <div className="bg-lines" aria-hidden="true">
      {LINES.map(({ flip, ...pos }, i) => (
        <svg
          key={i}
          className={`bg-lines__line ${flip ? "bg-lines__line--flip" : ""}`}
          style={pos}
          viewBox="0 0 600 900"
          fill="none"
        >
          <path d="M-20 640 C60 760 180 700 150 480 C125 320 230 250 340 330 C440 400 520 360 540 220 C555 110 575 40 590 -20" />
        </svg>
      ))}
    </div>
  );
}