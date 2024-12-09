import { ProfileForm } from "@/components/ProfileForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { RootState } from "@/store";
import { updateProfile } from "@/store/profiles/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "wouter";

export function EditProfileRoute() {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profiles);

  const params = useParams<{ id: string }>();
  const selectedProfile = profiles.find(
    (profile) => profile.id === Number(params.id)
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation();

  return (
    <div className="flex justify-center items-center h-screen p-30">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            Modifier le profil de{" "}
            <span className="text-primary">{selectedProfile?.username}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileForm
            label="Modifier"
            defaultValues={selectedProfile}
            onSubmit={(data) => {
              dispatch(
                updateProfile({
                  id: selectedProfile!.id,
                  ...data,
                })
              );
              toast({
                variant: "success",
                title: "Profil modifié",
                description: "Le profil modifié avec succès",
              });
              setLocation("/");
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
