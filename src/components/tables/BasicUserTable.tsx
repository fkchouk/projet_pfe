import { useState, useEffect } from "react";

// Définir les interfaces
interface User {
  id: number;
  Matricule: string;
  fullName: string;
  email: string;
  password: string;
  roles: string[];
  site: string;
  direction: string;
  service: string;
  status: string;
}

// Données de la table
const tableData: User[] = [
  {
    id: 1,
    Matricule: "5055",
    fullName: "Ons Touati",
    email: "onstouati909@gmail.com",
    password: "password1",
    roles: ["Demandeur", "Validateur"],
    site: "GKS",
    direction: "IT",
    service: "Design",
    status: "Active",
  },
  {
    id: 2,
    Matricule: "5056",
    fullName: "Farah Kchouk",
    email: "FaharKchouk02@gmail.com",
    password: "password2",
    roles: ["Demandeur", "Validateur"],
    site: "GKS",
    direction: "Management",
    service: "Coordination",
    status: "Désactiver",
  },
  {
    id: 3,
    Matricule: "5057",
    fullName: "Zain Geidt",
    email: "zain.geidt@example.com",
    password: "password3",
    roles: ["Demandeur"],
    site: "KGS",
    direction: "Marketing",
    service: "Content",
    status: "Active",
  },
  {
    id: 4,
    Matricule: "5058",
    fullName: "Abram Schleifer",
    email: "abram.schleifer@example.com",
    password: "password4",
    roles: ["Validateur"],
    site: "GKS",
    direction: "Digital",
    service: "Ads",
    status: "Désactiver",
  },
  {
    id: 5,
    Matricule: "5059",
    fullName: "Carla George",
    email: "carla.george@example.com",
    password: "password5",
    roles: ["Demandeur", "Validateur"],
    site: "GKS",
    direction: "Development",
    service: "Web",
    status: "Active",
  },
];

// Composant de la modale
interface ModalProps {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}

const EditModal: React.FC<ModalProps> = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState<User>(user);
  const [confirmPassword, setConfirmPassword] = useState("");

  // Options pour les listes déroulantes
  const sites = ["GKS", "KGS", "Autre"];
  const directions = ["IT", "Management", "Marketing", "Digital", "Development"];
  const services = ["Design", "Coordination", "Content", "Ads", "Web"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (formData.password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Enregistrer les modifications
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-2/3 max-w-4xl">
        <h2 className="text-xl font-bold mb-6">Modifier l'utilisateur</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom & Prénom</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Site</label>
              <select
                name="site"
                value={formData.site}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Sélectionnez un site</option>
                {sites.map((site, index) => (
                  <option key={index} value={site}>{site}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Direction</label>
              <select
                name="direction"
                value={formData.direction}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Sélectionnez une direction</option>
                {directions.map((direction, index) => (
                  <option key={index} value={direction}>{direction}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Sélectionnez un service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Composant principal
export default function BasicTableUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(tableData);

  // Désactiver le défilement de la page lorsque la modale est ouverte
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <table className="w-full">
            <thead className="border-b border-gray-100 dark:border-white/[0.05]">
              <tr>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Matricule
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Nom & Prénom
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Email
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Rôles
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Site
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Direction
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Service
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Statut
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Mot de Passe
                </th>
                <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {user.Matricule}
                    </span>
                  </td>
                  <td className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {user.fullName}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
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
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.site}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.direction}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.service}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.password}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex space-x-2">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md text-xs"
                        onClick={() => handleEdit(user)}
                      >
                        Modifier
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md text-xs">
                        Désactiver
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && selectedUser && (
        <EditModal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}