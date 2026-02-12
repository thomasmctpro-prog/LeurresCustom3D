import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8 absolute top-32">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Parlons de votre projet</h2>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                        Une demande spécifique ? Un partenariat ? Notre équipe est à votre écoute.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                    {/* Contact Info / Decor */}
                    <div className="bg-slate-900 p-10 flex flex-col justify-between text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Informations</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-200">Email</p>
                                        <p className="text-slate-400">contact@lurecraft3d.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <MessageSquare className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-200">Support</p>
                                        <p className="text-slate-400">Réponse sous 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <p className="text-slate-400 text-sm leading-relaxed">
                                "La meilleure façon de prédire l'avenir, c'est de le créer... ou de l'imprimer."
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                                <input type="text" name="name" id="name" className="block w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 transition-colors" placeholder="Jean Dupont" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" name="email" id="email" className="block w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 transition-colors" placeholder="jean@exemple.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Votre message</label>
                                <textarea id="message" name="message" rows={4} className="block w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-blue-500/30">
                                    Envoyer <Send className="ml-2 w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
