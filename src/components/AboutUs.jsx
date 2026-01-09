import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const AboutUs = () => {
  const values = [
    {
      title: "YO AMO MOTUPE",
      description: "",
      image: "img/img3.jpg",
      type: "horizontal"
    },
    {
      title: "GRANJA FOTOGRÁFICA",
      description: "",
      image: "img/img4.jpg",
      type: "vertical"
    },
    {
      title: "ANTIGUA GRUTA DE CHALPÓN",
      description: "",
      image: "img/img5.jpeg",
      type: "vertical"
    },
    {
      title: "CERRO DE LA VÍRGEN",
      description: "",
      image: "img/img6.jpeg",
      type: "vertical"
    },
    {
      title: "SANTUARIO DE LA SANTÍSIMA CRUZ DE CHALPÓN",
      description: "",
      image: "img/img7.jpg",
      type: "vertical"
    }
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: `radial-gradient(
          100% 100% at 50% 100%,
          #FF9875 0%,
          #B452FF 15%,
          #673DE6 30%,
          #1a1b1e 80%
        )`
      }}
    >
      <Navigation title="Sobre Nosotros" backTo="/welcome" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Foto Studio Digital "MADUEÑO"
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Somos Foto Studio Digital Madueño, con más de 30 años de experiencia
            dedicados a capturar recuerdos que duran toda la vida. Nos apasiona
            la fotografía y trabajamos con compromiso y creatividad para ofrecer
            imágenes de alta calidad. Contamos con paisajes únicos y escenarios
            exclusivos que realzan cada sesión, brindando una experiencia
            inolvidable para nuestros clientes.
          </p>
        </motion.div>

        {/* Ubicación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Dónde nos ubicamos?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Puedes encontrarnos en la estación número 13 a un minuto del
            Santuario de la Santísima Cruz de Chalpón, en Motupe, Lambayeque,
            Perú. Nuestro estudio está estratégicamente ubicado para ofrecerte
            un acceso fácil y conveniente.
          </p>
        </motion.div>

        {/* Galería */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Te ofrecemos diferentes tomas fotográficas
          </h2>

          <div className="flex flex-col gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border border-white/20 ${
                  value.type === "horizontal" ? "h-56" : "h-[36rem]"
                }`}
              >
                <img
                  src={value.image}
                  alt={value.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 p-4 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-bold text-white">
                    {value.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div> 
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUs;
