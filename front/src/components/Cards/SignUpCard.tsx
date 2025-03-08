import React, { useState } from 'react';

export default function SignUpCard() {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [site, setSite] = useState('');
  const [direction, setDirection] = useState('');
  const [service, setService] = useState('');
  const [isValidateur, setIsValidateur] = useState(false);
  const [isDemandeur, setIsDemandeur] = useState(false);
  
  const [errors, setErrors] = useState({
    name: false,
    prenom: false,
    surname: false,
    email: false,
    password: false,
    confirmPassword: false,
    site: false,
    direction: false,
    service: false,
    role: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: !name,
      prenom: !prenom,
      surname: !surname,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
      site: !site,
      direction: !direction,
      service: !service,
      role: !(isValidateur || isDemandeur),
    };

    setErrors(newErrors);

    // Si tous les champs sont valides, vous pouvez envoyer le formulaire
    if (Object.values(newErrors).every((field) => !field)) {
      console.log('User Details:', {
        name,
        prenom,
        surname,
        email,
        password,
        confirmPassword,
        site,
        direction,
        service,
        isValidateur,
        isDemandeur,
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ligne 1 : Matricule et Nom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Matricule <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="surname" className="block text-gray-700">Nom <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.surname ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.surname && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>
        </div>

        {/* Ligne 2 : Prénom et Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="prenom" className="block text-gray-700">Prénom <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.prenom ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.prenom && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email <span className="text-red-600">*</span></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>
        </div>

        {/* Ligne 3 : Mot de passe et Confirmation du mot de passe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Mot de Passe <span className="text-red-600">*</span></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirmer le mot de passe <span className="text-red-600">*</span></label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>
        </div>

        {/* Ligne 4 : Site et Direction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="site" className="block text-gray-700">Site <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.site ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.site && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="direction" className="block text-gray-700">Direction <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className={`w-full px-4 py-2 border ${errors.direction ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.direction && <p className="text-red-500 text-sm">Champ obligatoire</p>}
          </div>
        </div>

        {/* Ligne 5 : Service */}
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700">Service <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`w-full px-4 py-2 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.service && <p className="text-red-500 text-sm">Champ obligatoire</p>}
        </div>

        {/* Ligne 6 : Rôle */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Role <span className="text-red-600">*</span>:</label>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="validateur"
                checked={isValidateur}
                onChange={() => setIsValidateur(!isValidateur)}
                className="w-5 h-5 text-blue-600 bg-gray-200 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
              />
              <label htmlFor="validateur" className="text-gray-700 text-lg">Validateur</label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="demandeur"
                checked={isDemandeur}
                onChange={() => setIsDemandeur(!isDemandeur)}
                className="w-5 h-5 text-blue-600 bg-gray-200 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
              />
              <label htmlFor="demandeur" className="text-gray-700 text-lg">Demandeur</label>
            </div>
          </div>
          {errors.role && <p className="text-red-500 text-sm">Au moins un rôle doit être sélectionné</p>}
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
