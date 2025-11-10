import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
    { to: "/login", label: "Login" },
  ];

  return (
    <header className="bg-primary text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-accent">CMN Solutions</h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition ${isActive ? "text-success font-bold" : "hover:text-accent"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}