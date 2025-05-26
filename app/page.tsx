"use client"

import Link from "next/link"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Instagram, Facebook, Award, Hammer, Heart, Users } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  const whatsappLink =
    "https://wa.me/5511940177290?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados"

  const portfolioProjects = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cozinha.jpg-N0gPt1kO1NsNUYWvkKkpjetr5ntZuM.jpeg",
      title: "Cozinha Planejada",
      description: "Cozinha moderna com armários em cinza e madeira, bancada em granito preto e iluminação embutida.",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sala.jpg-uWGTFI1cIPzGeQRjHOYiIzDmxTxwRN.jpeg",
      title: "Móveis Planejados para Sala",
      description: "Sala com painel de TV em madeira, rack planejado e integração com área gourmet.",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quarto.jpg-469mS8jBXfslztxaoJT7v366Bv6SsX.jpeg",
      title: "Móveis Planejados para Quarto",
      description: "Quarto com guarda-roupa embutido, cabeceira estofada e iluminação personalizada.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f9f9f9] overflow-x-hidden">
      <ScrollAnimation />
      <header className="w-full py-3 bg-[#f9f9f9] sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="h-10 sm:h-12 md:h-16 lg:h-20 animate-initial from-left flex-shrink-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B60BD97E9-473A-472E-8883-130BDCD23B1D%7D-Photoroom-xeJk8Jh3BsfbMcQfzHnNSNTwG1NTY3.png"
              alt="B'Lucca"
              className="h-full w-auto"
            />
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-black/90 text-white rounded-none px-3 sm:px-4 md:px-6 py-2 inline-flex items-center justify-center h-8 sm:h-9 md:h-10 font-medium transition-colors text-xs sm:text-sm md:text-base flex-shrink-0"
          >
            <span className="hidden sm:inline">Solicitar Orçamento</span>
            <span className="sm:hidden">Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-64px)] w-full"
        id="hero-section"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-photo-1571460-5NjwGInJnzRLLD6n4n3O9goXloNRKY.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative h-full w-full flex items-center z-10 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6 animate-initial from-left">
              Marcenaria de <span className="text-primary">Móveis Planejados</span> em São Paulo
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-3 sm:mb-4 animate-initial from-left delay-100">
              Está Procurando uma <span className="text-primary">Marcenaria</span> de Confiança? Conheça a B'Lucca
              Móveis Planejados, especialista em transformar ambientes com móveis sob medida.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-3 sm:mb-4 md:mb-6 animate-initial from-left delay-200">
              Com mais de 30 anos de experiência no mercado de móveis planejados, oferecemos projetos que unem design,
              funcionalidade e qualidade.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-8 animate-initial from-left delay-300">
              Entre em contato agora e faça o orçamento para o seu projeto dos sonhos!
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white rounded-none px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 inline-flex items-center justify-center font-medium transition-colors text-sm sm:text-base animate-initial zoom delay-400"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </section>

      {/* Quem é a B'Lucca Section */}
      <section id="quem-somos" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-wider mb-2 text-primary animate-on-scroll from-top text-xs sm:text-sm">
              NOSSA HISTÓRIA
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 animate-on-scroll text-[#1C1D1F]">
              Quem é a B'Lucca
            </h2>

            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed animate-on-scroll text-gray-700">
                A B'Lucca Planejados nasceu da paixão por transformar ambientes através de móveis personalizados que
                unem funcionalidade, estética e qualidade. Fundada há mais de 30 anos, nossa empresa familiar cresceu
                mantendo os valores que nos guiaram desde o início: compromisso com a excelência, atenção aos detalhes e
                respeito pelo cliente.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed animate-on-scroll delay-100 text-gray-700">
                Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem, desde os designers
                que criam projetos exclusivos até os marceneiros que transformam ideias em realidade com precisão
                artesanal.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed animate-on-scroll delay-200 text-gray-700">
                Ao longo dos anos, tivemos o privilégio de participar da transformação de centenas de lares e espaços
                comerciais, sempre com o compromisso de superar as expectativas de nossos clientes e criar ambientes que
                refletem personalidade, estilo e praticidade.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center font-medium transition-colors animate-on-scroll zoom delay-300 text-sm sm:text-base"
                >
                  Conheça nossos projetos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wider mb-2 animate-on-scroll from-top text-xs sm:text-sm">DIFERENCIAIS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate-on-scroll">
              O que oferecemos
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {/* Diferencial 1 */}
              <div className="text-center animate-on-scroll from-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">
                  Empresa Familiar com Atendimento Personalizado
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Somos uma marcenaria de família. Tratamos cada projeto como se fosse para nossa própria casa.
                </p>
              </div>

              {/* Diferencial 2 */}
              <div className="text-center animate-on-scroll delay-100">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">
                  Preço Justo com Transparência Total
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Prezamos por uma relação de confiança. Praticamos preços justos, alinhados à qualidade dos materiais.
                </p>
              </div>

              {/* Diferencial 3 */}
              <div className="text-center animate-on-scroll from-right delay-200">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">
                  Proteção Extra Contra Desgaste e Danos
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Usamos acabamentos de alta proteção para que seu móvel continue novo por muito mais tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre nossa equipe Section */}
      <section id="projects" className="py-12 md:py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1D1F] animate-on-scroll">
              Sobre nossa equipe
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mt-4 animate-on-scroll delay-100"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Imagem */}
              <div className="w-full lg:w-1/2 flex justify-center animate-on-scroll from-left">
                <div className="w-full max-w-sm">
                  <img
                    src="/team-photo.jpeg"
                    alt="Equipe da B'Lucca Planejados"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="w-full lg:w-1/2 text-center lg:text-left animate-on-scroll from-right">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                  Nossa equipe é formada por profissionais altamente qualificados com mais de 30 anos de experiência no
                  setor moveleiro. Especializados em projetos residenciais e corporativos, trabalhamos com dedicação
                  para transformar cada ambiente em um espaço único. Nosso compromisso é unir design contemporâneo,
                  materiais de primeira linha e acabamento impecável, garantindo móveis que expressam a personalidade e
                  atendem às necessidades específicas de cada cliente.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-black/90 text-white rounded-none px-6 sm:px-8 py-4 sm:py-6 inline-flex items-center justify-center font-medium transition-colors text-sm sm:text-base"
                  >
                    Fale conosco +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas Section */}
      <section id="stats-section" className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-orange-200 uppercase tracking-wider text-xs sm:text-sm mb-2 animate-on-scroll from-top">
              MARCENARIA B'LUCCA MÓVEIS PLANEJADOS
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white animate-on-scroll">
              Serviços especializados de Marcenaria que você pode confiar.
            </h2>

            <p className="text-orange-100 mb-8 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed animate-on-scroll delay-100">
              Há mais de três décadas entregamos os nossos trabalhos de marcenaria sempre prezando pela ética, preço
              justo, transparência, respeito e qualidade dos nossos produtos, em especial o atendimento aos nossos
              clientes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center animate-on-scroll from-left">
                <div className="w-12 h-12 border-2 border-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-orange-200 w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <CountUp end={30} duration={1500} />
                  <span className="text-orange-200">+</span>
                </div>
                <div className="text-orange-100 text-xs sm:text-sm">Anos de Experiência</div>
              </div>

              <div className="text-center animate-on-scroll delay-100">
                <div className="w-12 h-12 border-2 border-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Hammer className="text-orange-200 w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <CountUp end={400} duration={2000} />
                  <span className="text-orange-200">+</span>
                </div>
                <div className="text-orange-100 text-xs sm:text-sm">Projetos de Sucesso</div>
              </div>

              <div className="text-center animate-on-scroll delay-200">
                <div className="w-12 h-12 border-2 border-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-orange-200 w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <CountUp end={385} duration={2000} />
                  <span className="text-orange-200">+</span>
                </div>
                <div className="text-orange-100 text-xs sm:text-sm">Clientes Satisfeitos</div>
              </div>

              <div className="text-center animate-on-scroll from-right delay-300">
                <div className="w-12 h-12 border-2 border-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-orange-200 w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <CountUp end={12} duration={1500} />
                  <span className="text-orange-200">+</span>
                </div>
                <div className="text-orange-100 text-xs sm:text-sm">Profissionais</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes Section */}
      <section className="py-12 md:py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Texto */}
              <div className="w-full lg:w-1/2 text-center lg:text-left animate-on-scroll from-left order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1D1F] mb-4">
                  Cada detalhe é pensado para oferecer um ambiente harmonioso e funcional.
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
                  Sempre em busca da máxima satisfação de nossos clientes, fabricamos móveis planejados de alta
                  qualidade e design moderno para compor seu ambiente.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-black/90 text-white rounded-none px-6 sm:px-8 py-4 sm:py-6 inline-flex items-center justify-center font-medium transition-colors text-sm sm:text-base"
                  >
                    Fale conosco +
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="w-full lg:w-1/2 flex justify-center animate-on-scroll from-right order-1 lg:order-2">
                <div className="w-full max-w-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/free-photo-of-sala-de-estar-moderna-com-design-de-interiores-neutro.jpg-76bxOxAR3cWHTfBdkoWyTjbmYc2tLp.jpeg"
                    alt="Sala de estar moderna"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section id="portfolio" className="py-12 md:py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="uppercase tracking-wider text-primary font-medium animate-on-scroll from-top text-xs sm:text-sm">
              PORTFÓLIO
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1D1F] mt-2 animate-on-scroll">
              Nossos últimos projetos
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4 animate-on-scroll delay-100 text-sm sm:text-base">
              Acompanhe e fique por dentro dos nossos últimos projetos de marcenaria de móveis planejados em residências
              e apartamentos.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg shadow-lg animate-on-scroll ${
                    index === 0 ? "from-left" : index === 2 ? "from-right" : ""
                  } delay-${index * 100}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{project.title}</h3>
                      <p className="text-white text-xs sm:text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-black/90 text-white rounded-none px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center font-medium transition-colors animate-on-scroll zoom text-sm sm:text-base"
              >
                Quero um projeto assim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1D1F] animate-on-scroll">
              Perguntas Frequentes
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mt-4 mb-6 md:mb-8 animate-on-scroll delay-100"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-on-scroll delay-200">
              Tire suas dúvidas sobre nossos serviços, processos e produtos. Se não encontrar o que procura, entre em
              contato conosco.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-on-scroll delay-300">
            <FAQSection />
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-black/90 text-white rounded-none px-6 sm:px-8 py-4 sm:py-6 inline-flex items-center justify-center font-medium transition-colors animate-on-scroll zoom text-sm sm:text-base"
            >
              Ainda tem dúvidas? Fale conosco
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 max-w-3xl">
            Serviços personalizados para criar o espaço dos seus sonhos
          </h2>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-black/90 text-white rounded-none px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 inline-flex items-center justify-center font-medium transition-colors border-2 border-white animate-on-scroll zoom delay-100 text-xs sm:text-sm md:text-base"
          >
            Fale conosco agora
          </a>

          <div className="flex space-x-4 mt-4 animate-on-scroll delay-200">
            <a
              href="https://www.instagram.com/bluccaplanejados/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white rounded-full hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </a>
            <a
              href="https://www.facebook.com/people/Blucca-Planejados/100090376152087/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white rounded-full hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </a>
          </div>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-kitchen-interior-design.jpg-53P9ijxlN9D1eES4ihcrQpiBPneyRu.jpeg"
          alt="Cozinha moderna"
          className="w-full h-full object-cover"
        />
      </footer>

      {/* Copyright */}
      <div className="bg-black py-4 sm:py-6 text-white">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-white/70">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span>Copyright © B'Lucca – Todos os direitos reservados.</span>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                Termos de Uso
              </Link>
              <Link href="#" className="hover:text-white">
                Políticas de Privacidade
              </Link>
              <Link href="#" className="hover:text-white">
                Políticas de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5C] transition-all duration-300 animate-initial zoom"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  )
}