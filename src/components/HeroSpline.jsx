import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative h-[360px] sm:h-[420px] md:h-[520px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full w-full flex items-end">
        <div className="max-w-screen-xl mx-auto px-4 w-full pb-10">
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-sm inline-block">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Discover the Best Deals</h1>
            <p className="text-gray-600 mt-1">[HERO SUBTEXT PLACEHOLDER]</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
