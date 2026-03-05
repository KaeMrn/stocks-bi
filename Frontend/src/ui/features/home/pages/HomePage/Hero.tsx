import { Link } from "react-router-dom";
import { Logo } from "@/ui/components/common/Logo";
import { TrendingUp, BarChart2, Zap, Package } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white font-sans">
      {/* ── Navbar ────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-5 border-b border-gray-100 bg-white sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <span className="text-lg font-bold text-gray-900 tracking-tight">Stocks</span>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-purple-700 transition-colors">Fonctionnalités</a>
          <a href="#advantages" className="hover:text-purple-700 transition-colors">Avantages</a>
          <a href="#tarifs" className="hover:text-purple-700 transition-colors">Tarifs</a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-gray-700 font-medium hover:text-purple-700 transition-colors">
            Se connecter
          </Link>
          <Link
            to="/register"
            className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Commencer gratuitement
          </Link>
        </div>
      </nav>

      {/* ── Hero body ─────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-8 md:px-16 pt-16 pb-10 max-w-7xl mx-auto">

        {/* ── Left column ─────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-purple-300 text-purple-700 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
            Intelligence artificielle intégrée
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            Gérez vos stocks<br />avec<br />
            <span className="text-purple-600">l'intelligence<br />artificielle</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
            La plateforme tout-en-un pour les grandes enseignes.
            Suivez vos stocks en temps réel, analysez votre chiffre
            d'affaires, gérez vos factures et profitez d'insights IA
            pour optimiser votre activité.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
            >
              Démarrer maintenant
              <span className="text-lg leading-none">→</span>
            </Link>
            <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-purple-400 text-gray-700 font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors">
              <span className="text-purple-500">▷</span>
              Voir la démo
            </button>
          </div>
        </div>

        {/* ── Right column — Dashboard mockup ─────────────────────── */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px]">
            {/* Soft background blob */}
            <div className="absolute -inset-6 bg-purple-50 rounded-3xl -z-10" />

            {/* ── Main dashboard card ─────────────────────────────── */}
            <div className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100 relative">

              {/* ── Performances mini card (top-left, floating) ──── */}
              <div className="absolute -top-10 -left-2 bg-white rounded-xl shadow-lg p-3 border border-gray-100 w-40 z-10">
                <p className="text-[10px] font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  <BarChart2 size={11} className="text-purple-500" />
                  Performances
                </p>
                <div className="flex items-end gap-1 h-8">
                  {[60, 75, 65, 85, 90, 80, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? "#7C5CBF" : "#E9D5FF",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* ── Insight IA card (top-right, floating) ─────────── */}
              <div className="absolute -top-10 -right-2 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100 w-48 z-10">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap size={13} className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-700">Insight IA</p>
                    <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                      Réapprovisionnez les produits bio - demande +45%
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Dashboard header ────────────────────────────── */}
              <div className="flex items-center justify-between mt-6 mb-4">
                <h3 className="text-sm font-bold text-gray-800">Tableau de bord</h3>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* ── Revenue KPI ─────────────────────────────────── */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <TrendingUp size={15} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Chiffre d'affaires</p>
                    <p className="text-sm font-bold text-gray-800">€2.4M</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">+24%</span>
              </div>

              {/* ── Articles & Factures ─────────────────────────── */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-[10px] text-gray-400 font-medium mb-1">Articles en stock</p>
                  <p className="text-lg font-bold text-gray-800">12,458</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-[10px] text-gray-400 font-medium mb-1">Factures du mois</p>
                  <p className="text-lg font-bold text-gray-800">234</p>
                </div>
              </div>

              {/* ── Mini bar chart ──────────────────────────────── */}
              <div className="flex items-end gap-1 h-16 mb-4 px-1">
                {[40, 60, 45, 70, 55, 80, 50, 75, 65, 90, 70, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 11 ? "#7C5CBF" : "#EDE9F8",
                    }}
                  />
                ))}
              </div>

              {/* ── Stock faible alert ──────────────────────────── */}
              <div className="flex items-start gap-2.5 border-t border-gray-100 pt-3">
                <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <Package size={13} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-purple-700">Stock faible</p>
                  <p className="text-[10px] text-gray-500">32 produits nécessitent un réapprovisionnement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
