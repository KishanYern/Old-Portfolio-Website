import { TypeAnimation } from 'react-type-animation';

export default function topNamecard() {
    return (
        <TypeAnimation
            sequence={[
                'Hello!',
                1000,
                'My name is Kishan',
                1000,
                'This is my Website!',
                1000,
                'I hope you enjoy!',
                2000,
            ]}
            wrapper='span'
            speed={50}
            style={{
                fontSize: '50px',
                fontFamily: 'cursive',
                opacity: '0',
                animation: 'name-card 2s ease 1.5s 1 normal forwards',
            }}
            repeat={Infinity}
        />
    );
}
