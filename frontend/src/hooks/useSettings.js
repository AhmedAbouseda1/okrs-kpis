import { useContext } from 'react'
import SettingsContext from "../contexts/Settings";

const useSettings = () => useContext(SettingsContext)

export default useSettings
