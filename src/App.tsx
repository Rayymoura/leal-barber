import { Clock, MapPin, Menu, Phone, Scissors, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/5511976797810?text=Ol%C3%A1%20Nicolle%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20barbearia!";
const INSTAGRAM_LINK = "https://www.instagram.com/lea.lbarber?igsh=MXZybnRub2pxcWl0Yw==";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua+Dion%C3%ADsio+Bizarro+1%2C+S%C3%A3o+Paulo+-+SP&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Dion%C3%ADsio+Bizarro+1%2C+S%C3%A3o+Paulo+-+SP";

const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "galeria", label: "Galeria" },
  { id: "localizacao", label: "Localização" },
];

const GALLERY = [
  { src: "images/trabalho-corte-desenho.jpg", alt: "Corte degradê com desenho na navalha" },
  { src: "images/trabalho-navalha.jpg", alt: "Acabamento na navalha" },
  { src: "images/trabalho-degrade.jpg", alt: "Degradê na máquina" },
  { src: "images/espaco-interior.jpg", alt: "Interior da Leal Barber" },
  { src: "images/produtos.jpg", alt: "Produtos profissionais à venda" },
];

const SERVICES = [
  { name: "Corte de Cabelo", desc: "Corte clássico ou moderno com acabamento perfeito", price: "R$ 50" },
  { name: "Barba Completa", desc: "Modelagem e cuidados profissionais", price: "R$ 40" },
  { name: "Combo Cabelo + Barba", desc: "Pacote completo com desconto", price: "R$ 80", highlight: true },
  { name: "Sobrancelha", desc: "Modelagem precisa e alinhada ao seu rosto", price: "R$ 25" },
  { name: "Barba com Hidratação", desc: "Toalha quente, massagem e tratamento intensivo", price: "R$ 55" },
  { name: "Acabamento e Pezinho", desc: "Contorno na máquina para manter o visual em dia", price: "R$ 35" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function AgendarButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-gold-400 text-black rounded-full font-bold shadow-lg shadow-gold-400/30 hover:bg-gold-300 hover:scale-105 transition-all duration-300 ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span>Agendar Horário</span>
    </a>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-sm border-gray-800 shadow-lg" : "bg-black/40 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logotipo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2"
            aria-label="Voltar ao início"
          >
            <div className="w-10 h-10 rounded-full border-2 border-gold-400 flex items-center justify-center">
              <Scissors className="w-5 h-5 text-gold-400" />
            </div>
            <span className="text-2xl font-bold font-display text-gold-400 tracking-wide">Leal Barber</span>
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <AgendarButton className="px-6 py-3" />
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-gold-400" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-gold-400 transition-colors duration-300 font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <AgendarButton className="px-4 py-2" />
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('images/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-slate-900"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-400 text-black font-bold rounded-full text-sm md:text-base uppercase tracking-wider shadow-lg shadow-gold-400/50 animate-pulse">
              <MapPin className="w-4 h-4" /> Localização Nova!
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-2xl">
            <span className="text-white">ESTILO QUE</span>
            <br />
            <span className="text-gold-400">IMPÕE RESPEITO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Uma barbearia premium, liderada por Nicolle Leal, onde tradição encontra modernidade
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-400 text-black px-10 py-4 rounded-full font-bold text-xl shadow-2xl shadow-gold-400/40 hover:bg-gold-300 hover:scale-105 hover:shadow-gold-400/60 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Agende seu horário
            </a>
            <button
              onClick={() => scrollToSection("servicos")}
              className="inline-flex items-center gap-2 border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300"
            >
              Ver serviços
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-8 h-12 border-2 border-gold-400 rounded-full flex justify-center">
            <div className="w-1 h-4 mt-2 bg-gold-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-slate-900 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 text-gold-400 font-bold border-2 border-gold-400 rounded-full">
                  Sobre Nós
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
                <span className="text-white">Uma experiência que</span>
                <br />
                <span className="text-gold-400">vai além do corte</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
              <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/50">
                <img
                  src="images/nicolle-atendimento.jpg"
                  alt="Nicolle Leal fazendo barba na navalha em um cliente"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Na Leal Barber, cada cliente é tratado como único. Nicolle Leal, barbeira apaixonada e
                  experiente, oferece um atendimento personalizado do primeiro contato até o último detalhe do
                  seu visual. Aqui não é só um corte de cabelo ou barba: é uma celebração do estilo, da
                  autenticidade e da sua melhor versão.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Com um espaço cheio de personalidade e detalhes que contam histórias, nossa barbearia é um
                  refúgio para quem valoriza qualidade, paixão pelo detalhe e um atendimento que transforma a
                  rotina. Venha viver a experiência que faz da autoestima uma arte.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Scissors, title: "Técnica Premium", desc: "Cortes precisos com produtos de alta qualidade" },
                { icon: Sparkles, title: "Atendimento Único", desc: "Cada visita é pensada nos mínimos detalhes" },
                { icon: Clock, title: "Sem Espera", desc: "Horário marcado e pontualidade garantida" },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-gold-400 transition-colors duration-300"
                >
                  <Icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-slate-800 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 text-gold-400 font-bold border-2 border-gold-400 rounded-full">
                Nossos Serviços
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Opções para todos os</span>
              <br />
              <span className="text-gold-400">seus estilos</span>
            </h2>
            <p className="text-gray-300 mt-4">Escolha o serviço perfeito para você</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className={`relative bg-slate-900/50 rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-400/10 ${
                  service.highlight ? "border-gold-400" : "border-gray-700 hover:border-gold-400"
                }`}
              >
                {service.highlight && (
                  <span className="absolute -top-3 right-6 bg-gold-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Mais pedido
                  </span>
                )}
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </div>
                  <span className="text-2xl font-bold text-gold-400 whitespace-nowrap">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <AgendarButton className="px-10 py-4 text-lg" />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 bg-slate-900 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 text-gold-400 font-bold border-2 border-gold-400 rounded-full">
                Galeria
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Nosso trabalho</span>
              <br />
              <span className="text-gold-400">fala por si</span>
            </h2>
            <p className="text-gray-300 mt-4">Resultados reais, direto da cadeira</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Antes e Depois */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden border border-gray-700 group">
                <img
                  src="images/antes.jpg"
                  alt="Cliente antes do corte"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-slate-900/90 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Antes
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-gold-400 group">
                <img
                  src="images/depois.jpg"
                  alt="Cliente depois do corte com degradê"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-gold-400 text-black text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Depois
                </span>
              </div>
            </div>

            {/* Grade de trabalhos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {GALLERY.map((photo) => (
                <div key={photo.src} className="rounded-xl overflow-hidden border border-gray-700 group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-full font-bold hover:bg-gold-400 hover:text-black transition-all duration-300"
              >
                <InstagramIcon className="w-5 h-5" /> Veja mais no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E CONTATO */}
      <section id="localizacao" className="py-20 bg-slate-800 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 text-gold-400 font-bold border-2 border-gold-400 rounded-full">
                Localização e Contato
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Encontre-nos em</span>
              <br />
              <span className="text-gold-400">Rua Dionísio Bizarro, 1</span>
            </h2>
            <p className="text-gray-300 mt-4">Estamos a um passo de você</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Endereço e Contato */}
              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6" /> Endereço
                  </h3>
                  <p className="text-white text-lg">
                    Rua Dionísio Bizarro, 1<br />
                    Posto de Gasolina — Loja 3<br />
                    São Paulo - SP
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6" /> Horário
                  </h3>
                  <div className="text-white">
                    <p className="mb-2">Segunda a Sexta: 9h às 19h</p>
                    <p className="mb-2">Sábado: 9h às 17h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
                    <Phone className="w-6 h-6" /> Conecte-se
                  </h3>
                  <div className="space-y-2 mb-4 text-white">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-green-500" /> +55 11 97679-7810
                    </a>
                    <a
                      href={INSTAGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                    >
                      <InstagramIcon className="w-5 h-5 text-pink-500" /> @lea.lbarber
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-6 h-6" />
                    </a>
                    <a
                      href={INSTAGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gold-400 text-black py-4 rounded-full font-bold text-xl shadow-2xl shadow-gold-400/40 hover:bg-gold-300 hover:scale-105 transition-all duration-300 inline-block"
                >
                  Agendar Horário no WhatsApp
                </a>
              </div>

              {/* Fachada e Mapa */}
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-gray-700">
                  <img
                    src="images/fachada-leal-barber.jpg"
                    alt="Fachada da Leal Barber"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-700">
                  <iframe
                    src={MAPS_EMBED}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da Leal Barber"
                  />
                </div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border-2 border-gold-400 text-gold-400 py-3 rounded-full font-bold hover:bg-gold-400 hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" /> Traçar rota no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400">
              <p>&copy; {new Date().getFullYear()} Leal Barber. Todos os direitos reservados.</p>
            </div>
            <div className="text-gold-400 font-bold">
              <p>Seg a Sex: 9h às 19h | Sáb: 9h às 17h</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-gold-400 transition-colors text-sm"
            >
              <InstagramIcon className="w-4 h-4" /> @lea.lbarber
            </a>
            <span className="text-gray-700">|</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-gold-400 transition-colors text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" /> +55 11 97679-7810
            </a>
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            <p>Rua Dionísio Bizarro, 1 — Posto de Gasolina, Loja 3 — São Paulo - SP</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform duration-300"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
