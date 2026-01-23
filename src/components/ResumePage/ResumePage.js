import React, { Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconMail,
  IconMapPin,
  IconBriefcase,
  IconPhone,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconDownload,
  IconSchool,
  IconCalendar
} from "@tabler/icons-react";
import profile from "../../assets/images/inara-angra-apresentadora.jpeg";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_resume.scss";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: "Rede Mais / Record",
      link: "https://redemais.tv.br/",
      role: "Produtora Multimídia",
      location: "Varginha, MG",
      period: "Julho, 2025 - Até o momento",
      type: "Presencial"
    },
    {
      company: "BAND FM - Poços de Caldas",
      link: "https://www.bandfmpocos.com.br/",
      role: "Produtora e Apresentadora do Manhã Show e Happy Hour",
      location: "Poços de Caldas, MG",
      period: "Janeiro, 2025 - Julho, 2025",
      type: "Presencial"
    },
    {
      company: "TV Plan",
      link: "https://tvplan.com.br/",
      role: "Repórter, produtora, gestora de mídias",
      location: "Poços de Caldas, MG",
      period: "Julho, 2023 - Julho, 2025",
      type: "Presencial"
    },
    {
      company: "INB - Indústrias Nucleares do Brasil",
      link: "https://www.inb.gov.br/",
      role: "Estágio em Publicidade e Propaganda",
      location: "Caldas, MG",
      period: "2022 - 2023",
      type: "Presencial"
    },
    {
      company: "Grupo MDM Network & Elity Digital",
      link: "https://www.linkedin.com/company/elity-mdm",
      role: "Copywriter",
      location: "Poços de Caldas, MG",
      period: "Janeiro, 2023 - Março, 2023",
      type: "Híbrido"
    },
    {
      company: "TV Plan",
      link: "https://tvplan.com.br/",
      role: "Estágio em Publicidade e Propaganda",
      location: "Poços de Caldas, MG",
      period: "Janeiro, 2023",
      type: "Presencial"
    },
    {
      company: "INB - Indústrias Nucleares do Brasil",
      link: "https://www.inb.gov.br/",
      role: "Estágio em Jornalismo",
      location: "Caldas, MG",
      period: "Novembro, 2021 - Dezembro, 2022",
      type: "Presencial"
    },
    {
      company: "EPTV Sul de Minas",
      link: "https://institucional.eptv.com.br/televisao/cobertura/suldeminas.aspx",
      role: "Estágio em Jornalismo",
      location: "Poços de Caldas, MG",
      period: "Janeiro, 2021 - Outubro, 2021",
      type: "Remoto"
    },
    {
      company: "TV Poços",
      link: "https://tvpocos.com.br/",
      role: "Estagio em Jornalismo e Reporter",
      location: "Poços de Caldas, MG",
      period: "Setembro, 2020 - Dezembro, 2020",
      type: "Presencial"
    },
    {
      company: "DMAE - Departamento Municipal de Água e Esgoto de Poços de Caldas",
      link: "http://dmaepc.mg.gov.br/",
      role: "Estagio em Jornalismo",
      location: "Poços de Caldas, MG",
      period: "Fevereiro, 2020 - Dezembro, 2020",
      type: "Presencial"
    }
  ];

  const getBadgeClass = (type) => {
    switch (type) {
      case "Presencial":
        return "badge-presencial";
      case "Híbrido":
        return "badge-hibrido";
      case "Remoto":
        return "badge-remoto";
      default:
        return "badge-presencial";
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="resume-page">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column - Sticky Sidebar */}
            <motion.aside
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24 space-y-8">
                {/* Profile Card */}
                <div className="profile-card">
                  <div className="profile-image-container">
                    <img
                      className="profile-image"
                      src={profile}
                      alt="Perfil de Inara Angra"
                    />
                  </div>
                  <h2 className="profile-name">Inara Angra</h2>
                  <p className="profile-title">Jornalista</p>

                  {/* Contact Info */}
                  <div className="contact-list">
                    <a href="mailto:inaraangra@hotmail.com" className="contact-item">
                      <IconMail className="w-4 h-4" />
                      <span>inaraangra@hotmail.com</span>
                    </a>
                    <div className="contact-item">
                      <IconMapPin className="w-4 h-4" />
                      <span>Varginha, Minas Gerais, Brasil</span>
                    </div>
                    <a
                      href="https://redemais.tv.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item"
                    >
                      <IconBriefcase className="w-4 h-4" />
                      <span>Rede Mais | Record</span>
                    </a>
                    <a href="https://wa.me/5535998084624/" className="contact-item">
                      <IconPhone className="w-4 h-4" />
                      <span>(35) 9 9808-4624</span>
                    </a>
                  </div>
                </div>

                {/* Education */}
                <div className="section-card">
                  <h3 className="section-title">Formação</h3>
                  <div className="space-y-6">
                    <div className="education-item">
                      <a
                        href="https://unifae.edu.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-institution"
                      >
                        UNIFAE
                      </a>
                      <div className="education-detail">
                        <IconSchool className="w-4 h-4" />
                        <span>Comunicação Social com ênfase em Jornalismo</span>
                      </div>
                      <div className="education-detail">
                        <IconCalendar className="w-4 h-4" />
                        <span>Janeiro, 2019 - Dezembro, 2022</span>
                      </div>
                    </div>

                    <div className="education-item">
                      <a
                        href="https://www.unicesumar.edu.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-institution"
                      >
                        UNICESUMAR
                      </a>
                      <div className="education-detail">
                        <IconSchool className="w-4 h-4" />
                        <span>Comunicação Social com ênfase em Publicidade e Propaganda</span>
                      </div>
                      <div className="education-detail">
                        <IconCalendar className="w-4 h-4" />
                        <span>Janeiro, 2023 - Até o momento</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="section-card">
                  <h3 className="section-title">Social</h3>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/inaraangra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <IconBrandLinkedin className="w-5 h-5" />
                      <span>Inara Angra</span>
                    </a>
                    <a
                      href="https://www.instagram.com/inaraangra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <IconBrandInstagram className="w-5 h-5" />
                      <span>@inaraangra</span>
                    </a>
                  </div>
                </div>

                {/* Download CV CTA */}
                <motion.a
                  href="https://inaraangra.com.br/InaraAngra-Jornalista.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-cv-button group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconDownload className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                  <span>Download PDF</span>
                </motion.a>
              </div>
            </motion.aside>

            {/* Right Column - Experience Timeline */}
            <motion.main
              className="lg:col-span-8 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Professional Summary */}
              <div className="summary-card">
                <h3 className="section-title">Resumo Profissional</h3>
                <div className="summary-text space-y-4">
                  <p>
                    Atualmente, atuo como Produtora Multimídia na Rede Mais | Record TV, em Varginha (MG), fazendo entradas ao vivo, reportagens e produção.
                  </p>
                  <p>
                    Tenho experiência nas áreas de televisão e rádio, com passagem pelo Grupo Cioffi de Comunicação. No grupo, fui apresentadora dos programas "Manhã Show" e "Happy Hour", na Band FM de Poços de Caldas. Já na TV Plan, afiliada da TV Brasil, atuei em várias funções, como: repórter, apresentadora, produtora, gestora de redes sociais e, em alguns períodos, como diretora de jornalismo.
                  </p>
                  <p>
                    Também acumulo experiências anteriores em estágios nas áreas de TV e assessoria de comunicação.
                  </p>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="timeline-section">
                <h3 className="section-title mb-8">Experiências Profissionais</h3>
                <div className="timeline-container">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="timeline-marker" />
                      <div className="timeline-content">
                        <div className="experience-header">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-company"
                          >
                            {exp.company}
                          </a>
                          <span className={`experience-badge ${getBadgeClass(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="experience-role">{exp.role}</h4>
                        <div className="experience-meta">
                          <div className="experience-meta-item">
                            <IconMapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="experience-meta-item">
                            <IconCalendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="timeline-quote">
                  "Só quem sonha consegue alcançar"
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ResumePage;
