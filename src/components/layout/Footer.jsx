import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-900">LureCraft 3D</span>
                        <p className="text-sm text-gray-500 mt-1">L'innovation au bout de la ligne.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 text-center">
                    <p className="text-base text-gray-400">&copy; 2024 LureCraft 3D. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
