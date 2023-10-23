export default function NameCard() {
    const name = 'Kishan Yerneni';
    const classification = 'Junior';
    const degree = 'Bachelors in Computer Science';
    const university = 'University of Houston';

    return (
        <div className='name-card'>
            <div className='name2'> {name} </div>
            <div className='classification'>
                {' '}
                {classification}, {degree}
            </div>

            <div className='uni'> {university} </div>
        </div>
    );
}
