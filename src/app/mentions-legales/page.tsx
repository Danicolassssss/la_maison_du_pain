export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-secondary font-serif">Mentions Légales & Politique de Confidentialité</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-secondary">1. Informations Légales</h2>
          <p className="mb-2"><strong>Raison sociale :</strong> La Maison des Pains</p>
          <p className="mb-2"><strong>Adresse :</strong> 23 rue de la Liberté, 21800 Quetigny</p>
          <p className="mb-2"><strong>SIRET :</strong> 81234567890123</p>
          <p className="mb-2"><strong>TVA Intracommunautaire :</strong> FR12812345678</p>
          <p className="mb-2"><strong>Responsable de la publication :</strong> Jean Dupont</p>
          <p className="mb-2"><strong>Contact :</strong> contact@lamaisondespains.fr / 03 80 XX XX XX</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-secondary">2. Hébergement</h2>
          <p className="mb-2">Ce site est hébergé par Vercel Inc.</p>
          <p className="mb-2">Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-secondary">3. Propriété Intellectuelle</h2>
          <p className="mb-4">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-secondary">4. Politique de Confidentialité (RGPD)</h2>
          <p className="mb-4">
            La Maison des Pains s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site lamaisondespains.fr, soient conformes au règlement général sur la protection des données (RGPD).
          </p>
          <h3 className="font-bold mb-2">Données collectées</h3>
          <p className="mb-4">
            Les données personnelles recueillies dans le cadre du formulaire de contact sont traitées selon des protocoles sécurisés et permettent à La Maison des Pains de gérer les demandes reçues dans ses applications informatiques.
          </p>
          <h3 className="font-bold mb-2">Durée de conservation</h3>
          <p className="mb-4">
            Les données sont conservées pendant la durée nécessaire au traitement de votre demande.
          </p>
          <h3 className="font-bold mb-2">Vos droits</h3>
          <p className="mb-4">
            Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données personnelles. Vous pouvez exercer ce droit en nous contactant par email ou par courrier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-secondary">5. Cookies</h2>
          <p className="mb-4">
            Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>
        </section>
      </div>
    </div>
  );
}

