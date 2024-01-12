import NameCard from './Components/namebox';
import Profile from './Components/profile';
import Projects from './Components/projects';
import Header from './Components/header';
import NameCardText from './Components/topNamecard';
import Experiences from './Components/experiences';

export default function Root() {
    return (
        <>
            <main>
                <header>
                    <Header />
                </header>

                <section className='main'>
                    <section className='profile'>
                        <div className='namebox'>
                            <NameCardText />

                            <NameCard />
                        </div>
                        <div className='points'>
                            <Profile />
                        </div>
                    </section>
                    <section className='projects'>
                        <div className='heading'>Projects</div>
                        <Projects />
                    </section>

                    <section className='experiences'>
                        <div className='heading'>
                            Experiences and Activities
                        </div>
                        <Experiences />
                    </section>
                </section>
            </main>
        </>
    );
}
