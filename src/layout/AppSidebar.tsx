import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

// Importation des icônes Material UI
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TableChartIcon from "@mui/icons-material/TableChart";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// Définition des éléments du menu
const navItems = [
  { icon: <DashboardIcon />, name: "Dashboard", path: "/" },
  { icon: <AccountCircleIcon />, name: "Utilisateurs", path: "/tabUsers" },
  { icon: <PersonAddIcon />, name: "SignUpUser", path: "/SingUpUser" },
  { icon: <TableChartIcon />, name: "DAS", path: "/das" },
  { icon: <InsertPageBreakIcon />, name: "Réclamations", path: "/reclamations" },
  { icon: <ListAltIcon />, name: "Budgets", path: "/budgets" },
  { icon: <CalendarMonthIcon />, name: "Autres", path: "/autres" }
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    console.log("isExpanded:", isExpanded);
    console.log("isHovered:", isHovered);
    console.log("isMobileOpen:", isMobileOpen);
  }, [isExpanded, isHovered, isMobileOpen]);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 transition-all duration-300 
        ${isExpanded || isMobileOpen ? "w-64" : "w-16"}`}
    >
      <ul className="p-4 space-y-4"> {/* Ajout de space-y-4 pour espacer les éléments du menu */}
        {navItems.map((nav) => (
          <li key={nav.name}>
            <Link
              to={nav.path}
              className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ${
                isActive(nav.path) ? "bg-gray-200 dark:bg-gray-700" : ""
              } text-[#022E66]`}  // Application de la couleur bleue ici
            >
              {nav.icon}
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="ml-3">{nav.name}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AppSidebar;
