import React from "react";

// Définition des types pour les props de CardTable
interface User {
  Matricule:String,
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

interface CardTableProps {
  user: User;
}

const CardTable: React.FC<CardTableProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-800">User Information</h2>
      <table className="min-w-full mt-4">
        <tbody>
        <tr>
            <td className="font-medium text-gray-600">Matricule</td>
            <td className="text-gray-800">{user.Matricule}</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-600">First Name</td>
            <td className="text-gray-800">{user.firstName}</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-600">Last Name</td>
            <td className="text-gray-800">{user.lastName}</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-600">Email</td>
            <td className="text-gray-800">{user.email}</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-600">Address</td>
            <td className="text-gray-800">{user.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardTable;
