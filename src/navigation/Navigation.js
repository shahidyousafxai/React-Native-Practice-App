import React, {useState, createContext} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from "./app"

export const asyncStoreContext = createContext(null);

const Navigation = () => {
  const [token, setToken] = useState(false)


  return (
      <SafeAreaProvider>
        <asyncStoreContext.Provider value={[token, setToken]}>
          <App/>
        </asyncStoreContext.Provider>
      </SafeAreaProvider>
  )
}
export default Navigation