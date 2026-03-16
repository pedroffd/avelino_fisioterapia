import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#fcfbf9] border-t border-gray-100 pb-12 pt-16 sm:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Newsletter */}
          <div className="space-y-8 xl:col-span-1 border-b border-gray-200 xl:border-none pb-12 xl:pb-0 mb-12 xl:mb-0">
            <Link
              href="/"
              className="font-serif text-3xl font-bold text-gray-900 tracking-tight"
            >
              Avelino<span className="text-[#556b2f]">Fisio</span>
            </Link>
            <p className="text-gray-500 text-sm leading-6 max-w-xs font-sans">
              Sistema de gestão de agendamentos focado na autonomia do
              profissional e na experiência do paciente.
            </p>
            <div className="flex flex-col space-y-3 max-w-sm">
              <p className="text-sm font-semibold text-gray-900">
                Assine nossa Newsletter
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Insira seu email"
                  className="min-w-0 flex-auto rounded-full border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#556b2f] sm:text-sm sm:leading-6 bg-white"
                  required
                />
                <button
                  type="submit"
                  className="flex-none rounded-full bg-[#556b2f] hover:bg-[#7e965a] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Produto
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Agendamento
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Prontuário Eletrônico
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      WhatsApp & IA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Planos e Preços
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Recursos
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Central de Ajuda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Guias de Gestão
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Empresa
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Parceiros
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-[#556b2f]"
                    >
                      Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-gray-500 font-sans">
            &copy; {new Date().getFullYear()} Avelino Fisioterapia SaaS. Todos
            os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#556b2f]">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#556b2f]">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#556b2f]">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#556b2f]">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
