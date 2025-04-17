import * as React from "react";
import {HeroUIProvider} from "@heroui/react";

function App() {
  return (
    <HeroUIProvider>
      <YourApplication />
    </HeroUIProvider>
  );
}