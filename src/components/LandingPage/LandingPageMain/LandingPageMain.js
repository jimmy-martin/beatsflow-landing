import LandingPageSection from './LandingPageSection';
import landing1 from '../../../assets/images/landing-1.png';
import landing2 from '../../../assets/images/landing-2.png';
import landing3 from '../../../assets/images/landing-3.png';

const sections = [
  {
    title:
      'Trouvez les beats parfaits pour votre projet musical sur notre plateforme en ligne sécurisée',
    content:
      "Un site de vente de beats est avant tout une plateforme en ligne qui propose des beats de haute qualité à des artistes en recherche de musique originale pour leurs projets musicaux. La principale fonction de ce type de site est de permettre aux utilisateurs d'acheter des beats en ligne, de manière simple, rapide et sécurisée.",
    imgSource: landing1,
    imgAlt: 'landing1',
  },
  {
    title:
      "Découvrez des milliers de beats adaptés à votre style musical grâce à nos fonctionnalités de recherche et d'écoute",
    content:
      "En plus de la vente de beats, un site de vente de beats peut également offrir des fonctionnalités telles que la recherche de beats par style, le tri par popularité ou par prix, ainsi que la possibilité d'écouter des extraits de chaque beat avant de faire un achat. Ces fonctionnalités aident les artistes à trouver rapidement et facilement des beats qui correspondent à leur style et à leur budget.",
    imgSource: landing2,
    imgAlt: 'landing2',
  },
  {
    title:
      'Créez des beats uniques et personnalisés pour votre projet musical grâce à nos options de personnalisation',
    content:
      "Un site de vente de beats peut également offrir des options de personnalisation pour les artistes qui cherchent un beat plus adapté à leur projet musical. Cela peut inclure la possibilité de modifier la structure du beat, d'ajouter des effets sonores ou d'instrumentation supplémentaires, et même de demander des beats personnalisés spécialement conçus pour répondre aux besoins d'un artiste ou d'un groupe. En somme, un site de vente de beats est un outil indispensable pour tout artiste à la recherche de musique originale de haute qualité pour leurs projets musicaux.",
    imgSource: landing3,
    imgAlt: 'landing3',
  },
];

const LandingPageMain = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 px-2 mx-auto text-center lg:text-left md:py-10 gap-x-16 lg:items-start">
      {sections.map((section, index) => {
        return (
          <LandingPageSection
            key={index}
            title={section.title}
            content={section.content}
            imgSource={section.imgSource}
            imgAlt={section.imgAlt}
          />
        );
      })}
    </div>
  );
};

export default LandingPageMain;
