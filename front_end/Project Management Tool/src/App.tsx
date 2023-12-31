import MainRouter from "../MainRouter";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

const VITE_CLERK_PUBLISHABLE_KEY =
  "pk_test_cGV0LW1pbmstNTEuY2xlcmsuYWNjb3VudHMuZGV2JA";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#6666ff",

            // Alias Token
          },
        }}
      >
        <StyleProvider hashPriority="high">
          <BrowserRouter>
            <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
              <MainRouter />
              <SignedIn></SignedIn>

              <SignedOut>{/* nothing here */}</SignedOut>
            </ClerkProvider>
          </BrowserRouter>
        </StyleProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
