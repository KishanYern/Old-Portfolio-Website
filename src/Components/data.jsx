import NodeJS from './assets/nodejs-horizontal.svg';
import ReactJS from './assets/reactjs-ar21.svg';
import HTMLl from './assets/w3_html5-icon.svg';
import CSSl from './assets/w3_css-icon.svg';
import CPPl from './assets/c.svg';

export const experiences = [
    {
        name: 'Academic Support Assistant',
        content:
            'I am currently working as an Academic Support Assistant for the Center of Academic Support and Assistance (CASA) at the University of Houston. Here I tutor many different students in mathematical subjects such as Linear Algebra, Discrete Math, Calculus I and II, and many more foundational math courses. I do this for 20 hours a week. Doing this allows me to take a step back from all the computer science classes I am taking and lets me get back in touch with the fundamentals of math and logic',
        time: 'Spring and Fall 2023',
        id: 1,
    },
    {
        name: 'Computer Science Club Tutor',
        content:
            'Along side working as a math tutor, I also volunteer as a computer science tutor for the computer science club at my university, CougarCS. I do this for approximately 6 hours a week, mostly after tutoring math. I mainly help students with the fundamentals of programming, as well as Data Structures and Algorithms. Doing this also helps me take a break from my classes and practice the fundamentals.',
        time: 'Fall 2023',
        id: 2,
    },
];

export const profilePoints = [
    {
        content:
            'Hello, My name is Kishan Yerneni and this is my personal portfolio website. I am currently classified as a Junior, however, I am in my second year of university',
        id: 1,
    },
    {
        content:
            "I am currently attending the University of Houston in order to get my Bachelor's in Computer Science. Before that, I was at the Aga Khan Academies high school in India where I took 6 IB courses.",
        id: 2,
    },
    {
        content:
            'I am also currently looking for Internship/Fellowship/Research opportunities. Some of my interests are in Machine Learning, Data Science, and Algorithmics. ',
        id: 3,
    },
];

export const projects = [
    {
        name: 'This Website!',
        content:
            'This website has allowed me to practice with my UI/UX design skills and enhance my proficiency in front-end web development. This website was done to challenge myself with my design and efficiency skills and allowed me to gain some experience in it. For this project, I mainly used ReactJS and regular HTML and CSS. I used NodeJS with Vite while developing to make production easier. Overall, this project has increased my proficiency in ReactJS and helped me develop some of my design skills.',
        id: 1,
        images: [
            {
                name: 'NodeJS',
                src: NodeJS,
                id: 1,
            },
            {
                name: 'ReactJS',
                src: ReactJS,
                id: 2,
            },
            {
                name: 'HTML',
                src: HTMLl,
                id: 3,
            },
            {
                name: 'CSS',
                src: CSSl,
                id: 4,
            },
        ],
    },
    {
        name: 'Planetary Game',
        content:
            'As a part of my Introduction to Programming class, I was told to make a interactive planetary system based game in C++ as my final project. This project helped me a lot with object oriented programming as all of the details of the game was object oriented with classes such as the different types of spaceships the user can choose and the different events on each planet they go to. Overall, this project really helped me with.',
        images: [
            {
                name: 'C++',
                src: CPPl,
                id: 1,
            },
        ],
        id: 2,
    },
];
