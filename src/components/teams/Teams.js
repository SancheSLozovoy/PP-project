import './Teams.css';
import { useState, useEffect, Children, cloneElement } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const PAGE_WIDTH = 450;

export const Teams = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
        console.log('handleLeftArrowClick');
    };

    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick');
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        });
    };

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                });
            })
        );
    }, [children]);

    return (
        <div className="main-container">
            <FaChevronCircleLeft className="arrow" onClick={handleLeftArrowClick} />
            <div className="window">
                <div
                    className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronCircleRight className="arrow" onClick={handleRightArrowClick} />
        </div>
    );
};
