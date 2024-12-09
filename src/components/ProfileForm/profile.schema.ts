import { z } from "zod";

const USERNAME_ERROR =
  "Le nom d'utilisateur doit contenir entre 3 et 20 caractères";
const DESCRIPTION_ERROR =
  "La description doit contenir entre 3 et 500 caractères";

export const profileSchema = z.object({
  username: z
    .string({
      message: USERNAME_ERROR,
    })
    .min(3, {
      message: USERNAME_ERROR,
    })
    .max(150, {
      message: USERNAME_ERROR,
    }),
  description: z
    .string({
      message: DESCRIPTION_ERROR,
    })
    .min(3, {
      message: DESCRIPTION_ERROR,
    })
    .max(500, {
      message: DESCRIPTION_ERROR,
    }),
});
