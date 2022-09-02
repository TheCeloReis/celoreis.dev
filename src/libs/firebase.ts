import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMXf8vG55fpuub1SdiObqgRuFuORfELV8",
  authDomain: "theceloreis.firebaseapp.com",
  projectId: "theceloreis",
  storageBucket: "theceloreis.appspot.com",
  messagingSenderId: "398640179210",
  appId: "1:398640179210:web:97fb7f00a36690345ed7f3",
  measurementId: "G-8C4BT53JDY",
};

export let analytics: ReturnType<typeof getAnalytics>;

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}
