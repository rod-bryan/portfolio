import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2017,
        title: 'Solutions Developer - QA',
        duration: '4 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum blandit mauris, non pretium ante varius ut. Nullam vitae metus justo. Quisque hendrerit non magna at vulputate. Maecenas est felis, placerat a metus et, vulputate placerat mi. Proin vel pulvinar purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed convallis non tellus nec cursus. Mauris et mi vitae massa molestie aliquet.'
    },
    {
        year: 2017,
        title: 'Solutions Developer - QA',
        duration: '4 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum blandit mauris, non pretium ante varius ut. Nullam vitae metus justo. Quisque hendrerit non magna at vulputate. Maecenas est felis, placerat a metus et, vulputate placerat mi. Proin vel pulvinar purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed convallis non tellus nec cursus. Mauris et mi vitae massa molestie aliquet.'
    },
    {
        year: 2017,
        title: 'Solutions Developer - QA',
        duration: '4 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum blandit mauris, non pretium ante varius ut. Nullam vitae metus justo. Quisque hendrerit non magna at vulputate. Maecenas est felis, placerat a metus et, vulputate placerat mi. Proin vel pulvinar purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed convallis non tellus nec cursus. Mauris et mi vitae massa molestie aliquet.'
    }
];

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
