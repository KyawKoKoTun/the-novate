import React from 'react';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'This is a brief description of Project One. It showcases innovative solutions to common problems.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Project Two is focused on leveraging technology to create sustainable and efficient processes.',
            imageUrl: 'https://via.placeholder.com/150',
        }
    ];

    return (
        <Container>
        <h1 className='text-2xl md:text-4xl mb-8 font-bold text-center'><FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon> Projects</h1>
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map(project => (
                    <div key={project.id} className="bg-zinc-800 rounded-[40px] border border-zinc-500 p-6 text-white hover:bg-red-500 transition-all">
                        <img src={project.imageUrl} alt={project.title} className="rounded-t-lg w-full mb-4"/>
                        <h3 className="text-xl mb-2">{project.title}</h3>
                        <p className="text-zinc-400 hover:text-white">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </Container>
    );
}
