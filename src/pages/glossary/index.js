import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Glossary = () => {
    const [searchKeyword, setSearchKeyword] = React.useState('');
    const topics = [
    { letter: 'M', items: ['Model Context Protocol'] },
    ];


    const filteredTopics = topics.filter((topic) =>
        topic.items.some(item =>
            item.toLowerCase().includes(searchKeyword.toLowerCase())
        )
    );

    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // Include all letters A to Z in the filters

    const handleScrollToSection = (letter) => {
        const section = document.getElementById(`section-${letter}`);
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const scrollPosition = sectionTop - (window.innerHeight / 2) + (section.offsetHeight / 2);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div className="glossary-container">
                    <div className="left-section">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search topics..."
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setSearchKeyword(e.target.value);
                                    }
                                }}
                                className="search-bar"
                            />
                            <span className="search-icon"></span>
                        </div>
                        <div className="alphabet-filter">
                            {alphabet.map((letter) => {
                                const isDisabled = !filteredTopics.some((topic) => topic.letter === letter);
                                return (
                                    <button
                                        key={letter}
                                        onClick={() => handleScrollToSection(letter)}
                                        disabled={isDisabled}
                                        style={{
                                            backgroundColor: isDisabled ? '#e0e0e0' : '#ecf9ff', /* Light grey for disabled, blue for active */
                                            color: isDisabled ? '#555555' : '#00a9ff', /* Dark grey for disabled text */
                                            cursor: isDisabled ? 'default' : 'pointer',
                                            pointerEvents: isDisabled ? 'none' : 'auto',
                                            margin: "4px", /* Added margin */
                                            padding: "8px 12px", /* Added padding */
                                            borderRadius: "6px" /* Rounded corners */
                                        }}
                                    >
                                        {letter}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="topics-list">
                        {filteredTopics.map((topic) => (
                            <div key={topic.letter} id={`section-${topic.letter}`}>
                                <h2>{topic.letter}</h2>
                                <ul>
                                    {topic.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="glossary-item"
                                        >
                                            <a href={`/glossary/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>{`
                .glossary-container {
                    padding: 60px 157px; /* Overall padding for glossary page contents */
                    gap: 20px; /* Add margin between left section and topics list */
                    display: flex;
                    position: relative;
                }

                .left-section {
                    width: 50%;
                    flex-shrink: 0;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100vh; /* Ensure the section takes full height */
                    position: sticky;
                    top: 0;
                    height: 100vh;
                }

                .topics-list {
                    flex: 1;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    position: relative;
                    width: 50%;
                    margin: 0; /* remove centering margin */
                }
                
                .topics-list ul {
                    list-style: none;
                    padding: 0;
                    text-align: left;
                }
                .topics-list li {
                    margin: 5px 0;
                    text-align: left;
                }
                .topics-list a {
                    color: #00a9ff;
                    text-decoration: none;
                }
                .topics-list a:hover {
                    text-decoration: underline;
                }


                }
                
                .topics-list div.current {
                    font-size: 24px;
                    font-weight: bold;
                    background-color: var(--primary-color);
                    color: var(--secondary-color);
                    border: 2px solid var(--accent-color);
                }
                }
                }
                .left-section {
                    width: 50%;
                    flex-shrink: 0;
                    padding: 10px;
                }
                .placeholder-toggle {
                    margin-bottom: 10px;
                }
                .placeholder-toggle label {
                    font-weight: 500;
                    font-size: 14px;
                    cursor: pointer;
                }
                .search-container {
                    display: flex;
                    align-items: center;
                    position: relative;
                    margin-bottom: 20px;
                }

                .search-bar {
                    width: 100%;
                    padding: 10px 12px 10px 35px;
                    font-size: 14px;
                    background-color: #ffffff;
                    color: #333333;
                    border: 1px solid #cccccc;
                    border-radius: 8px;
                    outline: none;
                    transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
                }

                .search-bar:focus {
                    border-color: #aaaaaa;
                    background-color: #f9f9f9;
                }

                .search-icon {
                    position: absolute;
                    left: 12px;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    background: url('/assets/icons/loupe.png') no-repeat center center; /* Use provided icon */
                    background-size: 16px 16px; /* Scaled to fit without changing aspect ratio */
                    background-size: contain;
                }
                }
                .search-bar:focus {
                    border-color: #aaaaaa; /* Darker grey when focused */
                    background-color: #f9f9f9; /* Slightly darker white */
                }
                .search-bar:focus {
                    border-color: #00a9ff;
                    box-shadow: 0 0 4px #00a9ff;
                }
                    border: 1px solid var(--border-color);
                    border-radius: 4px;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .alphabet-filter {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
                    gap: 5px;
                }
                .alphabet-filter button:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease; /* Minor size increase animation */
                }
                    margin-bottom: 15px;
                }
                .alphabet-filter button {
                    background-color: #f0f0f0; /* Default background color */
                    color: #00a9ff; /* Default text color */
                    border: none; /* Remove border */
                    padding: 10px 15px; /* Padding for visual clarity */
                    border-radius: 6px; /* Curved edges */
                }
                .alphabet-filter button:enabled {
                    background-color: #ecf9ff; /* Background color */
                    color: #00a9ff; /* Text color */
                    border: none; /* Removed borders */
                    cursor: pointer;
                    padding: 10px 15px; /* Padding for better visual appearance */
                    border-radius: 6px; /* Curved edges */
                }
                    margin-right: 20px;
                }
                .alphabet-filter button:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease; /* Minor size increase animation for filters */
                    transition: transform 0.3s ease;
                }
                .topics-list {
                    flex: 1;
                    overflow-y: auto;
                }
                .topics-list h2 {
                    margin-top: 20px;
                    color: var(--primary-color);
                }
                .topics-list ul {
                    list-style: none;
                    padding: 0;
                }
                .topics-list li {
                    margin: 5px 0;
                }
                .topics-list a {
                    color: var(--secondary-color);
                    text-decoration: none;
                }
                .topics-list a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Glossary;