
import { useCookies } from "react-cookie"
import { Loginroats} from "./routes"
import DashboartsRoutes from "./routes/Dashboarts"

function App() {
 const [cokies] = useCookies()
  return cokies?.token ? <DashboartsRoutes/> : <Loginroats/>
}

export default App
