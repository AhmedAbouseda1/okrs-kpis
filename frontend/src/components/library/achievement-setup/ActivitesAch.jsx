import {Grid,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createInfrastructure, getInfrastructure, updateInfrastructure} from "../../../actions/infrastructureAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {INFRASTRUCTURE_SETUP_RESET} from "../../../constants/libraryConstants";

const Activites  = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {loading, success, activitiesAchievement, error} = useSelector((state) => state.activitiesAchievement);
    const [totalArea, setTotalArea] = useState(0);
    const [open, setOpen] = useState(false);
    const [outreachActivities, setOutreachActivities] = useState();
    const [scientificAndEducationalActivities, setScientificAndEducationalActivities] = useState();
    const [seminarsAndConferences, setSeminarsAndConferences] = useState();

    const toggle = () => {
        setTotalArea(((outreachActivities == null) ? 0 : outreachActivities) +
            ((seminarsAndConferences == null) ? 0 : seminarsAndConferences) +
            (((scientificAndEducationalActivities) == null) ? 0 : scientificAndEducationalActivities));
        if (totalArea == null)
            setTotalArea(0);
        setOpen(!open);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("scientificAndEducationalActivities", scientificAndEducationalActivities);
        formData.set("seminarsAndConferences", seminarsAndConferences);
        formData.set("outreachActivities", outreachActivities);
        formData.set("year", year);
        formData.set("month", month);

        if (activitiesAchievement.year != null) {
            dispatch(updateActivitiesAchievement(year, month, formData));
        } else {
            dispatch(createActivitiesAchievement(formData));
        }
    }
    useEffect(() => {

        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getActivitiesAchievement(year, month));
        if (activitiesAchievement.year !== null) {
            setSeminarsAndConferences(activitiesAchievement.seminarsAndConferences);
            setScientificAndEducationalActivities(activitiesAchievement.scientificAndEducationalActivities);
            setOutreachActivities(activitiesAchievement.outreachActivities);
        }
    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("ActivitiesAchievement Setup Done", {variant: "success"});
            dispatch({type: ACTIVITIES_ACHIEVEMENT_SETUP_RESET});
        }
    }, [dispatch, year, month, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="Activities Achievement"/>
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
                                                            label="Scientific,Educational Activities"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={scientificAndEducationalActivities}
                                                        onChange={e => {
                                                            setScientificAndEducationalActivities(parseInt(e.target.value.toString()));
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
                                                        label="Seminars, Conferences"
                                                        value={seminarsAndConferences}
                                                        onChange={e => {
                                                            setSeminarsAndConferences(parseInt(e.target.value.toString()));
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
                                                        label="Outreach Activities"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={outreachActivities}
                                                        onChange={e => {
                                                            setOutreachActivities(parseInt(e.target.value.toString()));
                                                        }}
                                                     />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={activitiesAchievement.year != null ? "Update":"Submit"}/>
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

export default Activites;

