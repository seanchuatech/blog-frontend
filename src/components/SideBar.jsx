import { Link } from "react-router-dom";

const SideBar = () => {
    const links = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Blogs", href: "/dashboard/blogs" },
        { label: "Users", href: "/dashboard/users" },
    ];
  return (
    <>
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {links.map((link) => (
                        <li key={link.href} className="text-base hover:text-zinc-300 transition duration-500">
                            <Link to={link.href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><span className="ms-3">{link.label}</span></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
        
    </>

  )
}

export default SideBar