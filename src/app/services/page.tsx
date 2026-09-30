export default function ServicesPage() {
  return (
    <main className="pt-32 min-h-screen flex flex-col items-center px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">WHAT WE OFFER</p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive end-to-end real estate solutions for buyers, sellers, renters, and property investors with zero brokerage.
          </p>
        </div>
        
        {/* Services detail list */}
        <div className="space-y-8 pb-20">
          {[
            { title: "Residential Buying & Selling", desc: "Discover premium homes, villas, and apartments without middleman fees. Direct owner connections." },
            { title: "Commercial Leasing", desc: "Grade-A office spaces and retail shops for your business in prime business districts." },
            { title: "Land & Farmland Investments", desc: "Verified and legally cleared agricultural and non-agricultural land plots for long-term growth." },
            { title: "Legal & Documentation", desc: "End-to-end legal support, title verification, and registration assistance by expert real estate attorneys." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 h-48 bg-slate-100 rounded-2xl flex items-center justify-center animate-pulse shrink-0">
                <span className="text-slate-400 font-medium text-sm uppercase tracking-widest">Service Image</span>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
