import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createInfrastructure, getInfrastructure, updateInfrastructure} from "../../../actions/infrastructureAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {INFRASTRUCTURE_SETUP_RESET} from "../../../constants/libraryConstants";
const Processing  = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {loading, success, infrastructure, error} = useSelector((state) => state.infrastructure);
    const [totalArea, setTotalArea] = useState(0);
    const [open, setOpen] = useState(false);
    const [squaredMetersOfBuildings, setSquaredMetersOfBuildings] = useState();
    const [squaredMetersAvailableForPublic, setSquaredMetersAvailableForPublic] = useState();
    const [readingHallsSeats, setReadingHallsSeats] = useState();
    const [readingHallsTables, setReadingHallsTables] = useState();
    const [activitiesHallsTables, setActivitiesHallsTables] = useState();
    const [activitiesHallsSeats, setActivitiesHallsSeats] = useState();
    const [noOfPc, setNoOfPc] = useState();

    const toggle = () => {
        setTotalArea(((squaredMetersOfBuildings == null) ? 0 : squaredMetersOfBuildings) +
            (((squaredMetersAvailableForPublic) == null) ? 0 : squaredMetersAvailableForPublic));
        if (totalArea == null)
            setTotalArea(0);
        setOpen(!open);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("squaredMetersOfBuildings", squaredMetersOfBuildings);
        formData.set("squaredMetersAvailableForPublic", squaredMetersAvailableForPublic);
        formData.set("readingHallsSeats", readingHallsSeats);
        formData.set("readingHallsTables", readingHallsTables);
        formData.set("activitiesHallsTables", activitiesHallsTables);
        formData.set("activitiesHallsSeats", activitiesHallsSeats);
        formData.set("noOfPc", noOfPc);
        formData.set("year", year);
        formData.set("month", month);

        if (infrastructure != null) {
            dispatch(updateInfrastructure(year, month, formData));
        } else {
            dispatch(createInfrastructure(formData));
        }
    }
    useEffect(() => {

        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getInfrastructure(year, month));

    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Infrastructure Setup Done", {variant: "success"});
            dispatch({type: INFRASTRUCTURE_SETUP_RESET});
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
                                                        value={squaredMetersOfBuildings}
                                                        onChange={e => {
                                                            setSquaredMetersOfBuildings(parseInt(e.target.value.toString()));
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
                                                        value={squaredMetersAvailableForPublic}
                                                        onChange={e => {
                                                            setSquaredMetersAvailableForPublic(parseInt(e.target.value.toString()));
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
                                                        value={activitiesHallsTables}
                                                        onChange={e => {
                                                            setActivitiesHallsTables(parseInt(e.target.value.toString()));
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
                                                        value={activitiesHallsSeats}
                                                        onChange={e => {
                                                            setActivitiesHallsSeats(parseInt(e.target.value.toString()));
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
                                                        value={readingHallsTables}
                                                        onChange={e => {
                                                            setReadingHallsTables(parseInt(e.target.value.toString()));
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
                                                        value={readingHallsSeats}
                                                        onChange={e => {
                                                            setReadingHallsSeats(parseInt(e.target.value.toString()));
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
                                                    label="Number Of Attendances At Library Instructional Sessions "
                                                    value={noOfPc}

                                                    onChange={e => {
                                                        setNoOfPc(parseInt(e.target.value.toString()));
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

