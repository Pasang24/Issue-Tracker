import SignupForm from "@/components/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

function SignupPage() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default SignupPage;
