import { profilePoints } from './data';

export default function Profile() {
    return (
        <ul className='profile-list'>
            {profilePoints.map((point) => {
                const { content, id } = point;
                return (
                    <li key={id} style={{ animationDelay: `${id / 2 + 1}s` }}>
                        <div className='bullet-point'></div>
                        {content}
                    </li>
                );
            })}
        </ul>
    );
}
