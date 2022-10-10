import {Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createFinanceAch, getFinanceAch, updateFinanceAch} from "../../../actions/financeAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {FINANCEACH_SETUP_RESET} from "../../../constants/libraryConstants";


const FinanceAch = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {finance, loading, success, error} = useSelector((state) => state.finance);
    const [FeesFines, setFeesFines] = useState()
    const [waterAndLighting, setWaterAndLighting] = useState()
    const [OtherIncome, setOtherIncome] = useState()
    const [BookFair, setBookFair] = useState()
    const [TheExpendituresOnAcquisition, setTheExpendituresOnAcquisition] = useState()
    const [WaterLighting, setWaterLighting] = useState()
    const [BookAndMediaItem, setBookAndMediaItem] = useState()
    const [ExpendituresOnTheElectronicCollection, setExpendituresOnTheElectronicCollection] = useState()
    const [Conferences, setConferences] = useState()
    const [TrainingPrograms, setTrainingPrograms] = useState()
    const [OtherExpenditures, setOtherExpenditures] = useState()
    const [StaffCosts, setStaffCosts] = useState()
    const [LibraryMeansReceivedBySpecialGrantOrLibrary, seLibraryMeansReceivedBySpecialGrantOrLibrary] = useState()



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("FeesFines", FeesFines);
        formData.set("TrainingCenter", TrainingCenter);
        formData.set("OtherIncome", OtherIncome);
        formData.set("BookFair", BookFair);
        formData.set("TheExpendituresOnAcquisition", TheExpendituresOnAcquisition);
        formData.set("WaterLighting", WaterLighting);
        formData.set("BookAndMediaItem", BookAndMediaItem);
        formData.set("ExpendituresOnTheElectronicCollection", ExpendituresOnTheElectronicCollection);
        formData.set("Conferences", Conferences);
        formData.set("TrainingPrograms", TrainingPrograms);
        formData.set("OtherExpenditures", OtherExpenditures);
        formData.set("StaffCosts", StaffCosts);
        formData.set("LibraryMeansReceivedBySpecialGrantOrLibrary", LibraryMeansReceivedBySpecialGrantOrLibrary);
        formData.set("year", year);
        formData.set("month", month);
        if (financeAch != null) {
            dispatch(updateFinanceAch(year, month, formData));

        } else {
            dispatch(createFinanceAch(formData));
        }
    }
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Finance Setup Done", {variant: "success"});
            dispatch({type: FINANCE_SETUP_RESET});
        }
    }, [dispatch, error, success, navigate, enqueueSnackbar]);


    return (<>

            <MetaData title="Finance achievement"/>

            {loading ? <Loader/> :

                <>

                    <main className="w-full mt-12 sm:mt-0">
                        <div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data"
                                  className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4" id="mainform">
                                <Grid container spacing={6}>
                                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                        <div className="flex flex-col gap-2">
                                        <h2 className="text-sm" class="text-[#006d76]">Income</h2>
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="areaInputs">

                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="Fees/Fines"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={FeesFines}
                                                        onChange={e => {
                                                            setFeesFines(parseInt(e.target.value.toString()));
                                                        }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">

                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="activitiesInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="Training Center"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={TrainingCenter}
                                                        onChange={e => {
                                                            setTrainingCenter(parseInt(e.target.value.toString()));
                                                        }}
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Other Income"
                                                    value={OtherIncome}

                                                    onChange={e => {
                                                        setOtherIncome(parseInt(e.target.value.toString()));
                                                    }}
                                                 />
                                            </div>
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Book Fair"
                                                    value={BookFair}

                                                    onChange={e => {
                                                        setBookFair(parseInt(e.target.value.toString()));
                                                    }}
                                                 />

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                        <h2 className="text-sm" class="text-[#006d76]">Expenditures vs</h2>
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="The Expenditures On Acquisition"
                                                    value={TheExpendituresOnAcquisition}
                                                    onChange={e => {
                                                        setTheExpendituresOnAcquisition(parseInt(e.target.value.toString()));
                                                    }}
                                                 />

                                            </div>
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Water & Lighting"
                                                    value={WaterLighting}

                                                    onChange={e => {
                                                        setWaterLighting(parseInt(e.target.value.toString()));
                                                    }}
                                                 />

                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="areaInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Book And Media Item"
                                                        value={BookAndMediaItem}
                                                        onChange={e => {
                                                            setBookAndMediaItem(parseInt(e.target.value.toString()));
                                                        }}
                                                     />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">

                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="activitiesInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        size="small"
                                                        required
                                                        label="Expenditures On The Electronic Collection"
                                                        value={ExpendituresOnTheElectronicCollection}
                                                        onChange={e => {
                                                            setExpendituresOnTheElectronicCollection(parseInt(e.target.value.toString()));
                                                        }}
                                                     />

                                                </div>
                                            </div>
                                        </div>

                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="readingInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Conferences"
                                                        value={Conferences}
                                                        onChange={e => {
                                                            setConferences(parseInt(e.target.value.toString()));
                                                        }}
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div
                                                className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    label="Training Programs"
                                                    value={TrainingPrograms}

                                                    onChange={e => {
                                                        setTrainingPrograms(parseInt(e.target.value.toString()));
                                                    }}
                                                 />

                                            </div>


                                            <div className="flex flex-col gap-2">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Other Expenditures"
                                                        value={OtherExpenditures}

                                                        onChange={e => {
                                                            setOtherExpenditures(parseInt(e.target.value.toString()));
                                                        }}
                                                     />

                                                </div>
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Staff Costs"
                                                        value={StaffCosts}

                                                        onChange={e => {
                                                            setStaffCosts(parseInt(e.target.value.toString()));
                                                        }}
                                                     />

                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Library Means Received By Special Grant Or Library"
                                                        value={LibraryMeansReceivedBySpecialGrantOrLibrary}

                                                        onChange={e => {
                                                            setLibraryMeansReceivedBySpecialGrantOrLibrary(parseInt(e.target.value.toString()));
                                                        }}
                                                     />

                                                </div>



                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">

                                            <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={FinanceAch != null ? "Update":"Submit"}/>
                                        </div>
                                        </div>

                                    </Grid>

                                </Grid>

                            </form>
                        </div>
                    </main>
                </>}
        </>);
};

export default FinanceAch;

