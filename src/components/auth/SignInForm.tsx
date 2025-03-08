import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, VisibilityOff, Visibility } from "@mui/icons-material";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // État pour la case à cocher "Remember Me"
  const [errors, setErrors] = useState({ matricule: "", password: "" });

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Réinitialiser les erreurs
    setErrors({ matricule: "", password: "" });

    let formValid = true;

    // Validation des champs
    if (!matricule) {
      setErrors((prevErrors) => ({ ...prevErrors, matricule: "Matricule est obligatoire" }));
      formValid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Mot de passe est obligatoire" }));
      formValid = false;
    }

    // Si le formulaire est valide, vous pouvez procéder à l'envoi
    if (formValid) {
      console.log("Matricule:", matricule);
      console.log("Mot de passe:", password);
      console.log("Remember Me:", rememberMe); // Afficher l'état de la case à cocher
      // Ajoutez ici la logique pour envoyer les données ou vous connecter
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSignIn}>
          <div className="space-y-4">
            {/* Champ Matricule */}
            <div>
              <Label>
                Matricule <span className="text-red-500">*</span>
              </Label>
              <Input
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
                placeholder="Votre matricule"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.matricule ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.matricule && (
                <p className="text-red-500 text-sm mt-1">{errors.matricule}</p>
              )}
            </div>

            {/* Champ Mot de Passe */}
            <div>
              <Label>
                Mot de passe <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute z-30 cursor-pointer right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <Visibility className="fill-gray-500" />
                  ) : (
                    <VisibilityOff className="fill-gray-500" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Case à cocher "Remember Me" */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <Label htmlFor="rememberMe" className="text-sm">
              Remember me
              </Label>
            </div>

            {/* Lien "Mot de passe oublié" */}
            <div className="text-sm text-blue-600">
              <Link to="/forgot-password">Mot de passe oublié ?</Link>
            </div>

            {/* Bouton de connexion */}
            <div>
              <Button
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                size="sm"
              >
                Se connecter
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
