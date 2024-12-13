import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Rocketship Your Ecommerce · Improve Visibility · Make More Revenue"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-blue-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
