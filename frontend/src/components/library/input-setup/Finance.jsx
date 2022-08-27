import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createFinance, getFinance} from "../../../actions/financeAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {FINANCE_SETUP_RESET} from "../../../constants/libraryConstants";


const Finance = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {finance, loading, success, error} = useSelector((state) => state.finance);
    const [acquisition, setAcquisition] = useState(0)
    const [waterAndLighting, setWaterAndLighting] = useState(0)
    const [variousRequirements, setVariousRequirements] = useState(0)
    const [maintenance, setMaintenance] = useState(0)
    const [postAndTelecommunications, setPostAndTelecommunications] = useState(0)
    const [publishingAndAdvertisingAndReception, setPublishingAndAdvertisingAndReception] = useState(0)
    const [expensesPrintingAndTranslationsAndJournalsAndCopyright, setExpensesPrintingAndTranslationsAndJournalsAndCopyright] = useState(0)
    const [publicTransportAndTransitions, setPublicTransportAndTransitions] = useState(0)
    const [expensesOfVariousService, setExpensesOfVariousService] = useState(0)
    const [booksAndMediaItems, setBooksAndMediaItems] = useState(0)
    const [conferences, setConferences] = useState(0)
    const [trainingPrograms, setTrainingPrograms] = useState(0)
    const [otherExpenditures, setOtherExpenditures] = useState(0)
    const [institutionalMeansAllocated, setInstitutionalMeansAllocated] = useState(0)
    const [costOfEachElectronicResourceForSpecifiedPeriod, setCostOfEachElectronicResourceForSpecifiedPeriod] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("acquisition", acquisition);
        formData.set("waterAndLighting", waterAndLighting);
        formData.set("variousRequirements", variousRequirements);
        formData.set("maintenance", maintenance);
        formData.set("postAndTelecommunications", postAndTelecommunications);
        formData.set("publishingAndAdvertisingAndReception", publishingAndAdvertisingAndReception);
        formData.set("expensesPrintingAndTranslationsAndJournalsAndCopyright", expensesPrintingAndTranslationsAndJournalsAndCopyright);
        formData.set("publicTransportAndTransitions", publicTransportAndTransitions);
        formData.set("expensesOfVariousService", expensesOfVariousService);
        formData.set("booksAndMediaItems", booksAndMediaItems);
        formData.set("conferences", conferences);
        formData.set("trainingPrograms", trainingPrograms);
        formData.set("otherExpenditures", otherExpenditures);
        formData.set("institutionalMeansAllocated", institutionalMeansAllocated);
        formData.set("costOfEachElectronicResourceForSpecifiedPeriod", costOfEachElectronicResourceForSpecifiedPeriod);
        formData.set("year", year);
        formData.set("month", month);

        dispatch(createFinance(formData));
    }
    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getFinance(year, month));
    }, [dispatch, year, month, error, enqueueSnackbar]);

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


    return (
        <>

            <MetaData title="Finance"/>

            {loading ? <Loader/> :

                <>

                    <main className="w-full mt-12 sm:mt-0">
                        <div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data"
                                  className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4" id="mainform">
                                <Grid container spacing={6}>
                                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                        {finance.postAndTelecommunications}
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="areaInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="acquisition"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={finance != null ? finance.acquisition : acquisition}
                                                        onChange={e => {
                                                            setAcquisition(parseInt(e.target.value.toString()));
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
                                                        label="Various Requirements"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={finance != null ? finance.variousRequirements : variousRequirements}
                                                        onChange={e => {
                                                            setVariousRequirements(parseInt(e.target.value.toString()));
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
                                                    label="Public transport and transitions"
                                                    value={finance != null ? finance.publicTransportAndTransitions : publicTransportAndTransitions}

                                                    onChange={e => {
                                                        setPublicTransportAndTransitions(parseInt(e.target.value.toString()));
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
                                                    label="Expenses Of Various Service"
                                                    value={finance != null ? finance.expensesOfVariousService : expensesOfVariousService}

                                                    onChange={e => {
                                                        setExpensesOfVariousService(parseInt(e.target.value.toString()));
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
                                                    label="Books and media items"
                                                    value={finance != null ? finance.booksAndMediaItems : booksAndMediaItems}

                                                    onChange={e => {
                                                        setBooksAndMediaItems(parseInt(e.target.value.toString()));
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
                                                    label="Conferences"
                                                    value={finance != null ? finance.conferences : conferences}

                                                    onChange={e => {
                                                        setConferences(parseInt(e.target.value.toString()));
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
                                                        label="Water And Lighting"
                                                        value={finance != null ? finance.waterAndLighting : waterAndLighting}
                                                        onChange={e => {
                                                            setWaterAndLighting(parseInt(e.target.value.toString()));
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
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        label="Maintenance"
                                                        value={finance != null ? finance.maintenance : maintenance}
                                                        onChange={e => {
                                                            setMaintenance(parseInt(e.target.value.toString()));
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
                                                        label="Post and Telecommunications"
                                                        value={finance != null ? finance.postAndTelecommunications : postAndTelecommunications}
                                                        onChange={e => {
                                                            setPostAndTelecommunications(parseInt(e.target.value.toString()));
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
                                                    label="Expenses printing, Translations, Journals and Copyright"
                                                    value={finance != null ? finance.expensesPrintingAndTranslationsAndJournalsAndCopyright : expensesPrintingAndTranslationsAndJournalsAndCopyright}

                                                    onChange={e => {
                                                        setExpensesPrintingAndTranslationsAndJournalsAndCopyright(parseInt(e.target.value.toString()));
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
                                                        label="Training Programs"
                                                        value={finance != null ? finance.trainingPrograms : trainingPrograms}

                                                        onChange={e => {
                                                            setTrainingPrograms(parseInt(e.target.value.toString()));
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
                                                        label="Other Expenditures"
                                                        value={finance != null ? finance.otherExpenditures : otherExpenditures}

                                                        onChange={e => {
                                                            setOtherExpenditures(parseInt(e.target.value.toString()));
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
                                                        label="Institutional Means Allocated"
                                                        value={finance != null ? finance.institutionalMeansAllocated : institutionalMeansAllocated}

                                                        onChange={e => {
                                                            setInstitutionalMeansAllocated(parseInt(e.target.value.toString()));
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
                                                        label="Cost Of Each Electronic Resource For Specified Period"
                                                        value={finance != null ? finance.costOfEachElectronicResourceForSpecifiedPeriod : costOfEachElectronicResourceForSpecifiedPeriod}

                                                        onChange={e => {
                                                            setCostOfEachElectronicResourceForSpecifiedPeriod(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>


                                            </div>
                                        </div>
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
                                                        label="Publishing,advertising and reception"
                                                        value={finance != null ? finance.publishingAndAdvertisingAndReception : publishingAndAdvertisingAndReception}
                                                        onChange={e => {
                                                            setPublishingAndAdvertisingAndReception(parseInt(e.target.value.toString()));
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="bg-primary-orange uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value="Submit"/>
                                        </div>
                                    </Grid>

                                </Grid>

                            </form>
                        </div>
                    </main>
                </>
            }
        </>
    );
};

export default Finance;

