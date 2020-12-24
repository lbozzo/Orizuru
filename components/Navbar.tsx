import { Bulb } from 'tabler-icons-react';

const Navbar = (): JSX.Element => (
    <div className="flex flex-row items-center py-5">
        <Bulb size={30} strokeWidth={1.5} />
        <div className="flex flex-1 justify-end space-x-6">
            <a
                href="/#contact"
                className="font-sans font-normal text-sm px-3 py-2 rounded-md bg-gray-900 text-white">
                Contact me
            </a>
        </div>
    </div>
);

export default Navbar;
