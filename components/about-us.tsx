"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about-us" className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">Despre noi</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
          Suntem o echipă de specialiști pasionați de tehnologie, dedicați creării de experiențe audio-video
          excepționale pentru casa ta.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Home Theater Installation"
              width={500}
              height={500}
              className="object-cover rounded-2xl"
            />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#FF0000]/20 rounded-full -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold text-[28px] text-white mb-6">Povestea noastră</h3>
          <p className="text-[16px] text-white/70 mb-6">
            Fondată în 2010, Perfect Home Media a fost creată cu viziunea de a aduce tehnologia audio-video de ultimă
            generație în casele românilor. Am recunoscut că mulți proprietari de locuințe doresc sisteme de înaltă
            calitate, dar nu știu de unde să înceapă.
          </p>
          <p className="text-[16px] text-white/70 mb-8">
            Echipa noastră de experți combină cunoștințele tehnice cu gândirea creativă pentru a oferi soluții care nu
            doar îndeplinesc, ci depășesc așteptările clienților. Credem în construirea unor relații pe termen lung
            bazate pe încredere și rezultate.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-[#FF0000]">200+</span>
              <span className="text-white/70">Proiecte finalizate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-[#FF0000]">150+</span>
              <span className="text-white/70">Clienți mulțumiți</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-white">12+</span>
              <span className="text-white/70">Membri în echipă</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-white">10+</span>
              <span className="text-white/70">Ani de experiență</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all">
              Misiunea noastră
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
              Cunoaște echipa
            </button>
          </div>
        </motion.div>
      </div>

      {/* Additional About Us Content */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-bold text-[28px] text-white mb-6">Misiunea noastră</h3>
            <p className="text-[16px] text-white/70 mb-6">
              Misiunea noastră este să oferim soluții audio-video și smart home de cea mai înaltă calitate, adaptate
              perfect nevoilor și stilului de viață al fiecărui client. Ne străduim să transformăm tehnologia complexă
              în experiențe simple și plăcute.
            </p>
            <p className="text-[16px] text-white/70 mb-6">
              Credem în inovație, calitate și servicii personalizate. Fiecare proiect este tratat cu aceeași atenție la
              detalii, indiferent de dimensiune sau buget. Succesul nostru se măsoară prin satisfacția clienților și
              relațiile de lungă durată pe care le construim.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[28px] text-white mb-6">Valorile noastre</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Excelență</h4>
                  <p className="text-white/70">Ne străduim să oferim cele mai bune soluții și servicii în industrie.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Inovație</h4>
                  <p className="text-white/70">
                    Suntem mereu la curent cu cele mai noi tehnologii și tendințe din domeniu.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Integritate</h4>
                  <p className="text-white/70">
                    Acționăm cu onestitate și transparență în toate interacțiunile noastre.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
