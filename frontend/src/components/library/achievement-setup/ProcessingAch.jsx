import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createProcessingAch, getProcessingAch, updateProcessingAch} from "../../../actions/infrastructureAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {PROCESSINGACH_SETUP_RESET} from "../../../constants/libraryConstants";
const Processing  = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {loading, success, infrastructure, error} = useSelector((state) => state.infrastructure);
    const [totalArea, setTotalArea] = useState(0);
    const [open, setOpen] = useState(false);
    const [NumberOfDocumentDigitizedInTheReportingYear, setNumberOfDocumentDigitizedInTheReportingYear] = useState();
    const [OwnerInstitutionsAcademicPublicationInTheInstitutionalRepository, setOwnerInstitutionsAcademicPublicationInTheInstitutionalRepository] = useState();
    const [RareMaterialsAccessibleViaWebCatalogues, setRareMaterialsAccessibleViaWebCatalogues] = useState();
    const [LibraryVisits, setLibraryVisits] = useState();
    const [TargetPopulationReached, setTargetPopulationReached] = useState();
    const [TheNumberOfMediaAcquiredInACertainPeriod, setTheNumberOfMediaAcquiredInACertainPeriod] = useState();
    const [NumberOfAttendancesAtLibraryInstructionalSessions, setNumberOfAttendancesAtLibraryInstructionalSessions] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("NumberOfDocumentDigitizedInTheReportingYear", NumberOfDocumentDigitizedInTheReportingYear);
        formData.set("OwnerInstitutionsAcademicPublicationInTheInstitutionalRepository", OwnerInstitutionsAcademicPublicationInTheInstitutionalRepository);
        formData.set("RareMaterialsAccessibleViaWebCatalogues", RareMaterialsAccessibleViaWebCatalogues);
        formData.set("LibraryVisits", LibraryVisits);
        formData.set("TargetPopulationReached", TargetPopulationReached);
        formData.set("TheNumberOfMediaAcquiredInACertainPeriod", TheNumberOfMediaAcquiredInACertainPeriod);
        formData.set("NumberOfAttendancesAtLibraryInstructionalSessions", NumberOfAttendancesAtLibraryInstructionalSessions);

        formData.set("year", year);
        formData.set("month", month);

        if (processing != null) {
            dispatch(updateProcessingAch(year, month, formData));
        } else {
            dispatch(createProcessingAch(formData));
        }
    }
    useEffect(() => {

        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getProcessingAch(year, month));

    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Processing Setup Done", {variant: "success"});
            dispatch({type: PROCESSINGACH_SETUP_RESET});
        }
    }, [dispatch, year, month, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="Processing achievement"/>
            {loading ? <Loader/> :

                <>

                    <main className="w-full mt-12 sm:mt-0">
                        <div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data"
                                  className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4" id="mainform">
                                <Grid container spacing={6}>
                                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col sm:flex-row items-center gap-3"
                                                 id="areaInputs">
                                                <div
                                                    className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed focus-within:border-primary-blue">
                                                    <TextField
                                                        type="number"
                                                        label="Number Of Document Digitized In The Reporting Year"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={NumberOfDocumentDigitizedInTheReportingYear}
                                                        onChange={e => {
                                                            setNumberOfDocumentDigitizedInTheReportingYear(parseInt(e.target.value.toString()));
                                                        }}/>
                                                </div>
                                                <div className="flex flex-col gap-2">

                                                </div>
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
                                                        label="Owner Institution's Academic Publication In The Institutional Repository"
                                                        value={OwnerInstitutionsAcademicPublicationInTheInstitutionalRepository}
                                                        onChange={e => {
                                                            setOwnerInstitutionsAcademicPublicationInTheInstitutionalRepository(parseInt(e.target.value.toString()));
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
                                                        label="Rare Materials Accessible Via Web Catalogues"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={RareMaterialsAccessibleViaWebCatalogues}
                                                        onChange={e => {
                                                            setRareMaterialsAccessibleViaWebCatalogues(parseInt(e.target.value.toString()));
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
                                                        label="Library Visits"
                                                        value={LibraryVisits}
                                                        onChange={e => {
                                                            setLibraryVisits(parseInt(e.target.value.toString()));
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
                                                        label="Target Population Reached"
                                                        value={TargetPopulationReached}
                                                        onChange={e => {
                                                            setTargetPopulationReached(parseInt(e.target.value.toString()));
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
                                                        label="The Number Of Media Acquired In A Certain Period"
                                                        value={TheNumberOfMediaAcquiredInACertainPeriod}
                                                        onChange={e => {
                                                            setTheNumberOfMediaAcquiredInACertainPeriod(parseInt(e.target.value.toString()));
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
                                                    label="Number Of Attendances At Library Instructional Sessions"
                                                    value={NumberOfAttendancesAtLibraryInstructionalSessions}

                                                    onChange={e => {
                                                        setNumberOfAttendancesAtLibraryInstructionalSessions(parseInt(e.target.value.toString()));
                                                    }}
                                                 />

                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={infrastructure != null ? "Update":"Submit"}/>
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

export default Processing;

