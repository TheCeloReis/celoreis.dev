import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useRouter } from "next/router";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAMXf8vG55fpuub1SdiObqgRuFuORfELV8",
  authDomain: "theceloreis.firebaseapp.com",
  projectId: "theceloreis",
  storageBucket: "theceloreis.appspot.com",
  messagingSenderId: "398640179210",
  appId: "1:398640179210:web:97fb7f00a36690345ed7f3",
  measurementId: "G-8C4BT53JDY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const useAnalytics = () => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);
};
