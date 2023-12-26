'use client';

import { TypeAnimation }    from "react-type-animation"
import React, { Component } from 'react'

const TextTyper = () => {
    return (
        <TypeAnimation sequence={[
            1000,
            'Oxycodan',
            3500,
            'David',
            3500
        ]}
                       repeat={0}
                       style={{ fontSize: '1em' }}
        >
        </TypeAnimation>
    )
}

export default TextTyper;
