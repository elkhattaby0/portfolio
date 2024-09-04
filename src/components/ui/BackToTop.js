import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

        return (
            <div className="fixed bottom-4 z-10 right-4">
            {isVisible && (
                <button
                onClick={scrollToTop}
                className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700"
                >
                &#9650;
                </button>
            )}
        </div>
    );
};

export default BackToTop;
