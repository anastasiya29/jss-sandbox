import React from 'react';
import TriangleSpring from '../../shared/TriangleSpring';

const Background = () => (
    <div>
        <TriangleSpring
            color="grayLight"
            height={['35vh', '80vh']}
            width={['95vw', '75vw']}
        />

        <TriangleSpring
            color="primary"
            height={['38vh', '80vh']}
            width={['50vw', '35vw']}
        />

        <TriangleSpring
            color="secondary"
            height={['25vh', '35vh']}
            width={['75vw', '60vw']}
            invertX
        />
    </div>
);

export default Background;