import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { Heart, Rocket, Users, Globe } from 'lucide-react';

const AboutUs = () => {
  // Configuración de las tomas fotográficas
  const tomas = [
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y nos dedicamos completamente a cada proyecto.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800",
      layout: "horizontal" // Esta será la grande
    },
    {
      icon: Rocket,
      title: "Innovación",
      description: "Nuevas formas de mejorar.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      layout: "vertical"
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Resultados extraordinarios.",
      image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400",
      layout: "vertical"
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "Cambio positivo mundial.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400",
      layout: "vertical"
    }
  ];

  const team = [
    { name: "María García", role: "CEO & Fundadora", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
    { name: "Carlos Rodríguez", role: "Director de Tecnología", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { name: "Ana Martínez", role: "Directora de Diseño", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
    { name: "Juan López", role: "Director de Producto", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" }
  ];

  return (
    <div className="min-h-screen"
      style={{
        background: `radial-gradient(100% 100% at 50% 100%, var(--Gradients-Main-Color-4, #FF9875) 0%, var(--Gradients-Main-Color-3, #B452FF) 15%, var(--Gradients-Main-Color-2, #673DE6) 30%, var(--neutral--800, #1a1b1e) 80%)`
      }}
    >
      <Navigation title="Sobre Nosotros" backTo="/welcome" />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Foto Studio Digital "MADUEÑO"</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Somos Foto Studio Digital Madueño, con más de 30 años de experiencia dedicados a capturar recuerdos que duran toda la vida.
          </p>
        </motion.div>
        
        {/* Mission Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">¿Dónde nos ubicamos?</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Puedes encontrarnos en la estación número 13 a un minuto del santuario de la Santísima Cruz de Chalpón, en Motupe, Lambayeque, Perú.
          </p>
        </motion.div>
        
        {/* GALERÍA DE TOMAS (Grid Asimétrico para Móvil) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Te ofrecemos diferentes tomas fotográficas</h2>
          
          <div className="grid grid-cols-3 gap-3">
            {tomas.map((toma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden border border-white/20 shadow-lg ${
                  toma.layout === "horizontal" ? "col-span-3 h-48" : "col-span-1 h-60"
                }`}
              >
                <img src={toma.image} alt={toma.title} className="w-full h-full object-cover opacity-80" />
                
                {/* Overlay con gradiente para que se lea el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <toma.icon className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-white font-bold text-xs uppercase tracking-wider">{toma.title}</h3>
                  </div>
                  {toma.layout === "horizontal" && (
                    <p className="text-white/70 text-xs leading-tight">{toma.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Team Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {team.slice(0, 4).map((member, index) => (
            <motion.div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-white/70 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">¿Trabajamos juntos?</h3>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg active:scale-95 transition-transform">
            Únete a Nosotros
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
