import { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    useEffect(() => {
        const dropdownButton = document.getElementById('dropdownDefaultButton');
        const dropdownMenu = document.getElementById('dropdown');

        const toggleDropdown = () => {
            dropdownMenu.classList.toggle('hidden');
        };

        dropdownButton.addEventListener('click', toggleDropdown);

        return () => {
            dropdownButton.removeEventListener('click', toggleDropdown);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full bg-gray bg-opacity-15 text-white flex justify-center items-center space-x-40 py-8 z-50">
            <div className="float-left flex justify-center items-center space-x-10">
                <h3 className="title text-3xl space-x-80 font-bold"><a href="/">PcariMovie</a></h3>
                <ul className="flex space-x-12">
                    <li className="mr-3 font-medium border-b-4 border-red pb-1"><Link href="/" passHref><p className="selected">Home</p></Link></li>
                    <li className="mr-4 font-extralight"><a href="/">Movies</a></li>
                    <li className="mr-4 font-extralight"><a href="/">TV Show</a></li>
                    <li className="mr-4 font-extralight"><a href="/">Video</a></li>
                    <li className="mr-4 font-extralight"><a href="/">FAQ</a></li>
                    <li className="mr-4 font-extralight"><a href="/">Pricing</a></li>
                    <li className="font-extralight"><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div className="float-right flex justify-around items-center space-x-10">
                <div className="flex-column relative">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                        <img width="21" height="21" src="https://img.icons8.com/FFFFFF/external-anggara-basic-outline-anggara-putra/24/external-search-ui-anggara-basic-outline-anggara-putra.png" alt="external-search-ui-anggara-basic-outline-anggara-putra" id="search"/>
                    </button>
                    <div id="dropdown" className="absolute right-0 hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-in-field" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/theatre" passHref><p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red">Search by Theatre</p></Link>
                            </li>
                            <li>
                                <Link href="/timeslot" passHref><p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red">Search by Timeslot</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(../images/placeholder.PNG)' }}></div>
                <h4 className="ml-4 font-medium">John Glich</h4>
            </div>
        </header>
    );
};

export default Header;
