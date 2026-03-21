import { HeroGeometric } from '../components/ui/shape-landing-hero';

const Home = () => {
    return (
        <main>
            <HeroGeometric title="Full-Stack Developer" description="Samit Shrestha" />
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