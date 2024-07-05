import { useEffect, useState } from "react";
import Header from "../../../shared/ui/header/header";

function MainPage() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if(window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUsername(window.Telegram.WebApp.initDataUnsafe.user.username || '')
    }

    window.Telegram.WebApp.expand();
  },[])

  return (
    <>
      <Header username={username}/>
    </>
  );
}

export default MainPage;
