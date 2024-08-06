import { useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import logo from "../assets/logo.png";

export default function NavBar() {
    const [activeTab, setActiveTab] = useState('Inicio');

    const tabs = [
        { name: 'Inicio', path: '/' },
        { name: 'Países', path: '/paises' },
        { name: 'Empresas', path: '/empresas' },
        { name: 'Sectores', path: '/sectores' },
        { name: 'Tipo de Empleo', path: '/tipo-de-empleo' }
    ];

    return (
        <div className="flex justify-between items-center px-5 py-5 my-10 mx-20 bg-white rounded-xl shadow-xl">
            <div>
                <img src={logo} alt="logo" className="w-auto h-10" />
            </div>

            <div className="flex space-x-10 font-normal">
                {tabs.map(tab => (
                    <div key={tab.name}>
                        <a
                            href={tab.path}
                            className={`relative group ${activeTab === tab.name ? 'text-secondary' : 'hover:text-secondary'}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.name}
                            <span
                                className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-all duration-300 ${activeTab === tab.name ? 'w-full' : 'w-0 group-hover:w-full'}`}
                            ></span>
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex text-lg items-center bg-secondary font-light text-white px-4 py-2 rounded-lg cursor-pointer">
                <button>
                    Contáctenos
                </button>
                <ArrowUpRightIcon className='w-5 h-5 ml-2' />
            </div>
        </div>
    );
}