import { projects } from './data';
import '../styles/projects.css';

export default function Projects() {
    return (
        <ul className='project-list'>
            {projects.map((project) => {
                const { name, content, images, id, link } = project;
                return (
                    <li key={id} className='project'>
                        <a href={link} target='_blank' className='project-name'>
                            {name}
                        </a>
                        <div align='left' className='project-desc'>
                            {' '}
                            {content}
                        </div>
                        <div className='project-images'>
                            {images.map((image) => {
                                const { name, src, id } = image;
                                return (
                                    <img
                                        className='project-image'
                                        rel={name}
                                        src={src}
                                        key={id}
                                    />
                                );
                            })}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
