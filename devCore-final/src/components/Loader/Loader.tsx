export default function Loader() {
  return (
    <div className="flex items-center gap-2" role="status" aria-label="Loading">
      <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-pink-500 [animation-delay:-.2s]" />
      <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-500 [animation-delay:-.1s]" />
      <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-500" />
    </div>
  );
}
