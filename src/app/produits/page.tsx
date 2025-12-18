import Image from "next/image";
import Link from "next/link";

export default function Produits() {
  const products = [
    {
      name: "Baguette Tradition",
      desc: "Croustillante dehors, moelleuse dedans.",
      ingredients: "Farine T65, eau, sel, levure.",
      price: "0,85€",
      availability: "Tous les jours",
      category: "Pains",
      img: "/baguettetradition.jpeg",
    },
    {
      name: "Pain Complet",
      desc: "100% farine complète, riche en fibres.",
      ingredients: "Farine complète T150, eau, sel, levain.",
      price: "2,10€",
      availability: "Tous les jours",
      category: "Pains",
      img: "/PainComplet.jpeg",
    },
    {
      name: "Pain de Mie",
      desc: "Idéal petit-déj, texture fondante.",
      ingredients: "Farine T55, lait, beurre, sucre, levure.",
      price: "1,50€",
      availability: "Tous les jours",
      category: "Pains",
      img: "/painmie.jpeg",
    },
    {
      name: "Croissant Beurre",
      desc: "Feuilletage maison, levure naturelle.",
      ingredients: "Farine T45, beurre AOP, sucre, lait, levure.",
      price: "1,20€",
      availability: "Tous les jours",
      category: "Viennoiseries",
      img: "/croissant.jpeg",
    },
    {
      name: "Pain aux Noix & Raisins Secs",
      desc: "Pain de mie enrichi de noix concassées et raisins secs. Parfait pour le goûter des enfants.",
      ingredients: "Farine bio T80, levain naturel, noix BIO, raisins secs, sel Guérande, eau.",
      price: "2,80€",
      availability: "Tous les jours sauf mardi",
      category: "Spécialités",
      img: "/painnoixraisin.jpeg",
    },
    {
      name: "Pain de Campagne",
      desc: "Un grand classique, mie alvéolée et croûte épaisse.",
      ingredients: "Farine T80, seigle, levain, sel, eau.",
      price: "1,90€",
      availability: "Tous les jours",
      category: "Pains",
      img: "/paincampagne.jpeg",
    },
    {
      name: "Pain Sans Gluten",
      desc: "À base de farine de riz et sarrasin.",
      ingredients: "Farine de riz, farine de sarrasin, fécule, psyllium.",
      price: "3,50€",
      availability: "Sur commande",
      category: "Sans Gluten",
      img: "/painsansgluten.jpeg",
    },
    {
      name: "Pain au Chocolat",
      desc: "Feuilletage pur beurre et barres de chocolat noir.",
      ingredients: "Farine, beurre, chocolat, sucre, lait.",
      price: "1,30€",
      availability: "Tous les jours",
      category: "Viennoiseries",
      img: "/Pain_au_chocolat_2k_202512181548.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x400/5C4033/FFFFFF?text=Nos+Pains+et+Produits"
            alt="Nos Pains"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Du Pain pour Tous les Goûts
          </h1>
          <p className="text-xl font-light">
            Découvrez notre gamme complète de pains et viennoiseries
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters (Visual only for now) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Tous", "Pains", "Viennoiseries", "Sans Gluten", "Spécialités"].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full border-2 transition-colors ${
                  filter === "Tous"
                    ? "bg-primary border-primary text-white"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-secondary font-serif">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{product.desc}</p>
                  <div className="text-xs text-gray-500 mb-4">
                    <strong>Ingrédients:</strong> {product.ingredients}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                      ✓ {product.availability}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commande Spéciale */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-secondary font-serif">
            Vous organisez un événement ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nous préparons pains et viennoiseries sur commande pour vos réceptions, mariages et séminaires.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
