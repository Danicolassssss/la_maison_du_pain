'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('@/components/ContactMap'), { ssr: false });

export default function Contact() {
  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-75 w-full flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0">
            <Image
                src="/int2.jpeg"
                alt="Contact"
                fill
                className="object-cover brightness-50"
                priority
            />
          </div>
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Contact & Localisation
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations & Horaires */}
          <div className="space-y-12">
            {/* Coordonnées */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-secondary font-serif">
                Nos Coordonnées
              </h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <span>
                  23 rue de la Liberté
                  <br />
                  21800 Quetigny
                </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a
                      href="tel:0380XXXXXX"
                      className="hover:text-primary transition-colors"
                  >
                    03 80 XX XX XX
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <a
                      href="mailto:contact@lamaisondespains.fr"
                      className="hover:text-primary transition-colors"
                  >
                    contact@lamaisondespains.fr
                  </a>
                </p>
              </div>
              <div className="mt-8 relative h-48 rounded-lg overflow-hidden">
                <Image
                    src="/devanture.jpeg"
                    alt="Façade de la boulangerie"
                    fill
                    className="object-cover"
                />
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-secondary font-serif">
                  Nos Horaires
                </h2>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Ouvert maintenant
              </span>
              </div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-gray-100">
                <tr className="py-2">
                  <td className="py-2 font-medium">Lundi - Samedi</td>
                  <td className="py-2 text-right">06h00 - 19h00</td>
                </tr>
                <tr className="py-2">
                  <td className="py-2 font-medium">Dimanche</td>
                  <td className="py-2 text-right">06h00 - 13h00</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Formulaire & Map */}
          <div className="space-y-12">
            {/* Formulaire */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-secondary font-serif">
                Envoyez-nous un message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet
                  </label>
                  <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Votre nom"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Téléphone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Objet
                  </label>
                  <select
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option>Demande d'information</option>
                    <option>Commande spéciale</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Votre message..."
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                      id="rgpd"
                      type="checkbox"
                      className="h-4 w-4 text-primary border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="rgpd" className="ml-2 block text-sm text-gray-600">
                    J'accepte que mes données soient traitées pour répondre à ma
                    demande.
                  </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-[#c09060] transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Carte OpenStreetMap */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
  );
}
