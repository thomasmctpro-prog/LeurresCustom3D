import React, { useState, useEffect } from 'react';
import Scene from '../components/3d/Scene';
import { ShoppingCart, ChevronDown, Ruler, Anchor, Weight, Fish } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { availableLures } from '../data/lures';

const Customizer = () => {
    const { modelId } = useParams();
    const navigate = useNavigate();

    // Initialiser la configuration avec le modelId de l'URL ou le premier par défaut
    // Si modelId change, on met à jour le state (via useEffect ci-dessous si nécessaire, mais ici on peut initialiser paresseusement)
    // Cependant, si on navigue dans le customizer sans recharger la page, il faut que le state suive.

    const [lureConfig, setLureConfig] = useState({
        modelId: modelId || availableLures[0].id,
        color: '#3b82f6',
        weight: 15,
        size: 10,
        hook: 'Simple'
    });

    // Effet pour synchroniser l'URL avec le state si l'URL change
    useEffect(() => {
        if (modelId && modelId !== lureConfig.modelId) {
            setLureConfig(prev => ({ ...prev, modelId }));
        }
    }, [modelId]);

    const selectedLure = availableLures.find(l => l.id === lureConfig.modelId) || availableLures[0];

    const handleColorChange = (color) => {
        setLureConfig(prev => ({ ...prev, color }));
    };

    const handleConfigChange = (key, value) => {
        if (key === 'modelId') {
            // Si on change le modèle depuis le sélecteur, on met à jour l'URL
            navigate(`/customizer/${value}`);
        }
        setLureConfig(prev => ({ ...prev, [key]: value }));
    };

    const colors = [
        { name: 'Red', hex: '#ef4444' },
        { name: 'Ocean', hex: '#0ea5e9' },
        { name: 'Emerald', hex: '#10b981' },
        { name: 'Amber', hex: '#f59e0b' },
        { name: 'Indigo', hex: '#6366f1' },
        { name: 'Slate', hex: '#1e293b' },
        { name: 'Ghost', hex: '#f8fafc' },
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-slate-100">

            {/* 3D Scene - Full Screen */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-24 left-8 z-10 bg-white/50 backdrop-blur-sm p-3 rounded-2xl text-sm text-slate-500 font-medium border border-white/40 pointer-events-none select-none">
                    <p className="flex items-center gap-2"><Fish className="w-4 h-4" /> Modèle : <span className="text-blue-600 font-bold">{selectedLure.name}</span></p>
                </div>
                {/* Pass the filename of the selected lure to the scene */}
                <Scene
                    color={lureConfig.color}
                    modelPath={selectedLure.modelPath}
                    hook={lureConfig.hook}
                    hookPosition={selectedLure.hookPosition}
                    hookRotation={selectedLure.hookRotation}
                />
            </div>

            {/* Floating Controls Panel */}
            <div className="absolute top-24 right-4 md:right-8 bottom-8 w-full md:w-96 z-20 flex flex-col pointer-events-none">
                {/* Container for the scrollable card */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 flex flex-col overflow-hidden h-full pointer-events-auto">

                    <div className="p-6 border-b border-slate-100 bg-white/50">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Atelier</h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-8">

                        {/* Model Selector */}
                        <div>
                            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-4">
                                <Fish className="w-4 h-4 text-blue-500" /> Modèle
                            </h3>
                            <div className="space-y-2">
                                {availableLures.map((lure) => (
                                    <button
                                        key={lure.id}
                                        onClick={() => handleConfigChange('modelId', lure.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${lureConfig.modelId === lure.id ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-200 bg-white hover:border-blue-300'}`}
                                    >
                                        <div className="font-semibold text-slate-900">{lure.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Section */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Couleur</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.hex}
                                        onClick={() => handleColorChange(color.hex)}
                                        className={`w-12 h-12 rounded-2xl shadow-sm flex items-center justify-center transition-all duration-200 ${lureConfig.color === color.hex ? 'ring-2 ring-blue-500 ring-offset-2 scale-110 shadow-md' : 'hover:scale-105 border border-slate-200'}`}
                                        style={{ backgroundColor: color.hex }}
                                        aria-label={`Select color ${color.name}`}
                                    >
                                        {lureConfig.color === color.hex && (
                                            <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Weight Section */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <Weight className="w-4 h-4 text-blue-500" /> Grammage
                                </span>
                                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">{lureConfig.weight} g</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="50"
                                value={lureConfig.weight}
                                onChange={(e) => handleConfigChange('weight', parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>

                        {/* Size Section */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <Ruler className="w-4 h-4 text-purple-500" /> Taille
                                </span>
                                <span className="text-sm font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md border border-purple-100">{lureConfig.size} cm</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="30"
                                value={lureConfig.size}
                                onChange={(e) => handleConfigChange('size', parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
                        </div>

                        {/* Hook Section */}
                        <div>
                            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-4">
                                <Anchor className="w-4 h-4 text-slate-500" /> Armement
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {['Simple', 'Triple', 'Sans'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => handleConfigChange('hook', type)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${lureConfig.hook === type ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
                                    >
                                        <span>{type === 'Sans' ? 'Sans hameçon' : `Hameçon ${type}`}</span>
                                        {lureConfig.hook === type && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 bg-white border-t border-slate-100">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-slate-500 text-sm">Prix estimé</span>
                            <span className="text-3xl font-bold text-slate-900">{selectedLure.price} €</span>
                        </div>
                        <button className="w-full group flex items-center justify-center gap-3 bg-slate-900 text-white font-bold py-4 px-4 rounded-xl hover:bg-black transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 transform active:scale-[0.98]">
                            <ShoppingCart className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customizer;
