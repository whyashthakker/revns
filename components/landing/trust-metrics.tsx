"use client";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";

export const TrustMetrics = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
            Trusted by fast moving brands worldwide
          </h2>

          <div className="flex items-center gap-6">
            {/* Stats Container 1 */}
            <div className="flex-1">
              <div className="text-blue-500 text-3xl md:text-5xl font-bold">
                <NumberTicker value={10} />+
              </div>
              <p className="text-gray-500 text-sm md:text-base mt-2">
                Happy Clients
              </p>
            </div>

            {/* Divider */}
            <div className="h-16 w-px bg-gray-300"></div>

            {/* Stats Container 2 */}
            <div className="flex-1">
              <div className="text-blue-500 text-3xl md:text-5xl font-bold">
                <NumberTicker value={100} />+
              </div>
              <p className="text-gray-500 text-sm md:text-base mt-2">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 overflow-hidden">
          <InfiniteMovingLogos
            speed="slow"
            direction="left"
            items={[
              { logo: "/logo/REVNS.png", name: "Logo" },
              { logo: "/logo/REVNS.png", name: "Logo" },
              { logo: "/logo/REVNS.png", name: "Logo" }, // Added one more for better scrolling
            ]}
          />
        </div>
      </div>
    </div>
  );
};