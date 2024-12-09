import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { removeProfile } from "@/store/profiles/profileSlice";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "wouter";

interface ProfileProps {
  id: number;
  username: string;
  description: string;
  photo: string;
}

export function Profile({ id, username, description, photo }: ProfileProps) {
  const dispatch = useDispatch();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center justify-center">
          <Avatar>
            <AvatarImage src={photo} />
            <AvatarFallback>{username.slice(0, 2)}</AvatarFallback>
          </Avatar>
          {username}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="flex gap-2 justify-center items-center">
          <Button className="mt-2" asChild>
            <Link to={`/profiles/${id}/edit`}>Modifier le profil</Link>
          </Button>
          <Button
            className="mt-2"
            onClick={() => {
              dispatch(removeProfile(id));
            }}
            size="icon"
            variant="destructive"
          >
            <Trash2 />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
