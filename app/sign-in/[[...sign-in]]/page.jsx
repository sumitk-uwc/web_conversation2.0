import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-auto">
      <SignIn />
    </div>
  );
};
export default SignInPage;
