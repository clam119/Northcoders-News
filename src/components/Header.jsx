import { Link } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from './context/UserContext';

export default function Header () {

    const {  username, setUsername, usersList, setUsersList, usersRealName, setUsersRealName, avatar, setAvatar } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const mobileMenu = ref;
        localStorage.setItem("username", JSON.stringify(username))
        localStorage.setItem("usersRealName", JSON.stringify(usersRealName))
        localStorage.setItem("avatar", JSON.stringify(avatar))
    }, [username])
    

    const handleClick = (e) => {
        setIsOpen(!isOpen);
        if(isOpen) {
            return ref.current.className="md:hidden lg:hidden xl:hidden";
        }
        else {
            return ref.current.className="sm:hidden mp:hidden"
        }
    }

    const handleChange = (e) => {
        setUsername(e.target.value);
        setUsersRealName(() => {
            const filteredRealName = usersList.filter((user) => {
                return user.username === e.target.value;
            })
            return filteredRealName[0].name;
        });
        setAvatar(() => {
            const filteredAvatar = usersList.filter((user) => {
                return user.username === e.target.value;
            })
            return filteredAvatar[0].avatar_url;
        })
    }

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden h-8 w-auto" src="https://i.ibb.co/K7Nf9TR/nclogo.png" alt="Northcoders Logo"/>
                    <img className="hidden lg:block h-8 w-auto" src="https://i.ibb.co/K7Nf9TR/nclogo.png" alt="Northcoders Logo"/>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                    <Link to="/" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Home </Link>
                    <Link to="/topics" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Topics </Link>
                     <p className="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Current User: {username} </p>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                
                {/* Users Dropdown Menu */}
                <div className="grid sm:grid-cols-3 mp:grid-cols-3- max-w-7xl px-4 py-4 mx-auto ">
                    <label className="grid-auto justify-center" htmlFor="sort_by">Users: 
                        <select  onChange={handleChange} name="sort_by" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="sort-dropdown">
                            <option disabled className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                            {usersList.map((user) =>  (<option key={user.username} className="text-base text-center block px-4 py-2" value={ user.username }>{ user.username }</option> ))}
                        </select>
                    </label>
                </div>

                    {/* <!-- Profile Picture --> */}
                    <div className="ml-3 relative">
                    <div>
                        <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={avatar} alt={`${username}'s avatar profile.`}/>
                        </button>
                    </div>
                   
                    </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden" onClick={handleClick}>
                    {/* <!-- Mobile menu button --> */}
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {/* <!--
                        Icon when menu is closed.

                        Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
                        Icon when menu is open.

                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div ref={ref} className="sm:hidden mp:hidden" id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
                <Link to="/" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">HOME</Link>
                <Link to="/topics" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">TOPICS</Link>
                </div>
                {/* Users Drodown Menu Mobile */}
                <div className="grid sm:grid-cols-3 mp:grid-cols-3- max-w-7xl px-4 py-4 mx-auto ">
                    <label className="grid-auto justify-center" htmlFor="sort_by">Users: 
                        <select  onChange={handleChange} name="sort_by" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="sort-dropdown">
                            <option disabled className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                            {usersList.map((user) =>  (<option key={user.username} className="text-base text-center block px-4 py-2" value={ user.username }>{ user.username }</option> ))}
                        </select>
                    </label>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={avatar} alt={`${username}'s avatar profile.`}/>
                    </div>
                    <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{username}</div>
                    <div className="text-sm font-medium text-gray-500">{usersRealName}</div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}