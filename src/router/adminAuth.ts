import { useAuthStore } from "@/stores/auth";

export default function adminAuth(to, from, next) {
  const authStore = useAuthStore();
  // verify auth token before each page change
  authStore.verifyAuth();

  // Check if the user is authenticated
  const userRole = localStorage.getItem("authUser");
  const user = userRole !== null ? JSON.parse(userRole) : null;
  // Check if the user has the admin role
  let isAdmin = false;
  if (user.role === "monitor") {
    isAdmin = true;
  }

  if (authStore.isAuthenticated && isAdmin) {
    // User is authenticated and has the admin role, proceed to the next route
    next();
  } else if (authStore.isAuthenticated && !isAdmin) {
    // User is authenticated but does not have the admin role, redirect to the previous route
    next(from);
  } else {
    // User is not authenticated, redirect to the login page
    next({ name: "Login" }); // Replace 'Login' with the actual name of your login route
  }
}
