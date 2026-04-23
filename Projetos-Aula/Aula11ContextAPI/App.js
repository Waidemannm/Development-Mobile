
import { CounterProvider } from "./src/context/CounterContext";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <AppNavigator />
      </CounterProvider>
    </ThemeProvider>
  )
}