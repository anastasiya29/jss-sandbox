import React from 'react'
import Triangle from './Triangle';
import { Spring } from 'react-spring/renderprops';

const TriangleSpring = props => (
    <Spring from={{ width: '0vw' }} to={{ width: props.width[1] }}>
        {({ width }) => <Triangle {...props} width={[props.width[0], width]} />}
    </Spring>
)

export default TriangleSpring;