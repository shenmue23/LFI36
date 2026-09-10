import { motion } from 'motion/react';
import { Twitter, Instagram, Globe, Youtube, Facebook, MessageCircle } from 'lucide-react';

const representants = [
  {
    name: "Jean-Luc Mélenchon",
    role: "Fondateur de La France Insoumise",
    description: "Figure de proue historique de l'Union Populaire et notre candidat désigné pour la prochaine élection présidentielle de 2027. Il a théorisé la révolution citoyenne et l'ère du peuple. Par ses discours, il continue d'inspirer les grandes luttes écologiques et sociales, portant avec force et constance le programme de l'Avenir en Commun.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/M%C3%A9lenchon_2027_-_55261894422_%28cropped%29.jpg",
    links: [
      { icon: <Globe size={18} />, url: "https://melenchon.fr/", title: "Blog" },
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/user/JLMelenchon", title: "YouTube" },
      { icon: <Twitter size={18} />, url: "https://twitter.com/JLMelenchon", title: "Twitter" },
    ],
  },
  {
    name: "Manuel Bompard",
    role: "Coordinateur de La France Insoumise",
    description: "Député des Bouches-du-Rhône et coordinateur national du mouvement. Fin stratège et directeur des campagnes présidentielles, il est un pilier essentiel de l'organisation politique. Il œuvre au quotidien pour la structuration de l'Union Populaire et l'ancrage territorial de nos luttes.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Manuel_Bompard_Manifestation_Liban_%28cropped%29.jpg/960px-Manuel_Bompard_Manifestation_Liban_%28cropped%29.jpg",
    links: [
      { icon: <Globe size={18} />, url: "https://manuelbompard.fr/", title: "Site web" },
      { icon: <Twitter size={18} />, url: "https://twitter.com/mbompard", title: "Twitter" },
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/manuel_bompard/", title: "Instagram" },
    ],
  },
  {
    name: "Mathilde Panot",
    role: "Présidente du groupe parlementaire LFI",
    description: "Députée du Val-de-Marne et présidente du groupe LFI-NFP à l'Assemblée Nationale. Militante infatigable issue du milieu associatif et des quartiers populaires, elle ferraille sans relâche dans l'hémicycle contre les politiques d'austérité et a mené la bataille historique pour la constitutionnalisation de l'IVG.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Mathilde_Panot_2021-3.jpg/960px-Mathilde_Panot_2021-3.jpg",
    links: [
      { icon: <Globe size={18} />, url: "https://mathildepanot.fr/", title: "Site web" },
      { icon: <Twitter size={18} />, url: "https://twitter.com/MathildePanot", title: "Twitter" },
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/mathilde.panot/", title: "Instagram" },
    ],
  },
  {
    name: "Manon Aubry",
    role: "Eurodéputée",
    description: "Tête de liste LFI aux élections européennes et co-présidente du groupe de La Gauche au Parlement européen. Issue des luttes associatives (Oxfam), elle mène un combat acharné contre l'évasion fiscale, le pouvoir des lobbys, les traités de libre-échange et milite pour une bifurcation écologique radicale.",
    image: "https://graph.facebook.com/ManonAubryFr/picture?width=600&height=600",
    links: [
      { icon: <Twitter size={18} />, url: "https://twitter.com/ManonAubryFr", title: "Twitter" },
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/manonaubryfr/", title: "Instagram" },
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/c/ManonAubry", title: "YouTube" },
    ],
  },
  {
    name: "David Guiraud",
    role: "Député du Nord",
    description: "Député du Nord et orateur redoutable, omniprésent dans l'espace médiatique et sur les réseaux sociaux. Il pourfend les inégalités et défend avec une ferveur sans concession la dignité des quartiers populaires et de la jeunesse.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/David_Guiraud_cropped_2024.jpg",
    links: [
      { icon: <Facebook size={18} />, url: "https://www.facebook.com/david.guiraud.50/?locale=fr_FR", title: "Facebook" },
      { icon: <Twitter size={18} />, url: "https://twitter.com/GuiraudInd", title: "Twitter" },
      { icon: <MessageCircle size={18} />, url: "https://www.tiktok.com/@david.guiraud", title: "TikTok" },
    ],
  },
  {
    name: "Bally Bagayoko",
    role: "Maire de Saint-Denis",
    description: "Maire d'une grande ville et figure emblématique de la Seine-Saint-Denis. Chef de file historique, son engagement chevillé au corps pour le sport, l'émancipation de la jeunesse, et le respect des habitants des quartiers populaires en fait un acteur de terrain incontournable et respecté.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Bally_Bagayoko_en_2026_%28cropped%29.png/960px-Bally_Bagayoko_en_2026_%28cropped%29.png",
    links: [
      { icon: <Twitter size={18} />, url: "https://twitter.com/BallyBAGAYOKO", title: "Twitter" },
      { icon: <Facebook size={18} />, url: "https://www.facebook.com/BallyBagayoko.page/", title: "Facebook" },
    ],
  },
  {
    name: "Antoine Léaument",
    role: "Député de l'Essonne",
    description: "Député de l'Essonne et figure incontournable de La France Insoumise, Antoine Léaument conserve un attachement profond à ses racines dans l'Indre (36), département où il a grandi. Véritable fer de lance de la communication numérique du mouvement, il déploie un travail titanesque sur les réseaux sociaux (Twitch, YouTube) pour contourner le monopole des médias traditionnels et diffuser largement nos idées humanistes. Passionné par l'Histoire et la Révolution française, il s'impose comme un orateur redoutable dans l'hémicycle de l'Assemblée nationale, où il défend avec une ferveur inébranlable la souveraineté populaire, la République sociale et la justice climatique. Face à la montée de l'extrême droite et à la casse des services publics, sa pédagogie redoutable et sa constance militante en font une voix majeure de l'Union Populaire. Par ses interventions percutantes, il incarne l'espoir d'une rupture politique radicale et la promesse de l'Avenir en Commun.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Antoine_L%C3%A9aument_le_21_juillet_2024_%28cropped%29.jpg",
    badge: "Natif de l'Indre (36)",
    links: [
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/c/AntoineLéaument", title: "YouTube" },
      { icon: <Twitter size={18} />, url: "https://twitter.com/ALeaument", title: "Twitter" },
      { icon: <Globe size={18} />, url: "https://www.twitch.tv/antoineleaument", title: "Twitch" },
    ],
  },
  {
    name: "Aymeric Compain",
    role: "Conseiller régional Centre-Val de Loire",
    description: "Principal porte-parole du mouvement insoumis dans le département de l'Indre (36), son ancrage local et son dévouement militant en font une figure incontournable de notre mouvement sur le territoire. Siégeant également en tant que conseiller municipal de la majorité à la mairie de Reuilly, il participe activement à la gestion locale et à la mise en œuvre d'une politique de proximité, ancrée dans le quotidien des habitants. Son engagement politique de longue date l'a conduit à porter haut les couleurs de l'Union Populaire à plusieurs reprises en tant que candidat aux élections législatives, défendant farouchement notre programme face à l'austérité. Infatigable défenseur des services publics, de l'écologie populaire et de l'économie sociale et solidaire au sein du Conseil régional, il poursuit ce travail de terrain acharné. Fort de cette légitimité et de ses combats, il est aujourd'hui notre candidat désigné pour représenter avec force les valeurs insoumises lors des élections sénatoriales de 2026. Un parcours de luttes ininterrompues pour redonner le pouvoir aux citoyens du département.",
    image: "https://graph.facebook.com/AymericCompainLFI/picture?width=600&height=600",
    badge: "Élu de l'Indre (36)",
    links: [
      { icon: <Globe size={18} />, url: "https://aymericcompain.fr/", title: "Site web" },
      { icon: <Facebook size={18} />, url: "https://www.facebook.com/AymericCompainLFI", title: "Facebook" },
      { icon: <Twitter size={18} />, url: "https://twitter.com/AymericCompain", title: "Twitter" },
    ],
  },
  {
    name: "Éloïse Gonzalez",
    role: "Candidate historique de la gauche unie",
    description: "Figure de proue des rassemblements unitaires et militante de conviction de la première heure. Elle a, à de très nombreuses reprises, bravé des scrutins majeurs en tant que candidate de la gauche réunie dans notre département, notamment lors des élections législatives où elle a tenu tête avec ténacité face aux vents dominants pour représenter l'Union Populaire et les espoirs d'une vraie justice sociale et environnementale. Ancrée profondément dans les réalités de l'Indre, Éloïse porte sans relâche la voix de ceux que l'on n'entend pas, tissant un lien indéfectible avec les travailleurs, les classes populaires, et les acteurs du monde associatif local. Sa force réside dans sa capacité à fédérer toutes les sensibilités de la gauche de rupture autour d'un programme ambitieux, combatif et radicalement tourné vers l'écologie populaire. Par ses campagnes marquantes et son opiniâtreté sur les marchés comme dans les urnes, elle continue d'incarner une opposition déterminée face à la casse sociale et la porte d'entrée incontournable vers l'Avenir en Commun pour des milliers d'électeurs indriens.",
    image: "https://graph.facebook.com/eloisegonzalezcirco1indreunionpopulaire/picture?width=600&height=600",
    badge: "Figure de l'Indre (36)",
    links: [],
  },
];

export default function Representants() {
  return (
    <section id="representants" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl uppercase text-slate-900 mb-6 font-black tracking-tight">
            Nos <span className="text-cyan-600">Porte-Voix</span>
          </h2>
          <p className="text-xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les grandes figures de notre mouvement qui portent le programme de l'Avenir en Commun, dans les médias, à l'Assemblée, ou au Parlement européen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {representants.map((rep, index) => (
            <motion.div
              key={rep.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group relative"
            >
              {rep.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    {rep.badge}
                  </span>
                </div>
              )}
              
              <div className={`aspect-[4/5] w-full relative overflow-hidden bg-slate-100 ${rep.image.includes('LFI_Logo') ? 'p-12' : ''}`}>
                <img 
                  src={rep.image} 
                  alt={rep.name}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${rep.image.includes('LFI_Logo') ? 'object-contain drop-shadow-md' : 'object-cover'}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    {rep.links.map(link => (
                      <a
                        key={link.title}
                        href={link.url}
                        title={link.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-cyan-500 p-2.5 rounded-full text-white backdrop-blur-sm transition-colors"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-1">{rep.name}</h3>
                <h4 className="text-sm font-bold text-cyan-700 uppercase tracking-wider mb-4">{rep.role}</h4>
                <p className="text-slate-600 font-medium text-sm mb-6 flex-grow">
                  {rep.description}
                </p>
                
                <div className="flex gap-2 mt-auto">
                  {rep.links.map(link => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-cyan-600 transition-colors bg-slate-50 px-3 py-1.5 rounded"
                    >
                      {link.icon} <span className="sr-only">{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
