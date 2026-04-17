import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
interface User {
  name: string;
  password: string;
}
const userList: User[] = [
  {
    name: "akio",
    password: "1234",
  },
  {
    name: "akash",
    password: "5678 ",
  },
];

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
        secretCode: {
          label: "Secret Code",
          type: "number",
          placeholder: "Enter secret code",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const { username, password } = credentials;

        const user = userList.find(
          (u) => u.name === username && u.password === password,
        );

        if (user) {
          return {
            id: username,
            name: user.name,
          };
        }
        return null;
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
