import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const isTransparent = location.pathname === '/customizer';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-white/80 backdrop-blur-md border-b border-white/20' : 'bg-white/80 backdrop-blur-md border-b border-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-all duration-300">
                            <Anchor className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-2xl text-slate-800 tracking-tight">LureCraft<span className="text-blue-600">3D</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Accueil</Link>
                        <Link to="/customizer" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Atelier</Link>
                        <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Contact</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="relative p-3 rounded-full text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-all">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                        </button>
                        <button className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
