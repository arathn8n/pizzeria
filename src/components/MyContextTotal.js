// creamos un createContext para pasar valores globalmente es mejor que usar props cuando tienes muchos componentes
import { createContext } from "react";
const MyContext = createContext({})
export default MyContext