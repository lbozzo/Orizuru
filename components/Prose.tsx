import { FC } from 'react';

const Prose: FC = ({ children }) => (
    <div className="w-full max-w-prose mx-auto px-6">{children}</div>
);

export default Prose;
