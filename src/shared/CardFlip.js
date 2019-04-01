import React from 'react';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import styled from 'styled-components';

const hide = { opacity: 0 };
const show = { opacity: 1 };

const StyledSpring = styled.div`
.card-flip {
    height: ${props => props.height};
    & > div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`

export default class CardFlip extends React.Component {
    state = { flipped: false }
    click = () => this.setState(state => ({ flipped: !state.flipped }))
    render() {
        const { flipped } = this.state;
        const { front, back, height } = this.props;
        return (
            <StyledSpring height={height}>
                <Spring native to={{ transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)` }}>
                    {props => (
                        <animated.div className="card-flip" onClick={this.click} style={props}>
                            <Transition native unique items={flipped} from={hide} enter={show} leave={hide}>
                                {flipped => ({ opacity }) => (
                                    <animated.div
                                        style={{
                                            transform: `rotateY(${flipped ? 180 : 0}deg)`,
                                            opacity: opacity.interpolate({ range: [0, 0.5, 1], output: [0, 0, 1] })
                                        }}>
                                        {flipped ? back : front}
                                    </animated.div>
                                )}
                            </Transition>
                        </animated.div>
                    )}
                </Spring>
            </StyledSpring>
        )
    }
}