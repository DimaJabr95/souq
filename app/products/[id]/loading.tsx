export default function Loading() {
  return (
    <div role="status" className="max-w-7xl mx-auto px-6 py-12">
      <span className="sr-only">Loading product...</span>

      {/* Back link */}
      <div className="h-4 w-32 rounded bg-gray-200 animate-pulse mb-8" />

      <div className="grid gap-10 md:grid-cols-2 animate-pulse">
        {/* Image */}
        <div className="aspect-square w-full rounded-2xl bg-gray-200" />

        {/* Details */}
        <div className="space-y-4">
          <div className="h-4 w-24 rounded bg-gray-200" />   {/* category */}
          <div className="h-9 w-3/4 rounded bg-gray-200" />  {/* title */}
          <div className="h-4 w-1/3 rounded bg-gray-200" />  {/* brand */}
          <div className="h-8 w-28 rounded bg-gray-200" />   {/* price */}
          <div className="h-4 w-20 rounded bg-gray-200" />   {/* rating */}

          {/* description: 3 lines */}
          <div className="space-y-2 pt-4">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>

          <div className="h-4 w-24 rounded bg-gray-200" />   {/* stock */}
        </div>
      </div>
    </div>
  );
}