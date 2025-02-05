import { SignIn } from "@clerk/clerk-react";
export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-red-500 hover:bg-red-600 text-sm normal-case",
            card: "shadow-none",
          },
        }}
      />
    </div>
  );
}
