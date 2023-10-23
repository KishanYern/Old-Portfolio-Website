import githubImage from './assets/logo-github-light.svg';
import linkedinImage from './assets/logo-linkedin-light.svg';

export default function Header() {
    const GoToProjects = () => {
        window.innerWidth > 950
            ? window.scroll({ top: 900, behavior: 'smooth' })
            : window.scroll({ top: 1500, behavior: 'smooth' });
    };

    const GoToExperiences = () => {
        window.innerWidth > 950
            ? window.scroll({ top: 1750, behavior: 'smooth' })
            : window.scroll({ top: 2000, behavior: 'smooth' });
    };

    const GithubImage = () => <img src={githubImage} alt='Github' />;

    const LinkedinImage = () => <img src={linkedinImage} alt='LinkedIn' />;

    return (
        <nav className='header'>
            <a
                href='https://www.linkedin.com/in/kishan-yerneni'
                rel='LinkedIn'
                target='_blank'
            >
                {LinkedinImage()}
            </a>
            <a
                href='https://github.com/KishanYern'
                rel='GitHub'
                target='_blank'
            >
                {GithubImage()}
            </a>

            <div className='header-text'> Welcome </div>
            <button className='header-btn' onClick={() => GoToProjects()}>
                {' '}
                Projects{' '}
            </button>
            <button className='header-btn' onClick={() => GoToExperiences()}>
                {' '}
                Experiences and Activities{' '}
            </button>
            <button className='header-btn'> Contact me! </button>
        </nav>
    );
}
