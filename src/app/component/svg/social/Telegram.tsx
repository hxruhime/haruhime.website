import React from 'react';

const Telegram = ({ link }: { link: string }) => {
    return (
        <a className="mx-1.5 hover:text-slate-200 text-slate-300 transition-colors duration-300 transform" href={link}>
            <svg className="w-9 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
            </svg>
        </a>
    );
};

export default Telegram;

// path: src/app/component/svg/social/Telegram.tsx
