import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-150 w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover brightness-50"
          >
            <source src="/Devanture_moderne_de_202512181522_ef7yu.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Depuis 1987, Le Levain Fait La Différence
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Retrouvez nos pains traditionnels faits chaque jour à partir de farine bio Bourgogne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#specialites"
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#c09060] transition-colors"
            >
              Découvrir nos pains
            </Link>
            <Link
              href="/commande"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Commander en ligne
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Points Forts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-serif">
            Nos Engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pain_round.jpeg"
                  alt="Levain Naturel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-secondary font-serif">Levain Naturel</h3>
              <p className="text-gray-600">
                Nos pains fermentent 24h avec levain mère, améliorant digestion et saveur.
              </p>
            </div>
            {/* Point 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/farine.jpeg"
                  alt="Matières Locales"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-secondary font-serif">Matières Locales</h3>
              <p className="text-gray-600">
                Farines bio du moulin de Montbard à 40 km. Sel de Guérande.
              </p>
            </div>
            {/* Point 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/tri_selectif.jpeg"
                  alt="Zéro Déchet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-secondary font-serif">Zéro Déchet</h3>
              <p className="text-gray-600">
                Emballages compostables, partenariat avec AMAP locale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Spécialités */}
      <section id="specialites" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-serif">
            Nos Spécialités
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Baguette Tradition",
                desc: "Croustillante dehors, moelleuse dedans.",
                price: "0,85€",
                img: "/baguettetradition.jpeg",
              },
              {
                name: "Pain Complet",
                desc: "100% farine complète, riche en fibres.",
                price: "2,10€",
                img: "/PainComplet.jpeg",
              },
              {
                name: "Pain de Mie",
                desc: "Idéal petit-déj, texture fondante.",
                price: "1,50€",
                img: "/painmie.jpeg",
              },
              {
                name: "Croissant Beurre",
                desc: "Feuilletage maison, levure naturelle.",
                price: "1,20€",
                img: "/croissant.jpeg",
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-secondary font-serif">{product.name}</h3>
                    <span className="text-primary font-bold">{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/produits"
              className="inline-block border-b-2 border-secondary text-secondary font-semibold hover:text-primary hover:border-primary transition-colors"
            >
              Voir tous nos produits
            </Link>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-serif">
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Marie L.", text: "Excellent, c'est notre boulangerie depuis 20 ans !" },
              { name: "Philippe M.", text: "Pains délicieux, je reviens chaque weekend" },
              { name: "Sylvie D.", text: "Enfin une vraie boulangerie sans conservateurs" },
              { name: "Tom B.", text: "Le croissant tous les jeudis, c'est la routine !" },
            ].map((avis, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="flex text-primary mb-3">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-700 italic mb-4">"{avis.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                    {avis.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-secondary">{avis.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fournil.jpeg"
            alt="Fournil"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Vous avez des demandes spéciales ?
          </h2>
          <p className="text-xl mb-8">
            Pains sans gluten, catering pour événements ? N'hésitez pas à nous solliciter.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#c09060] transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
