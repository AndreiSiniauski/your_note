import { useState, useEffect } from "react";
import "./App.css";
import MainPage from "@pages/mainPage/ui/mainPage";

function App() {
  const [user, setUser] = useState<WebAppUser>()

  useEffect(() => {
    if(window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUser(window.Telegram.WebApp.initDataUnsafe.user)
    }

    window.Telegram.WebApp.expand();
  },[])
  return (
    <MainPage user={user}/>
  );
}

export default App;
