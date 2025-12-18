import Image from "next/image";

export default function Histoire() {
  const team = [
    {
      name: "Jean Dupont",
      role: "Maître Boulanger",
      bio: "37 ans de métier, CAP 1986, perfectionné en Suisse. Créateur de notre levain secret.",
      img: "https://placehold.co/300x300/D4A574/FFFFFF?text=Jean",
    },
    {
      name: "Marie Dupont",
      role: "Vendeuse & Accueil",
      bio: "Épouse de Jean, gère la boutique avec sourire depuis 1990.",
      img: "https://placehold.co/300x300/5C4033/FFFFFF?text=Marie",
    },
    {
      name: "Lucas",
      role: "Apprenti",
      bio: "Apprenti CAP 1ère année, passion pour le fournil.",
      img: "https://placehold.co/300x300/6B8E23/FFFFFF?text=Lucas",
    },
    {
      name: "Sophie",
      role: "Vendeuse",
      bio: "Rejoint l'équipe en 2015, experte en conseils produits.",
      img: "https://placehold.co/300x300/FBF7F0/2C2C2C?text=Sophie",
    },
    {
      name: "Thomas",
      role: "Boulanger",
      bio: "Bras droit de Jean, spécialiste des viennoiseries.",
      img: "https://placehold.co/300x300/D4A574/FFFFFF?text=Thomas",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-100 w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x400/2C2C2C/FFFFFF?text=Notre+Histoire"
            alt="Notre Histoire"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            La Maison des Pains depuis 1987
          </h1>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative h-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/700x400/5C4033/FFFFFF?text=Boulangerie+1990"
              alt="La boulangerie dans les années 90"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-secondary font-serif">Une passion familiale</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Tout a commencé en 1987, lorsque Jean et Marie Dupont ont décidé de reprendre la vieille boulangerie du quartier. Avec une vision simple mais exigeante : redonner au pain ses lettres de noblesse.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Au fil des décennies, la Maison des Pains est devenue une institution locale. Nous avons vu grandir les enfants du quartier qui viennent aujourd'hui acheter le pain pour leurs propres familles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Malgré l'évolution des techniques, notre engagement reste le même : du temps, de bons ingrédients, et beaucoup d'amour pour le métier.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary font-serif">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-serif">Savoir-Faire</h3>
              <p className="text-gray-600">
                Un artisanat véritable, certifié par des années d'expérience et de formation continue.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-serif">Proximité</h3>
              <p className="text-gray-600">
                Une relation de confiance avec nos clients, que nous connaissons souvent par leur prénom.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-serif">Engagement Local</h3>
              <p className="text-gray-600">
                Nous privilégions les circuits courts avec des fournisseurs situés à moins de 100km.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary font-serif">Notre Équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 hover:shadow-lg transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-background">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary font-serif">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm italic">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

