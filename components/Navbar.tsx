const Navbar = (): JSX.Element => (
    <div className="flex flex-row items-center w-full py-5">
        <div className="flex flex-1 justify-end space-x-6">
            <a
                href="/#contact"
                className="font-sans font-normal text-sm px-3 py-2 rounded-md bg-gray-700 text-white">
                Contact me
            </a>
        </div>
    </div>
);

export default Navbar;
