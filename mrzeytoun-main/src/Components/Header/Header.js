'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { LOGO } from '@/Constant/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Catalog', href: '/catalog' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
            <div className="custom-container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/">
                            <Image
                                src={LOGO}
                                alt="Logo"
                                width={60}
                                height={60}
                                className="w-auto h-12"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='flex items-center gap-3'>
                        <nav className="hidden md:flex items-center space-x-8">
                            {/* {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))} */}
                        </nav>

                        {/* Desktop Action Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* <Link
                                href="/contact"
                                className={`px-4 py-2 border rounded-full transition-colors duration-200 text-sm font-medium ${isScrolled ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/login"
                                className={`px-4 py-2 border rounded-full transition-colors duration-200 text-sm font-medium ${isScrolled ? 'border-black bg-black text-white hover:bg-gray-800' : 'border-white bg-transparent text-white hover:bg-white/10'}`}
                            >
                                Login
                            </Link>
                            <button
                                className={`p-2 cursor-pointer transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                                aria-label="Search"
                            >
                                <Icon icon="mdi:magnify" className="w-5 h-5" />
                            </button>
                            <button
                                className={`p-2 cursor-pointer transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                                aria-label="Cart"
                            >
                                <Icon icon="mdi:cart-outline" className="w-5 h-5" />
                            </button> */}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <button
                        className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <Icon
                            icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
                            className="w-6 h-6"
                        />
                    </button> */}
                </div>

                {/* Mobile Menu */}
                {/* {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium px-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 px-2">
                                <Link
                                    href="/contact"
                                    className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200 text-sm font-medium text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/login"
                                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <div className="flex items-center justify-center space-x-6 pt-2">
                                    <button
                                        className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                        aria-label="Search"
                                    >
                                        <Icon icon="mdi:magnify" className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                        aria-label="Cart"
                                    >
                                        <Icon icon="mdi:cart-outline" className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                )} */}
            </div>
        </header>
    );
}
