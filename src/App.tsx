import { AppHeader } from "./components/header";
import { Router } from "./Router";

function App() {
  return (
    <>
      {/* <div className="min-h-screen mx-auto max-w-[1440px]"> */}
      <AppHeader />
      <div className="p-80">
        <Router />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
