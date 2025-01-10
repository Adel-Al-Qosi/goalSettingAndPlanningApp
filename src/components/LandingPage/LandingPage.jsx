import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-page-header">
                <h1>Welcome to Goal Setting and Planning App</h1>
                <p>Plan and achieve your goals effectively</p>
            </header>
            <main className="landing-page-main">
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Set and track your goals</li>
                        <li>Plan your tasks</li>
                        <li>Monitor your progress</li>
                    </ul>
                </section>
                <section className="cta">
                    <button className="cta-button">Get Started</button>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;