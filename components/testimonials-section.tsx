import { Star } from "lucide-react"

interface TestimonialProps {
  initial: string
  name: string
  time?: string
  reviews?: number
  photos?: number
  rating: number
  text: string
  imageUrl?: string
}

export function Testimonial({ initial, name, time, reviews, photos, rating, text, imageUrl }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {imageUrl ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
            {initial}
          </div>
        )}
        <div>
          <h3 className="font-medium text-[#1C1D1F]">{name}</h3>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {time && <span className="mr-2">há {time}</span>}
              {reviews && <span className="mr-2">{reviews} críticas</span>}
              {photos && <span>• {photos} fotos</span>}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-left text-sm sm:text-base">{text}</p>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 px-4">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-2xl font-serif">"</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-primary uppercase tracking-wide">
            AVALIAÇÕES REAIS DO GOOGLE DE CLIENTES SATISFEITOS EM TODO BRASIL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <Testimonial
            initial="V"
            name="Viviane Prosofsky"
            time="3 semanas"
            reviews={6}
            photos={16}
            rating={5}
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-45yY39IQPLEPxVKTapSAjYiNiYjPYG.png"
            text="Trabalho com a BLucca há mais de 10 anos, sempre recomendei para meus clientes do segmento de arquitetura, amigos e familiares, inclusive já fiz dois apartamentos com eles e sempre tive minhas expectativas atendidas. É uma empresa séria que cumpre o acordado e se preocupa com a satisfação final do cliente."
          />

          <Testimonial
            initial="A"
            name="Amanda Siqueira"
            time="3 semanas"
            reviews={8}
            photos={2}
            rating={5}
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29-yFQSQCsUQRyJ64XdesQdaXOdqzzw2p.png"
            text="Excelente experiência com a BLucca! Atendimento atencioso, materiais de qualidade, compromisso com os prazos e um cuidado grande com os detalhes. Estou realizada com o meu projeto e sem dúvida faremos muito mais!!"
          />

          <Testimonial
            initial="S"
            name="Samara D'alessio"
            time="2 semanas"
            reviews={35}
            rating={5}
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-TdoFjGmjIqert4P1rqnwuTjAxtO9VP.png"
            text="São muito bons de trabalho. Rápidos objetivos e prestativos demais. Foram atenciosos, e muito focados. Fiz meus móveis a uns 8 anos com vcs e continuo recomendando de olhos fechados. Produto de alta qualidade, grande resistência e durabilidade."
          />
        </div>
      </div>
    </section>
  )
}
