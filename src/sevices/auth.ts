import { promises, resolve } from "dns";

export function singIn() {
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
