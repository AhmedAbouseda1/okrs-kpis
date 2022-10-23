import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createGeneralAch, getGeneralAch, updateGeneralAch} from "../../../actions/generalAchAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {GENERALACH_SETUP_RESET} from "../../../constants/libraryConstants";
const General  = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {loading, success, generalAch, error} = useSelector((state) => state.generalAch);
    const [Date, setDate] = useState();
    const [NoOfWorkingDays, setNoOfWorkingDays] = useState();
    const [NoOfStaff, setNoOfStaff] = useState();
    const [NoOfTotalWorkingHours, setNoOfTotalWorkingHours] = useState();
    const [NoOfStaffWorkingHours, setNoOfStaffWorkingHours] = useState();
    const [TheNumberOfFullTimeEquivalentFTEEmployeesAssignedToUserServices, setTheNumberOfFullTimeEquivalentFTEEmployeesAssignedToUserServices] = useState();
    const [UserAttendancesAtTrainingLessons, setUserAttendancesAtTrainingLessons] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("Date", Date);
        formData.set("NoOfWorkingDays", NoOfWorkingDays);
        formData.set("NoOfStaff", NoOfStaff);
        formData.set("NoOfTotalWorkingHours", NoOfTotalWorkingHours);
        formData.set("NoOfStaffWorkingHours", NoOfStaffWorkingHours);
        formData.set("TheNumberOfFullTimeEquivalentFTEEmployeesAssignedToUserServices", TheNumberOfFullTimeEquivalentFTEEmployeesAssignedToUserServices);
        formData.set("UserAttendancesAtTrainingLessons", UserAttendancesAtTrainingLessons);
        formData.set("year", year);
        formData.set("month", month);

        if (generalAch != null) {
            dispatch(updateGeneralAch(year, month, formData));
        } else {
            dispatch(createGeneralAch(formData));
        }
    }
    useEffect(() => {

        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getGeneralAch(year, month));

    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("general Setup Done", {variant: "success"});
            dispatch({type:GENERALACH_SETUP_RESET});
        }
    }, [dispatch, year, month, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="General achievement"/>
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
                                                        label="Date"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={Date}
                                                        onChange={e => {
                                                            setDate(parseInt(e.target.value.toString()));
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
                                                        label="No. Of Working Days"
                                                        value={NoOfWorkingDays}
                                                        onChange={e => {
                                                            setNoOfWorkingDays(parseInt(e.target.value.toString()));
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
                                                        label="No. Of Staff"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={NoOfStaff}
                                                        onChange={e => {
                                                            setNoOfStaff(parseInt(e.target.value.toString()));
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
                                                        label="No. Of Total Working Hours"
                                                        value={NoOfTotalWorkingHours}
                                                        onChange={e => {
                                                            setNoOfTotalWorkingHours(parseInt(e.target.value.toString()));
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
                                                        label="No. Of Staff Working Hours"
                                                        value={NoOfStaffWorkingHours}
                                                        onChange={e => {
                                                            setNoOfStaffWorkingHours(parseInt(e.target.value.toString()));
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
                                                        label="The Number Of Full-Time Equivalent (FTE) Employees Assigned To User Services"
                                                        value={TheNumberOfFullTimeEquivalentFTEEmployeesAssignedToUserServices}
                                                        onChange={e => {
                                                            setTheNumberOfFullTimeEquivalentFTEEmployeesAssignedToUserServices(parseInt(e.target.value.toString()));
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
                                                    label="User Attendances At Training Lessons "
                                                    value={UserAttendancesAtTrainingLessons}

                                                    onChange={e => {
                                                        setUserAttendancesAtTrainingLessons(parseInt(e.target.value.toString()));
                                                    }}
                                                 />

                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={generalAch.year != null ? "Update":"Submit"}/>
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

export default General;

