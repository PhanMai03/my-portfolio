import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090C] text-slate-900 dark:text-[#EDEDED] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6 shadow-xl font-mono text-2xl font-black">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display mb-3 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-sm font-mono text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        The requested system endpoint does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
      >
        <Home size={15} />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
};

export default NotFound;

