import { projects } from './data';

export default function Projects() {
    return (
        <ul className='project-list'>
            {projects.map((project) => {
                const { name, content, images, id } = project;
                return (
                    <li key={id} className='project'>
                        <span className='project-name'>{name}</span>
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
