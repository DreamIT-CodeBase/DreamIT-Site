import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const GlossaryItem = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [htmlContent, setHtmlContent] = React.useState('');
    const [error, setError] = React.useState('');
    React.useEffect(() => {
        if (slug) {
            fetch(`/api/glossary-fetch?slug=${slug}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch HTML content');
                    }
                    return response.json();
                })
                .then((data) => setHtmlContent(data.html))
                .catch((error) => setError(error.message));
        }
        
        
    }, [slug]);

    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="slug-content">
                        {error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>{`
                .container {
                    width: 1190px;
                    margin: 0 auto;
                }
                .slug-content {
                    padding: 60px;
                    text-align: center;
                }
                h1 {
                    font-size: 36px;
                    color: #333;
                }
                p {
                    font-size: 18px;
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default GlossaryItem;