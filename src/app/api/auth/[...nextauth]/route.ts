import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [], // Configure providers here
});

export { handler as GET, handler as POST };
