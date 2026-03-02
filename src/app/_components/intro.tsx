import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        HSANNU Finance Club.
       </h1>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A platform for you to explore the financial world.  {/* 修改这里：把原来的描述改成这个 */}
      </h2>
    </section>
  );
}
