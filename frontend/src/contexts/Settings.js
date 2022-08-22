import React, {createContext, useState} from 'react'


export  const SettingsContext = createContext()

 const SettingsProvider = (props) => {
    const [settings] = useState(null);
    return (
        <SettingsContext.Provider value={settings}>
            {props.children}
        </SettingsContext.Provider>
    )
}
export default SettingsProvider

