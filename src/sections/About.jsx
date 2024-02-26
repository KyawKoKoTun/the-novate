import React from 'react';
import Container from "../components/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket, faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const sections = [
        {
            id: 'about-the-novate',
            title: 'About The Novate',
            content: 'The Novate is dedicated to empowering startups by providing essential tools, resources, and mentorship. We focus on overcoming entrepreneurial challenges through innovation, digital marketing, and strategic business guidance, fostering a supportive ecosystem for startup growth.',
            icon: faLightbulb,
            borderColor: 'border-red-500',
        },
        {
            id: 'our-vision',
            title: 'Our Vision',
            content: 'To create a world where startups can achieve their full potential and become leaders in their industries. The Novate aims to drive innovation and success, building a future where every startup thrives.',
            icon: faRocket,
            borderColor: 'border-zinc-500',
        },
        {
            id: 'our-mission',
            title: 'Our Mission',
            content: 'To equip startups with the necessary support for sustainable growth and impact. We offer access to knowledge, networks, and resources, empowering startups to navigate the entrepreneurial journey with confidence.',
            icon: faBullseye,
            borderColor: 'border-zinc-500',
        },
    ];

    return (
        <Container>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                {sections.map((section, index) => (
                    <div key={section.id} className={`bg-zinc-800 rounded-[40px] ${section.borderColor} border-2 p-6 text-center hover:bg-red-500 transition-all ${index === 0 ? 'md:col-span-2' : 'w-full'}`} style={{ boxShadow: '0 0 8px red' }}>
                        <div className={`group ${index !== 0 ? 'md:col-span-1' : ''}`}>
                            <FontAwesomeIcon icon={section.icon} className={`text-6xl mb-6 text-red-500 group-hover:text-white glow-on-hover`} />
                            <h2 className="mb-6 font-bold text-xl text-white">{section.title}</h2>
                            <p className="text-zinc-400 group-hover:text-white transition-colors">{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
