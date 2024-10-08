import { Camera, Wand2, MessageCircle } from "lucide-react"
import Examples from './assets/examples.png'

export default function Component() {

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-yellow-100 via-orange-200 to-pink-200 font-sans">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-orange-400 to-pink-400">
        <a className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6 text-yellow-200" />
          <span className="ml-2 text-2xl font-bold text-yellow-200">Imagica.lol 🇲🇽</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-yellow-200" href="#">
            Chido 👌
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-yellow-200" href="#">
            Cómo Jala 🤔
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-yellow-200" href="#">
            Quiénes Somos 🤠
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-600 via-purple-500 to-pink-500">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-yellow-300 drop-shadow-lg mb-8">
                  ¡Transforma tus Selfies con Magia! 🧙‍♂️✨
                </h1>
                <img
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last sm:max-w-[200px] lg:max-w-[750px]"
                  alt="Transformaciones de Imagica"
                  height="310"
                  src={Examples}
                  width="550"
                />

              </div>
              <a
                className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2 text-lg px-6 py-3 rounded-full animate-bounce mt-10"
                href="https://wa.me/5219983027241"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                ¡Échale, Compa! 😆
              </a>
              <p className="mx-auto max-w-[700px] text-yellow-100 md:text-xl">
                Imagica.lol convierte tus selfies comunes en aventuras bien locas. ¡Sé un cantante de regional mexicano 🎤, monta un
                alebrije 🐉, o aparece en La Rosa de Guadalupe 📺 - todo por WhatsApp! 🤣
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-500 via-orange-400 to-yellow-400">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800 text-center mb-8">
              Cómo Jala 😎
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-12 w-12 text-purple-800 mb-4" />
                <h3 className="text-xl font-bold text-purple-900">1. Mándanos un Whats 💬</h3>
                <p className="text-purple-950">Inicia una plática con Imagica.lol en WhatsApp.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Camera className="h-12 w-12 text-purple-800 mb-4" />
                <h3 className="text-xl font-bold text-purple-900">2. Paga y manda 10 Fotos 📸</h3>
                <p className="text-purple-950">tuyas con diferentes angulos y fondos.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Wand2 className="h-12 w-12 text-purple-800 mb-4" />
                <h3 className="text-xl font-bold text-purple-900">3. Recibe la Magia 🎩✨</h3>
                <p className="text-purple-950">Escoje 10 ideas y generaremos tus fotos en un dos por tres! ¡Te vas a morir de risa!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-400 via-green-400 to-blue-400">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Transformaciones de Imagica"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src={Examples}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                    Tus Fotos, Reimaginadas 🖼️🤯
                  </h2>
                  <p className="max-w-[600px] text-purple-950 md:text-xl">
                    Con Imagica.lol, no solo tomas fotos - ¡creas nuevas realidades! ¡Conviértete en un luchador profesional 🤼‍♂️, un
                    taquero experto 🌮, o protagoniza tu telenovela favorita 📺! ¡Las posibilidades son tan infinitas como los baches en la CDMX! 😂
                  </p>
                </div>
                <a
                  className="bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2 px-6 py-3 w-fit rounded-full animate-pulse"
                  href="https://wa.me/5219983027241"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  ¡Ándale, Pruébalo en WhatsApp! 🚀
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-300">
                  ¿Listo para Echarte unas Risas con Nuevas Fotos? 🤣📸
                </h2>
                <p className="mx-auto max-w-[600px] text-yellow-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¡Únete a miles de personas felices y comienza tu aventura con Imagica.lol hoy! Advertencia: ¡Te vas a morir de risa! 😂
                </p>
              </div>
              <a
                className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2 text-lg px-6 py-3 rounded-full animate-bounce"
                href="https://wa.me/5219983027241"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                ¡Ábrele al WhatsApp y Diviértete! 🤪
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-purple-400 to-pink-400 border-yellow-300">
        <p className="text-xs text-yellow-200">© 2023 Imagica.lol S.A. de C.V. Todos los derechos reservados. Ningún meme fue lastimado en la creación de este sitio web. 😉</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-yellow-200" href="#">
            Términos y Condiciones (Neta) 📜
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-yellow-200" href="#">
            Privacidad (¡No es Cotorreo!) 🔒
          </a>
        </nav>
      </footer>
    </div>
  )
}
