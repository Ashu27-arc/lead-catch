export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 py-16">
      <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-background/90 px-4 py-2 shadow-sm dark:border-white/10">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-(--brand)/30 border-t-(--accent)" />
        <span className="text-sm font-medium text-foreground/80">Loading...</span>
      </div>
    </div>
  );
}
