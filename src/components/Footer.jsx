import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiApplepay, SiMastercard, SiPaypal, SiVisa } from 'react-icons/si';

const Footer = () => {
    const sections = [
        { title: 'Quick links', links: ['Home', 'Shop', 'New Arrivals', 'Best Sellers', 'Gift Sets'] },
        { title: 'Customer Services', links: ['Contact Us', 'FAQ', 'Shipping Policy', 'Returns & Exchange', 'Privacy Policy'] },
    ];
    const socialIcons = [FaFacebook, FaTwitter, FaInstagram];
    const payIcons = [SiVisa, SiMastercard, SiPaypal, SiApplepay];

    return (
        <footer className="bg-gray-900 text-gray-400 py-10 mt-12">
            <div className="container mx-auto px-6">
                {/* Top Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    
                    {/* Brand + Social */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Scent Heaven</h3>
                        <p className="mb-4">Discover luxury fragrances that define elegance.</p>
                        <div className="flex space-x-4">
                            {socialIcons.map((Icon, i) => (
                                <a href="#" key={i} className="hover:text-white transition">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links & Customer Service */}
                    {sections.map(({ title, links }, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
                            <ul className="space-y-2">
                                {links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="hover:text-white">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                        <p className="mb-4">Subscribe to get the latest fragrance updates & offers.</p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="px-4 py-2 w-full rounded-l bg-gray-800 text-white focus:outline-none"
                                required
                            />
                            <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r transition">
                                Subscribe
                            </button>
                        </form>
                        <div className="mt-4 flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-2"/>
                            <span>support@scentheaven.com</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Scent Heaven. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-white">
                        {payIcons.map((Icon, i) => (
                            <Icon key={i} className="h-6 w-8" />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
