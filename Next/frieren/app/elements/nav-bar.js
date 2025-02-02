const NavBar = () => { 
    return (
        <div className="sm:flex hidden fixed text-center justify-center min-h-full h-screen w-fit bg-white dark:bg-black dark:border-white border-black border-r-4 text-2xl">
        <div className="absolute top-3 text-4xl font-bold italic">
            <h1>Frieren</h1>
        </div>
            <div className="flex flex-col ml-2 mr-6 mt-20">
                <nav>
                    <ul>
                        <div className="flex justify-center items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6f6f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                                <li><a className="ml-2" href="/">Home</a></li>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6f6f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                <li><a className="ml-2" href="/about">About</a></li>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6f6f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <li><a className="ml-2" href="/contact">Contact</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;