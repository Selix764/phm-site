"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "Toate" },
    { id: "video", name: "Proiecte Video" },
    { id: "audio", name: "Proiecte Audio" },
    { id: "multimedia", name: "Proiecte Multimedia" },
  ]

  const projects = [
    {
      id: 1,
      title: "Home Cinema Premium",
      category: "video",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Sistem home cinema de ultimă generație cu proiector 4K și sistem audio surround 7.1.2.",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-[#0A0A0A]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">Galerie</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
          Explorați o selecție din proiectele noastre recente de home cinema, audio și smart home.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-2 rounded-full text-[15px] font-medium transition-all ${
              activeCategory === category.id
                ? "bg-[#FF0000] text-white"
                : "bg-[#1A1A1A] text-white/70 hover:bg-[#2A2A2A]"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#1A1A1A] rounded-2xl overflow-hidden group cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[240px]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-[#FF0000] text-sm font-medium uppercase">
                    {categories.find((cat) => cat.id === project.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/70">{project.description}</p>
              <button className="mt-4 text-[#FF0000] font-medium flex items-center gap-1 group-hover:underline">
                Vezi detalii
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
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-20 bg-[#1A1A1A] rounded-2xl p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[32px] text-white mb-4">Ai un proiect în minte?</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto mb-8">
          Contactează-ne astăzi pentru a discuta despre proiectul tău și pentru a afla cum te putem ajuta să-l
          transformi în realitate.
        </p>
        <motion.button
          className="px-8 py-3 bg-[#FF0000] text-white rounded-full font-medium hover:bg-[#FF0000]/90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contactează-ne
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-[#FF0000]"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span className="text-white text-sm">
            Urmărește canalul nostru de YouTube pentru cele mai noi videoclipuri
          </span>
        </div>
        <p className="text-white/70 max-w-[600px] mx-auto mb-4">
          Toate videoclipurile noi de pe canalul nostru de YouTube vor fi afișate aici. Nu rata nicio actualizare!
        </p>
      </motion.div>
    </section>
  )
}
