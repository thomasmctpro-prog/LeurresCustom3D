import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { availableLures } from '../data/lures';
import Scene from '../components/3d/Scene';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section Minimaliste */}
            <section className="relative h-[90vh] bg-slate-900 text-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">

                {/* Background blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse delay-1000"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-300 text-sm font-semibold mb-6 border border-white/20 backdrop-blur-md">
                        Imaginé par vous, imprimé par nous
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                        LURE<span className="text-blue-500">CRAFT</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
                        La nouvelle ère de la pêche aux leurres. Sélectionnez un modèle ci-dessous et personnalisez chaque détail.
                    </p>
                    <a href="#models" className="animate-bounce inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white">
                        <ChevronDown className="w-8 h-8" />
                    </a>
                </div>
            </section>

            {/* Models Section */}
            <div id="models" className="bg-slate-50">
                {availableLures.map((lure, index) => (
                    <section key={lure.id} className={`min-h-[80vh] flex items-center py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <div className="flex-1 space-y-6">
                                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{lure.name}</h2>
                                    <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                                        {lure.description}
                                    </p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <span className="text-2xl font-bold text-slate-900">dès {lure.price} €</span>
                                        <Link
                                            to={`/customizer/${lure.id}`}
                                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1"
                                        >
                                            Personnaliser <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* 3D Visual */}
                                <div className="flex-1 w-full h-[500px] bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner">
                                    <div className="absolute inset-0">
                                        {/* Use a different color for each lure to distinguish them visually in default mode */}
                                        <Scene
                                            color={index === 0 ? '#3b82f6' : index === 1 ? '#10b981' : index === 2 ? '#ef4444' : '#8b5cf6'}
                                            modelPath={lure.modelPath}
                                            hook="Triple"
                                            hookPosition={lure.hookPosition}
                                            hookRotation={lure.hookRotation}
                                        />
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-white/50 backdrop-blur p-2 rounded-lg text-xs text-slate-500 pointer-events-none">
                                        Aperçu 3D interactif
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Home;
