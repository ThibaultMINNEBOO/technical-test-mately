import { ProfileForm } from "@/components/ProfileForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { addProfile } from "@/store/profiles/profileSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "wouter";

export function NewProfileRoute() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen p-30">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Ajouter un profil</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileForm
            label="Ajouter"
            onSubmit={(data) => {
              dispatch(addProfile(data));
              toast({
                variant: "success",
                title: "Profil ajouté",
                description: "Le profil a été ajouté avec succès.",
              });
              setLocation("/");
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
