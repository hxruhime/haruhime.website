'use client';

import { TypeAnimation }    from "react-type-animation"
import React, { Component } from 'react'

const TextTyper = () => {
    return (
        <TypeAnimation sequence={[
            1000,
            'Hi, I\'m David.',
        ]}
                       repeat={0}
                       style={{ fontSize: '2em' }}
        >
        </TypeAnimation>
    )
}

export default TextTyper;
