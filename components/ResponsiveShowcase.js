import { FiMonitor, FiTablet, FiSmartphone } from 'react-icons/fi';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

export default function ResponsiveShowcase() {
  return (
    <section className="relative py-10 sm:py-28 bg-gray-900 overflow-x-hidden overflow-y-visible">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-6 sm:mb-16">
          <p className="text-gray-400 italic text-sm sm:text-xl mb-1 sm:mb-2">
            Compatible Mobile, Tablettes & PC
          </p>
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-white">
            Développement Web Responsive
          </h2>
        </AnimatedSection>

        {/* Devices mockup */}
        <AnimatedSection animation="fade-up" delay={200} className="relative max-w-5xl mx-auto">
          {/* Desktop/Laptop */}
          <div className="relative z-10 mx-auto transition-transform duration-500 hover:scale-[1.02]" style={{ maxWidth: '800px' }}>
            {/* Laptop screen */}
            <div className="bg-gray-800 rounded-t-xl p-2 border-t border-l border-r border-gray-700">
              <div className="bg-white rounded-lg overflow-hidden aspect-video">
                {/* Desktop Website Mockup */}
                <div className="h-full flex flex-col">
                  {/* Browser bar */}
                  <div className="bg-gray-100 px-3 py-1.5 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-gray-400 text-center">
                      wevia.fr
                    </div>
                  </div>
                  {/* Site content */}
                  <div className="flex-1 bg-gray-50 p-3">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-16 h-3 bg-gray-900 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-2 bg-gray-300 rounded"></div>
                        <div className="w-8 h-2 bg-gray-300 rounded"></div>
                        <div className="w-8 h-2 bg-gray-300 rounded"></div>
                        <div className="w-12 h-3 bg-gray-900 rounded"></div>
                      </div>
                    </div>
                    {/* Hero */}
                    <div className="flex gap-4 mb-3">
                      <div className="flex-1">
                        <div className="w-3/4 h-4 bg-gray-900 rounded mb-2"></div>
                        <div className="w-full h-2 bg-gray-300 rounded mb-1"></div>
                        <div className="w-5/6 h-2 bg-gray-300 rounded mb-2"></div>
                        <div className="w-20 h-4 bg-gray-900 rounded"></div>
                      </div>
                      <div className="w-1/3 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="w-6 h-6 bg-gray-200 rounded mb-1"></div>
                        <div className="w-full h-2 bg-gray-300 rounded mb-1"></div>
                        <div className="w-3/4 h-1.5 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="w-6 h-6 bg-gray-200 rounded mb-1"></div>
                        <div className="w-full h-2 bg-gray-300 rounded mb-1"></div>
                        <div className="w-3/4 h-1.5 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="w-6 h-6 bg-gray-200 rounded mb-1"></div>
                        <div className="w-full h-2 bg-gray-300 rounded mb-1"></div>
                        <div className="w-3/4 h-1.5 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="bg-gray-700 h-4 rounded-b-lg mx-auto" style={{ width: '60%' }}></div>
            <div className="bg-gray-600 h-2 rounded-b-xl mx-auto" style={{ width: '80%' }}></div>
          </div>

          {/* Tablet - positioned to the right */}
          <div className="absolute right-8 sm:right-4 lg:right-12 bottom-0 z-20 transform translate-y-4 animate-float-delayed">
            <div className="bg-gray-800 rounded-2xl p-1 sm:p-2 border border-gray-700 shadow-2xl transition-transform duration-300 hover:scale-105 w-[80px] sm:w-[160px]">
              <div className="bg-white rounded-xl overflow-hidden aspect-[3/4]">
                {/* Tablet Website Mockup */}
                <div className="h-full flex flex-col p-1 sm:p-2">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <div className="w-4 sm:w-8 h-1 sm:h-2 bg-gray-900 rounded"></div>
                    <div className="w-2 sm:w-4 h-1 sm:h-2 bg-gray-400 rounded"></div>
                  </div>
                  {/* Hero */}
                  <div className="mb-1 sm:mb-2">
                    <div className="w-3/4 h-1 sm:h-2 bg-gray-900 rounded mb-0.5 sm:mb-1"></div>
                    <div className="w-full h-0.5 sm:h-1 bg-gray-300 rounded mb-0.5 sm:mb-1"></div>
                    <div className="w-5 sm:w-10 h-1 sm:h-2 bg-gray-900 rounded"></div>
                  </div>
                  {/* Image placeholder */}
                  <div className="w-full h-6 sm:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-1 sm:mb-2"></div>
                  {/* Cards */}
                  <div className="grid grid-cols-2 gap-0.5 sm:gap-1">
                    <div className="bg-gray-50 p-0.5 sm:p-1 rounded">
                      <div className="w-2 sm:w-4 h-2 sm:h-4 bg-gray-200 rounded mb-0.5 sm:mb-1"></div>
                      <div className="w-full h-0.5 sm:h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="bg-gray-50 p-0.5 sm:p-1 rounded">
                      <div className="w-2 sm:w-4 h-2 sm:h-4 bg-gray-200 rounded mb-0.5 sm:mb-1"></div>
                      <div className="w-full h-0.5 sm:h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone - positioned to the far right */}
          <div className="absolute right-2 sm:-right-4 lg:right-0 bottom-0 z-30 transform translate-y-8 animate-float">
            <div className="bg-gray-800 rounded-2xl p-1 sm:p-1.5 border border-gray-700 shadow-2xl transition-transform duration-300 hover:scale-105 w-[45px] sm:w-[80px]">
              <div className="bg-white rounded-xl overflow-hidden aspect-[9/16]">
                {/* Phone Website Mockup */}
                <div className="h-full flex flex-col p-0.5 sm:p-1.5">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                    <div className="w-2 sm:w-4 h-px sm:h-0.5 bg-gray-400 rounded"></div>
                    <div className="w-3 sm:w-6 h-0.5 sm:h-1 bg-gray-900 rounded-full"></div>
                    <div className="w-2 sm:w-4 h-px sm:h-0.5 bg-gray-400 rounded"></div>
                  </div>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-0.5 sm:mb-1.5">
                    <div className="w-3 sm:w-6 h-0.5 sm:h-1.5 bg-gray-900 rounded"></div>
                    <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 flex flex-col justify-center space-y-px sm:space-y-0.5">
                      <div className="w-full h-px sm:h-0.5 bg-gray-600 rounded"></div>
                      <div className="w-full h-px sm:h-0.5 bg-gray-600 rounded"></div>
                      <div className="w-full h-px sm:h-0.5 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="mb-0.5 sm:mb-1.5">
                    <div className="w-full h-0.5 sm:h-1.5 bg-gray-900 rounded mb-px sm:mb-0.5"></div>
                    <div className="w-3/4 h-0.5 sm:h-1 bg-gray-300 rounded mb-0.5 sm:mb-1"></div>
                    <div className="w-4 sm:w-8 h-0.5 sm:h-1.5 bg-gray-900 rounded"></div>
                  </div>
                  {/* Image */}
                  <div className="w-full h-4 sm:h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-0.5 sm:mb-1.5"></div>
                  {/* Content blocks */}
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="bg-gray-50 p-0.5 sm:p-1 rounded">
                      <div className="w-full h-0.5 sm:h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="bg-gray-50 p-0.5 sm:p-1 rounded">
                      <div className="w-full h-0.5 sm:h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features - Always on same line */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-16 max-w-3xl mx-auto">
          {[
            { icon: FiMonitor, title: 'Desktop', desc: 'Grand écran' },
            { icon: FiTablet, title: 'Tablette', desc: 'Tactile fluide' },
            { icon: FiSmartphone, title: 'Mobile', desc: 'Mobile-first' }
          ].map((feature, index) => (
            <AnimatedCard
              key={index}
              delay={400 + index * 100}
              hoverEffect="lift"
              className="text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-transform hover:scale-110 hover:bg-white/20">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-0.5 sm:mb-1 text-xs sm:text-base">{feature.title}</h3>
              <p className="text-gray-400 text-[10px] sm:text-sm">{feature.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
