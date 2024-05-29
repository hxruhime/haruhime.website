'use client';

import { TypeAnimation } from "react-type-animation"
import React             from 'react'

const TextTyper = () => {
    return (
        <TypeAnimation
            sequence={[
                1000,
                'Hi, I\'m David.',
            ]}
            repeat={0}
            style={{ fontSize: '2em' }}
        />
    );
};

export default TextTyper;

// path: src/app/component/text/TextTyper.tsx