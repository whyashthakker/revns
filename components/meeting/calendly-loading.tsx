export const CalendlyLoadingSkeleton = () => (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(35)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded-md"></div>
        ))}
      </div>
      <div className="space-y-2 mt-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    </div>
  );