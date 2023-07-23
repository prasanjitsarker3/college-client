import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthenticationPage/AuthProvider";

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const useSearch = useRef(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/college?search=${search}`)
            .then(res => res.json())
            .then(data => setSearch(data))
    }, [search])
    
    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = useSearch.current.value;
        setSearch(searchText);
        // event.target.reset();
        console.log("Searching Data", search);
    }
    const handleLogout = () => {
        userLogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const options = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/college'>College</Link></li>
        <li><Link to='/admission'>Admission</Link></li>
        <li><Link to='/myCollege'>My College</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 static top-0">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] pr-2 shadow bg-base-200 text-lg rounded-box ">
                            {options}
                        </ul>
                    </div>
                    <p className="text-2xl uppercase">Campus</p>

                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        {options}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <div className="form-control ">
                            <div className="input-group flex justify-center items-center py-2">
                                <input ref={useSearch} type="text" placeholder="Search…" className="input input-bordered" />
                                <button onClick={handleSearch} className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="lg:tooltip lg:tooltip-bottom w-10 rounded-full" data-tip={user?.displayName} >
                                        <img src={user?.photoURL || "https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais"} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/profile" className="justify-between">
                                            {user?.displayName}
                                        </Link>
                                    </li>
                                    <li><Link to="/set">Settings</Link></li>
                                    <li>
                                        <p onClick={handleLogout} className="p-2 bg-blue">Logout</p>
                                    </li>
                                </ul>
                            </div> :
                                <Link to="/login"><button className="btn btn-primary">Login</button></Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;