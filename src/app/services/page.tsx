export default function ServicesPage() {
  return (
    <main className="pt-40 lg:pt-48 min-h-screen flex flex-col items-center px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-24">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">WHAT WE OFFER</p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive end-to-end real estate solutions for buyers, sellers, renters, and property investors with zero brokerage.
          </p>
        </div>
        
        {/* Services detail list */}
        <div className="space-y-32 pb-32">
          {[
            { 
              title: "Residential Buying & Selling", 
              desc: "Discover premium homes, luxury villas, and modern apartments across top localities without paying any middleman fees. Our platform connects you directly with verified property owners, ensuring complete transparency, faster negotiations, and significant savings on every transaction. We provide end-to-end assistance from discovery to deal closure.",
              img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            },
            { 
              title: "Commercial Leasing", 
              desc: "Unlock the perfect workspace for your growing business with our commercial leasing solutions. We offer Grade-A office spaces, retail shops, and co-working environments in prime business districts. Connect directly with landlords to negotiate the best lease terms, completely bypassing hefty commercial brokerage commissions.",
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            },
            { 
              title: "Land & Farmland Investments", 
              desc: "Secure your future with high-yield land and farmland investments. We offer thoroughly verified and legally cleared agricultural and non-agricultural land plots. Whether you're looking for long-term capital appreciation, farming ventures, or building a farmhouse retreat, our curated listings offer safe and profitable opportunities direct from owners.",
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
            },
            { 
              title: "Furniture & Interior Design", 
              desc: "Transform your newly acquired property into a dream home with our premium furniture and interior design services. We partner with top-tier interior studios and manufacturers to offer you bespoke design solutions, modular kitchens, and high-quality furnishings at exclusive partner discounts. Move into a beautifully curated space without the hassle.",
              img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((service, idx) => (
            <div key={idx} className={`flex flex-col gap-12 lg:gap-16 items-stretch group ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="w-full md:w-1/2 bg-slate-100 rounded-[2rem] overflow-hidden relative shrink-0 shadow-2xl min-h-[300px]">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 md:px-8 flex flex-col justify-center py-4 md:py-8">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{service.title}</h3>
                <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <button className="px-8 py-4 bg-[#1ebbbb] text-white rounded-xl font-bold uppercase tracking-wide text-sm hover:bg-[#199d9d] hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
