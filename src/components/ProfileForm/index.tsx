import { ProfilePayload } from "@/store/profiles/profileSlice";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "./profile.schema";

interface ProfileFormProps {
  onSubmit: (data: ProfilePayload) => void;
  defaultValues?: ProfilePayload;
}

export function ProfileForm({ onSubmit, defaultValues }: ProfileFormProps) {
  const form = useForm<ProfilePayload>({
    defaultValues,
    resolver: zodResolver(profileSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrez votre nom d'utilisateur..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Entrez votre description..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-5">
          Ajouter
        </Button>
      </form>
    </Form>
  );
}
