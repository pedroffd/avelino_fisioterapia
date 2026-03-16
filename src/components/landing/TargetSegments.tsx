const segments = [
  {
    name: "Clínicas de Fisioterapia",
    image:
      "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Estética Avançada",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Salões de Beleza",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Pet Shops",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
  },
];

export function TargetSegments() {
  return (
    <section className="py-24 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Feito para o seu negócio crescer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Independente da sua área de atuação, a nossa plataforma se adapta às
            necessidades do seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={segment.image}
                  alt={segment.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white font-sans tracking-wide">
                  {segment.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
