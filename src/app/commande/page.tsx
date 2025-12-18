"use client";

import { useState } from "react";
import Image from "next/image";

export default function Commande() {
  const products = [
    {
      name: "Baguette Tradition",
      price: 0.85,
      category: "Pains",
      img: "/baguettetradition.jpeg",
    },
    {
      name: "Pain Complet",
      price: 2.10,
      category: "Pains",
      img: "/PainComplet.jpeg",
    },
    {
      name: "Pain de Mie",
      price: 1.50,
      category: "Pains",
      img: "/painmie.jpeg",
    },
    {
      name: "Croissant Beurre",
      price: 1.20,
      category: "Viennoiseries",
      img: "/croissant.jpeg",
    },
    {
      name: "Pain aux Noix & Raisins Secs",
      price: 2.80,
      category: "Spécialités",
      img: "/painnoixraisin.jpeg",
    },
    {
      name: "Pain de Campagne",
      price: 1.90,
      category: "Pains",
      img: "/paincampagne.jpeg",
    },
    {
      name: "Pain Sans Gluten",
      price: 3.50,
      category: "Sans Gluten",
      img: "/painsansgluten.jpeg",
    },
    {
      name: "Pain au Chocolat",
      price: 1.30,
      category: "Viennoiseries",
      img: "/Pain_au_chocolat_2k_202512181548.jpeg",
    },
  ];

  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const updateQuantity = (productName: string, delta: number) => {
    setCart((prev) => {
      const currentQty = prev[productName] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [productName]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productName]: newQty };
    });
  };

  const total = Object.entries(cart).reduce((sum, [name, qty]) => {
    const product = products.find((p) => p.name === name);
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre commande ! Elle a bien été enregistrée.");
    // Ici, on pourrait envoyer les données à une API
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-75 w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            loader={({ src }) => src} // Simple loader
            src="/paincampagne.jpeg"
            alt="Commande en ligne"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Commander en Ligne
          </h1>
          <p className="text-xl font-light">
            Réservez vos pains et viennoiseries préférés
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Product List */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-secondary font-serif">
              Nos Produits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-secondary font-serif">
                          {product.name}
                        </h3>
                        <span className="text-lg font-semibold text-primary">
                          {product.price.toFixed(2)}€
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-700 font-medium">Quantité :</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(product.name, -1)}
                          className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors"
                          type="button"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {cart[product.name] || 0}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.name, 1)}
                          className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#c09060] transition-colors"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart & Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-secondary font-serif">
                Votre Panier
              </h2>

              {Object.keys(cart).length === 0 ? (
                <p className="text-gray-500 italic mb-6">Votre panier est vide.</p>
              ) : (
                <div className="mb-6 space-y-3">
                  {Object.entries(cart).map(([name, qty]) => {
                    const product = products.find((p) => p.name === name);
                    if (!product) return null;
                    return (
                      <div key={name} className="flex justify-between items-center text-sm">
                        <span>
                          {qty}x {name}
                        </span>
                        <span className="font-semibold">
                          {(product.price * qty).toFixed(2)}€
                        </span>
                      </div>
                    );
                  })}
                  <div className="border-t pt-3 mt-3 flex justify-between items-center font-bold text-lg text-secondary">
                    <span>Total</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold mb-4 text-secondary font-serif border-t pt-6">
                Vos Coordonnées
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date de retrait
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Heure
                    </label>
                    <input
                      type="time"
                      id="time"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={total === 0}
                  className={`w-full py-3 rounded-full text-lg font-semibold transition-colors mt-6 ${
                    total > 0
                      ? "bg-primary text-white hover:bg-[#c09060]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Valider la commande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
