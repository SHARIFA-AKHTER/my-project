
const Header = () => {

    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center
        py-8 space-y-4">
            {/* logo */}
            <h1 className="text-gray-800 font-bold text-3xl"> Chef&apos;s Table</h1>
            {/* menu start */}

            <ul className="flex gap-6 font-semibold text-gray-600 text-base">
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Recipes</li>
                <li><a href=""></a>About</li>
                <li><a href=""></a>Search</li>
            </ul>

            {/* menu end */}

            <div className="flex flex-row justify-between items-center gap-4">
                {/* Search */}
                <div className=" flex justify-between items-center relative">                  
                </div>

                 {/* Search */}
                 <div className="bg-green-400 flex items-center 
                 justify-center rounded-full w-12 h-12">
                    <i className="fa-regular fa-user-circle text-3xl"></i>

                 </div>
            </div>
         </div>
    );
};

export default Header;