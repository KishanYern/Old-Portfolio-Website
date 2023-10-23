import { experiences } from './data';

export default function Experiences() {
    return (
        <ul className='experiences-list'>
            {experiences.map((experience) => {
                const { name, content, time, id } = experience;
                return (
                    <li
                        key={id}
                        className='experience'
                        style={{ margin: '0', marginTop: '80px' }}
                    >
                        <span className='exp-name'> {name} </span> <br />
                        <div align='left' className='exp-desc'>
                            {' '}
                            {content}{' '}
                        </div>
                        <div className='time'> {time}</div>
                    </li>
                );
            })}
        </ul>
    );
}
