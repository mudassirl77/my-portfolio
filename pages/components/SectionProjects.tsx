import React from 'react';
import Image, { StaticImageData } from 'next/image';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import Project from './Project';

export interface Project {
  id: number;
  image: StaticImageData;
  alt?: string;
}

function SectionProjects() {
  const projects: Project[] = [
    { id: 1, image: web1, alt: 'web1' },
    { id: 2, image: web2, alt: 'web2' },
    { id: 3, image: web3, alt: 'web3' },
    { id: 4, image: web4, alt: 'web4' },
    { id: 5, image: web5, alt: 'web5' },
    { id: 6, image: web6, alt: 'web6' },
  ];
  return (
    <>
      <section>
        <div className="dark:text-cyan-100">
          <h3 className="text-3xl py-1 ">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-cyan-100">
            List of <span className="text-cyan-500">web applications</span>
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {projects.map((project) => (
            <Project key={project.id} src={project.image} alt={project.alt} />
          ))}
        </div>
      </section>
    </>
  );
}

export default SectionProjects;
