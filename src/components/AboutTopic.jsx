import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { Lightbulb, Target, TrendingUp, Award } from 'lucide-react';

const AboutTopic = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Exploramos nuevas formas de resolver problemas complejos con soluciones creativas."
    },
    {
      icon: Target,
      title: "Enfoque",
      description: "Nos centramos en entregar resultados medibles y de alto impacto."
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      description: "Impulsamos el desarrollo continuo y la mejora constante."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en todo lo que hacemos."
    }
  ];
  
  return (
    <div className="min-h-screen"
      style={{
        background: `radial-gradient(100% 100% at 50% 100%, var(--Gradients-Main-Color-4, #FF9875) 0%, var(--Gradients-Main-Color-3, #B452FF) 15%, var(--Gradients-Main-Color-2, #673DE6) 30%, var(--neutral--800, #1a1b1e) 80%)`
      }}
    >
      <Navigation title="Sobre la Santísima Cruz de Motupe" backTo="/welcome" />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-2xl">
            <img 
              src="img/img2.jpg"
 
              alt="Topic illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            La Santísima Cruz de Motupe: historia, tradición y devoción.
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            La Santísima Cruz de Motupe no es solo un objeto religioso: es un símbolo profundo de fe, identidad y esperanza para miles de devotos en el norte del Perú. Cada año, especialmente en el mes de agosto, peregrinos de distintas regiones ascienden al cerro Chalpón movidos por la promesa, la gratitud y la tradición, reafirmando un vínculo espiritual que ha perdurado por generaciones.
          </p>
        </motion.div>
        
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">¿Cuál es la historia de la Santísima Cruz de Motupe?</h2>
          <div className="space-y-4 text-white/80">
            <p>
             La devoción a la Santísima Cruz de Motupe tiene sus raíces en el siglo XIX y está profundamente ligada a la figura del ermitaño Juan Agustín de Abad, un hombre dedicado a la oración, la penitencia y la vida solitaria en el cerro Chalpón, ubicado en el distrito de Motupe, región Lambayeque.
             </p>
            <p>
             Según la tradición, Juan Agustín llegó al cerro alrededor de 1860 buscando un lugar de retiro espiritual. En una cueva del Chalpón colocó una cruz de madera, que se convirtió en el centro de su vida religiosa. Durante años guardó en secreto su existencia, considerándola un símbolo sagrado que solo debía ser revelado cuando llegara el momento indicado. 
            </p>
            <p>
            Antes de morir, en 1868, el ermitaño confió a pobladores de Motupe la ubicación de la cruz y pidió que fuera venerada. Tras su fallecimiento, los pobladores subieron al cerro y hallaron la cruz, iniciándose así una devoción popular que fue creciendo con el paso del tiempo.
            </p>
             <p>
            Con los años, los fieles comenzaron a atribuirle milagros, favores y protección, especialmente relacionados con la salud, el trabajo y la unidad familiar. Esto dio origen a la tradicional peregrinación anual en agosto, cuando miles de devotos ascienden al cerro Chalpón como acto de fe, sacrificio y agradecimiento.
            </p>
             <p>
            La Santísima Cruz de Motupe no solo representa un símbolo religioso, sino también un elemento central de la identidad cultural del pueblo motupano y de todo el norte del Perú.
            </p>
          </div>
        </motion.div>
       
         {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué ocurrió con el camino tradicional hacia el cerro Chalpón?</h2>
          <div className="space-y-4 text-white/80">
            <p>
          En el año 2017, el cerro Chalpón sufrió graves consecuencias a causa de un huaico y derrumbes provocados por el Fenómeno de El Niño, lo que marcó un antes y un después en la peregrinación hacia la Santísima Cruz de Motupe. Estos desastres naturales dañaron severamente el camino tradicional que los fieles recorrían desde hace décadas.  
          </p>
            <p>
           Como consecuencia directa, la capilla principal quedó aislada, imposibilitando el acceso seguro por la ruta original. Uno de los daños más significativos fue la pérdida de la Estación número 14, por lo que actualmente solo existen 13 estaciones en el recorrido hacia el santuario.
           </p>
          <p>
          Ante esta situación, y con el fin de no interrumpir la devoción ni la peregrinación anual, las autoridades y la comunidad decidieron habilitar una capilla provisional para los peregrinos, ubicada entre la estación 12 y el punto final del ascenso. Este espacio cumple un rol fundamental, ya que permite a los fieles realizar sus oraciones y actos de fe de manera segura.
           </p>
             <p>
          Estos acontecimientos pusieron a prueba la fortaleza espiritual del pueblo creyente, demostrando que, aun cuando el camino físico se ve afectado por la naturaleza, la fe encuentra siempre una manera de continuar.
            </p>
          </div>
        </motion.div>

          {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué ocurrió con el robo de la Santísima Cruz de Motupe?</h2>
          <div className="space-y-4 text-white/80">
            <p>
             El hecho más grave y recordado relacionado con la seguridad de la Santísima Cruz de Motupe ocurrió en la madrugada del 5 de julio de 2011, cuando delincuentes perpetraron un robo sacrílego en la gruta ubicada en el cerro Chalpón. De acuerdo con reportes de la prensa nacional, los responsables desmontaron la cruz, la cortaron en varias partes y se la llevaron, pese a que estaba asegurada con candados y contaba con vigilancia.
             </p>
            <p>
            El robo causó una conmoción nacional y un profundo dolor entre los fieles, ya que la cruz original tenía más de un siglo de antigüedad y estaba cubierta de joyas de oro y plata donadas por devotos como ofrendas de fe. Al día siguiente, el 6 de julio de 2011, la cruz fue hallada en las afueras del caserio Zapote, cortada en cinco partes, parcialmente quemada y despojada de todas sus joyas.
            </p>
             <p>
            La investigación permitió la captura de los responsables días después, quienes posteriormente fueron condenados a penas de hasta siete años de prisión por el delito de hurto agravado. Tras su recuperación, la cruz fue restaurada y devuelta a la devoción pública, bajo medidas de seguridad más estrictas.
            </p>
            <p>
            Este episodio dejó una huella profunda en la historia de la Santísima Cruz de Motupe, pero también reafirmó que, aun frente a un atentado tan doloroso, la fé del pueblo motupano y de miles de peregrinos del país entero permaneció firme e inquebrantable.
            </p>
           
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutTopic;