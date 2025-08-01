import { Loginroats} from "./routes"
import DashboartsRoutes from "./routes/Dashboarts"

function App() {
  const token = false

  return token ? <DashboartsRoutes/> : <Loginroats/>
}

export default App
