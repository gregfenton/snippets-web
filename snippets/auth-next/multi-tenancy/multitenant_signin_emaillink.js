// This snippet file was generated by processing the source file:
// ./auth-next/multi-tenancy.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START multitenant_signin_emaillink_modular]
import { isSignInWithEmailLink, parseActionCodeURL, signInWithEmailLink } from "firebase/auth";
if (isSignInWithEmailLink(auth, window.location.href)) {
  const actionCodeUrl = parseActionCodeURL(window.location.href);
  if (actionCodeUrl.tenantId) {
    auth.tenantId = actionCodeUrl.tenantId;
  }
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // User is signed in.
      // tenant ID available in result.user.tenantId.
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
    });
}
// [END multitenant_signin_emaillink_modular]