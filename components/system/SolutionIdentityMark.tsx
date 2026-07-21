/** Indexed geometric mark for the six-solution commercial identity. */
export default function SolutionIdentityMark({
  num,
  accent = false,
}: {
  num: string;
  accent?: boolean;
}) {
  return (
    <span
      className={`solution-id-mark ${accent ? "solution-id-mark--accent" : ""}`}
      aria-hidden="true"
    >
      <span className="solution-id-mark__arc" />
      <span className="solution-id-mark__num">{num}</span>
    </span>
  );
}
