import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // this is to avoid loading the initial sign-up screen even after logging in
  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
