import React from 'react';

const Email = ({ link }: { link: string }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mx-1.5 hover:text-slate-200 text-slate-300 transition-colors duration-300 transform"
        >
            <svg className="w-9 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </a>
    );
}

export default Email;

// path: src/app/component/svg/social/Email.tsx
