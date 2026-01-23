import React from "react";
import { motion } from "framer-motion";
import inara from "../../../assets/images/inara.jpg";
import "./_introduction.scss";

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="intro" className="intro-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Image Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Image with premium border */}
              <div className="relative overflow-hidden rounded-lg border border-border-light shadow-glass">
                <img
                  className="w-full h-auto object-cover"
                  src={inara}
                  alt="Inara Angra - Jornalista"
                  loading="lazy"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight">
                Inara Angra
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-text-secondary font-sans font-medium tracking-wide">
                Jornalista | Repórter | Produtora | Apresentadora
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="h-px w-20 bg-accent-purple-500" />

            <motion.div variants={itemVariants}>
              <p className="text-text-secondary font-sans text-base md:text-lg leading-relaxed max-w-2xl">
                Sou jornalista formada pela UNIFAE, em São João da Boa Vista (SP), e atualmente curso Publicidade e Propaganda pela UniCESUMAR (EAD), em busca de expandir conhecimento na comunicação.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-text-secondary font-sans text-base md:text-lg leading-relaxed max-w-2xl">
                Tenho 24 anos e atuo há mais de dois anos na área de televisão, com passagem também pelo rádio. Hoje, trabalho como produtora multimídia na Rede Mais | Record, em Varginha (MG), onde faço reportagens, entradas ao vivo e produção. Também tenho experiência com edições simples para redes sociais, principalmente vídeos voltados ao Instagram.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-text-secondary font-sans text-base md:text-lg leading-relaxed max-w-2xl">
                Sou uma pessoa curiosa e adaptável. Neste portfólio, será possível conhecer um pouco do meu trabalho ao longo dos últimos anos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
