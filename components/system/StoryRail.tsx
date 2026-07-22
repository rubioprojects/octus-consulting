/** Vertical brand rail — navy + blue identity line for storytelling sections. */
export default function StoryRail({
  className = "",
}: {
  className?: string;
}) {
  return <div className={`octus-story-rail ${className}`} aria-hidden="true" />;
}
