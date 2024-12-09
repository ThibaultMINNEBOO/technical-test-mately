import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";

interface ProfileProps {
  id: number;
  username: string;
  description: string;
  photo: string;
}

export function Profile({ id, username, description, photo }: ProfileProps) {
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
        <Button className="mt-2" asChild>
          <Link to={`/profiles/${id}/edit`}>Modifier le profil</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
