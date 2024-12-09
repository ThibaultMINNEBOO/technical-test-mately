import { Profile } from "@/components/Profile";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Plus } from "lucide-react";
import { Link } from "wouter";

export function HomeRoute() {
  const profiles = useSelector((state: RootState) => state.profiles);

  return (
    <div className="flex w-full items-center text-center p-10 flex-col gap-10">
      <h1 className="text-4xl font-extrabold">
        Recherche de <span className="text-primary">membres</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {profiles.map((profile) => (
          <Profile key={profile.id} {...profile} />
        ))}
        {profiles.length === 0 && (
          <Link
            to="/profiles/new"
            className="text-center border-dashed border-2 rounded transition-all opacity-50 hover:opacity-100 hover:border-primary text-gray-500 w-full p-14 content-center"
          >
            Aucun profil trouvé, voulez-vous en créer{" "}
            <span className="text-primary">un</span>
          </Link>
        )}
      </div>
      {profiles.length > 0 && (
        <Button asChild>
          <Link to={`/profiles/new`}>
            <Plus />
            Ajouter un profil
          </Link>
        </Button>
      )}
    </div>
  );
}
