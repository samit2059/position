import HeroGeometric from 'path-to-your-component/HeroGeometric';

const Home = () => {
    return (
        <main>
            <HeroGeometric badge="Full-Stack Developer" title1="Samit" title2="Shrestha" />
            {/* Existing hero section code */}
            <section className="hero">
                {/* Hero section content goes here */}
            </section>
            <section className="featured-projects">
                {/* Featured projects grid layout and data here */}
            </section>
        </main>
    );
};

export default Home;