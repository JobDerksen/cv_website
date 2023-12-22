import React, { ReactNode } from 'react';
import { Navigation } from '../navigation/Navigation';

interface Props {
    children: ReactNode;
}

const PageComponent = ({ children }: Props): React.JSX.Element => {
    return (
        <div >
            <Navigation />
            {children}
        </div>
    );
};

export { PageComponent };
