import React from 'react';
import styled from 'styled-components';

interface Props {}

const LoaderContainer = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Ripple = styled.div`
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const RippleDelay = styled(Ripple)`
    animation-delay: -0.5s;
`;

const Loader: React.FC<Props> = () => {
    return (
        <LoaderContainer className="lds-ripple">
            <Ripple />
            <RippleDelay />
        </LoaderContainer>
    );
};

export default Loader;
