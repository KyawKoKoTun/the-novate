import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Container from '../components/Container';

export default function Footer() {
    return (
        <Container>
        <footer className="bg-zinc-800 text-white p-8 rounded-[40px]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} The Novate. All rights reserved.</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <a href="mailto:contact@thenovate.com" className="text-zinc-400 hover:text-white transition-colors">
                        contact@thenovate.com
                    </a>
                </div>
                <div className="flex">
                    <a href="https://twitter.com" className="text-zinc-400 hover:text-white transition-colors mr-4">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://facebook.com" className="text-zinc-400 hover:text-white transition-colors mr-4">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a href="https://instagram.com" className="text-zinc-400 hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
        </Container>
    );
}
