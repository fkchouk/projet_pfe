import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "../ui/table";
  
  import Badge from "../ui/badge/Badge";
  
  interface User {
    id: number;
    Matricule:String;
    fullName: string;
    email: string;
    roles: string[]; // Un utilisateur peut avoir jusqu'à 3 rôles
    site: string;
    direction: string;
    service: string;
    status: string;
  }
  
  // Définition des données du tableau
  const tableData: User[] = [
    {
      id: 1,
      Matricule:"5055",
      fullName: "Ons Touati",
      email: "onstouati909@gmail.com",
      roles: ["Demandeur", "Validateur"],
      site: "GKS",
      direction: "IT",
      service: "Design",
      status: "Active",
    },
    {
      id: 2,
      Matricule:"5056",
      fullName: "Farah Kchouk",
      email: "FaharKchouk02@gmail.com",
      roles: ["Demandeur","Validateur"],
      site: "GKS",
      direction: "Management",
      service: "Coordination",
      status: "Désactiver",
    },
    {
      id: 3,
      Matricule:"5057",
      fullName: "Zain Geidt",
      email: "zain.geidt@example.com",
      roles: ["Demandeur"],
      site: "KGS",
      direction: "Marketing",
      service: "Content",
      status: "Active",
    },
    {
      id: 4,
      Matricule:"5058",
      fullName: "Abram Schleifer",
      email: "abram.schleifer@example.com",
      roles: ["Validateur"],
      site: "GKS",
      direction: "Digital",
      service: "Ads",
      status: "Désactiver",
    },
    {
      id: 5,
      Matricule:"5059",
      fullName: "Carla George",
      email: "carla.george@example.com",
      roles: ["Demandeur", "Validateur"],
      site: "GKS",
      direction: "Development",
      service: "Web",
      status: "Active",
    },
  ];
  
  export default function BasicTableUser() {
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
              {/* En-tête du tableau */}
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Matricule
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Nom & Prénom
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Email
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Rôles
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Site
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Direction
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Service
                  </TableCell>
                  <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Statut
                  </TableCell>
                </TableRow>
              </TableHeader>
  
              {/* Corps du tableau */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {tableData.map((user) => (
                  <TableRow key={user.id}>
                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {user.Matricule}
                      </span>
                    </TableCell>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {user.fullName}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {user.email}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex flex-wrap gap-1">
                        {user.roles.slice(0, 3).map((role, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 dark:bg-gray-700 px-2 py-1 text-xs rounded-md"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {user.site}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {user.direction}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {user.service}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge
                        size="sm"
                        color={
                          user.status === "Active"
                            ? "success"
                            : user.status === "Désactiver"
                            ? "warning"
                            : "error"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  