import React from 'react';
import LoopImg from './imgLoop.json';

export const InfiniteLoop = ({ url, name, equal }) => {
    const loopData = LoopImg;
    const numImages = Array(32).fill(null);

    let content = equal 
        ? numImages.map((_, index) => (
            <img key={index} src={url} alt={name} className="w-24 h-auto mx-2" />
        ))
        : loopData.map((data, index) => (
            <img key={index} src={data.url} alt={data.name} className="w-24 h-auto mx-2" />
        ));

    return (
        <div>
            {content}
        </div>
    );
};