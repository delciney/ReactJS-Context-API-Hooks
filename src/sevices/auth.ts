import { promises, resolve } from "dns";

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function singIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "ajabskabjkskakjsakab",
        user: {
          name: "Delciney",
          email: "delciney@gmail.com",
        },
      });
    }, 2000);
  });
}
