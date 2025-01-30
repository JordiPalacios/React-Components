import React from 'react';
import { InfiniteLoop } from './InfiniteLoop';
import LoopImg from './imgLoop.json';

export const InfiniteLoopSection = () => {
    const loopData = LoopImg;
    return (
        <section>
            <h1 className='font-semibold text-emerald-300 my-1'>InfiniteLoop</h1>
            <div className='overflow-hidden py-2 bg-white relative'>
                <div className='absolute top-0 left-0 w-24 h-full bg-gradient-to-l from-transparent to-primary-color-950-opacityLess z-2'></div>
                <div className='inline-block animate-slide md:animate-slide-tablet lg:animate-slide-pc'>
                    <InfiniteLoop 
                        url="/mediaInfiniteLoop/chill.jpg" 
                        name="Chill" 
                        equal={true}/>
                    <InfiniteLoop 
                        url="/mediaInfiniteLoop/chill.jpg" 
                        name="Chill" 
                        equal={true}/>
                </div>
            </div>
            <div className='logoCompanies'>        
                {loopData.map((data) => (
                    <InfiniteLoop 
                        key={data.name} 
                        url={data.url} 
                        name={data.name} 
                        equal={false}/>
                    ))}
                {loopData.map((data) => (
                    <InfiniteLoop 
                        key={data.name} 
                        url={data.url}
                        name={data.name} 
                        equal={false}/>
                    ))}
            </div>
        </section>
    );
};