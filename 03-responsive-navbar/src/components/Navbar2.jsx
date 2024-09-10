import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Logo</div>

                {/* Botón de hamburguesa para móviles */}
                <button
                    className="lg:hidden text-white"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Menú para pantallas grandes */}
                <ul className="hidden lg:flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-300">Inicio</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Servicios</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Acerca de</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contacto</a></li>
                </ul>
            </div>

            {/* Menú desplegable para móviles */}
            {isOpen && (
                <ul className="lg:hidden mt-4">
                    <li><a href="#" className="block text-white py-2 hover:bg-gray-700">Inicio</a></li>
                    <li><a href="#" className="block text-white py-2 hover:bg-gray-700">Servicios</a></li>
                    <li><a href="#" className="block text-white py-2 hover:bg-gray-700">Acerca de</a></li>
                    <li><a href="#" className="block text-white py-2 hover:bg-gray-700">Contacto</a></li>
                </ul>
            )}
        </nav>
    );
};