// import React, {useContext, useState} from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import TextField from "@mui/material/TextField";
// import SettingsContext from "../../../hooks/useSettings";
// import SettingsContext from "../../../contexts/Settings";
//
//
// const DateSetup = () => {
//
//     const [settingDate, setSettingDate] = useState(new Date());
//     const { settings } = useContext(SettingsContext)
//
//     function handleSubmit() {
//         setSettings(settingDate)
//     }
//
//     return (
//         <>
//             <main className="w-full mt-12 sm:mt-0">
//                 <div>
//                     <form onSubmit={handleSubmit} encType="multipart/form-data"
//                           className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4" id="mainform">
//                         <div className="flex flex-col gap-2">
//                             <h2 className="text-sm">Setup your library for year and month :</h2>
//                             <div
//                                 className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
//                                 <TextField
//                                     type="text"
//                                     label="Squared Meters Of Buildings"
//                                     variant="outlined"
//                                     size="small"
//                                     required
//                                     onChange={e => {
//                                         setSettingDate(e.target.value.toString());
//                                     }}/>
//                                 {/*<DatePicker*/}
//                                 {/*    selected={settingDate}*/}
//                                 {/*    onChange={(date) => setSettingDate(date)}*/}
//                                 {/*    dateFormat="MM/yyyy"*/}
//                                 {/*    showMonthYearPicker*/}
//                                 {/*/>*/}
//                             </div>
//                             <div className="flex justify-end">
//                                 <input form="mainform" type="submit"
//                                        className="bg-primary-orange uppercase text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
//                                        value="Submit"/>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>
//         </>
//     );
// };
//
// export default DateSetup;
//
