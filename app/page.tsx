"use client"

import Link from "next/link"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Instagram, Facebook, Award, Hammer, Heart, Users } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  const whatsappLink = "https://wa.me/5511940177290?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados"

  return (
    <div className="min-h-screen bg-[#f9f9f9] overflow-x-hidden">
      <ScrollAnimation />
      
      {/* Header */}
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
            className="bg-[#E67E22] hover:bg-[#E67E22]/90 text-white rounded-none px-3 sm:px-4 md:px-6 py-2 inline-flex items-center justify-center h-8 sm:h-9 md:h-10 font-medium transition-colors text-xs sm:text-sm md:text-base flex-shrink-0"
          >
            <span className="hidden sm:inline">Solicitar Orçamento</span>
            <span className="sm:hidden">Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative h-full container mx-auto px-4 flex items-center z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projetos de Marcenaria que <span className="text-[#E67E22]">Transformam Espaços</span> em Ambientes Únicos e Funcionais.
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Projetos de marcenaria que aliam estética e funcionalidade, transformando espaços em ambientes únicos, acolhedores e personalizados para cada estilo de vida.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E67E22] hover:bg-[#E67E22]/90 text-white px-8 py-4 inline-flex items-center justify-center font-medium transition-colors text-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-kitchen-design.jpeg"
          alt="Cozinha moderna"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-4 text-[#E67E22]">DIFERENCIAIS</h2>
          <h3 className="text-center text-4xl font-bold mb-12">O que oferecemos</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Empresa Familiar com Atendimento Personalizado</h4>
              <p className="text-white/80">Somos uma marcenaria de família, e tratamos cada projeto como se fosse para nossa própria casa.</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Preço Justo com Transparência Total</h4>
              <p className="text-white/80">Na nossa marcenaria, prezamos por uma relação de confiança. Praticamos preços justos, alinhados à qualidade dos materiais.</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Proteção Extra Contra Desgaste e Danos</h4>
              <p className="text-white/80">Usamos acabamentos de alta proteção para que seu móvel continue novo por muito mais tempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Cada detalhe é pensado para oferecer um ambiente harmonioso e funcional.</h2>
              <p className="text-gray-600 mb-8">
                Sempre em busca da máxima satisfação de nossos clientes, fabricamos móveis planejados de alta qualidade e design moderno para compor seu ambiente.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E67E22] hover:bg-[#E67E22]/90 text-white px-8 py-4 inline-flex items-center justify-center font-medium transition-colors"
              >
                Fale conosco +
              </a>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-kitchen.jpeg"
                alt="Cozinha planejada"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/mission-icon-handshake.jpeg" alt="Missão" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Buscamos promover o bem-estar de todos incluindo clientes funcionários e sociedade, focando na ética, transparência e integridade no serviço.
              </p>
            </div>
            
            <div className="text-center">
              <img src="/vision-icon-shield.png" alt="Visão" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Com integridade, honestidade, responsabilidade e busca pela execução buscamos ser agentes de transformação positiva na sociedade e com nossos clientes.
              </p>
            </div>
            
            <div className="text-center">
              <img src="/values-icon-heart.png" alt="Valores" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600">
                Buscamos respeitar a dignidade de clientes e funcionários valorizando as suas diferenças e tratando-os com respeito e dignidade.
              </p>
            </div>

            <div className="text-center">
              <img src="/checkmark-icon.png" alt="Projetos" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Projetos para casa completa</h3>
              <p className="text-gray-600">
                De alta qualidade e preço justo!
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E67E22] hover:bg-[#E67E22]/90 text-white px-6 py-3 inline-flex items-center justify-center font-medium transition-colors mt-4"
              >
                Fale conosco +
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transforme seu espaço em realidade</h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E67E22] hover:bg-[#E67E22]/90 text-white px-8 py-4 inline-flex items-center justify-center font-medium transition-colors mb-8"
            >
              Solicite seu orçamento
            </a>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] transition-colors"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  )
}