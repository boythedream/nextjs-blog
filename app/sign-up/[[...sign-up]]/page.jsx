import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <SignUp
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
