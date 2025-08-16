import './App.css'

const howManyTimes = 3;
function Profile() {
    return (
        <img src="https://tse1.explicit.bing.net/th/id/OIP.te0HmdRkNqBvTZrUZci6wgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"
             alt="doggy"/>
    );
}

function Header() {
    return (
        <h1>Doggy</h1>
    )
}

export default function Gallery() {
    return (
        <section>
            <Header/>
            {Array.from({length: howManyTimes}, (_, index) => (
                <Profile key={index}/>
            ))}
        </section>
    )
}