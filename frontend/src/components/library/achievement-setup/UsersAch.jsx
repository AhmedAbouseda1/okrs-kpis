import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

import {createUsersAch, updateUsersAch, getUsersAch} from "../../../actions/usersAchAction";
import {clearErrors} from "../../../actions/productAction";

import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {USERSACH_SETUP_RESET} from "../../../constants/libraryConstants";
const UserAch  = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {loading, success, UserAch, error} = useSelector((state) => state.UserAch);
    const [totalAreap, setTotalArea] = useState(0);
    const [open, setOpen] = useState(false);
    const [VisitsVirtual, setVisitsVirtual] = useState();
    const [VisitsPhysical, setVisitsPhysical] = useState();
    const [ActiveBorrowers, setActiveBorrowers] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("VisitsPhysical", VisitsPhysical);
        formData.set("VisitsVirtual", VisitsVirtual);
        formData.set("ActiveBorrowers", ActiveBorrowers);

        formData.set("year", year);
        formData.set("month", month);

        if (UserAch != null) {
            dispatch(updateUsersAch(year, month, formData));
        } else {
            dispatch(createUsersAch(formData));
        }
    }
    useEffect(() => {

        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getUsersAch(year, month));

    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("User achievement Setup Done", {variant: "success"});
            dispatch({type: USERSACH_SETUP_RESET});
        }
    }, [dispatch, year, month, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="Users achievement"/>
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
                                                            label="Visits.Physical"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={VisitsPhysical}
                                                        onChange={e => {
                                                            setVisitsPhysical(parseInt(e.target.value.toString()));
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
                                                        label="Visits.Virtual "
                                                        value={VisitsVirtual}
                                                        onChange={e => {
                                                            setVisitsVirtual(parseInt(e.target.value.toString()));
                                                        }}
                                                     />

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
                                                        label="Active Borrowers"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={ActiveBorrowers}
                                                        onChange={e => {
                                                            setActiveBorrowers(parseInt(e.target.value.toString()));
                                                        }}
                                                     />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={UserAch != null ? "Update":"Submit"}/>
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

export default UserAch;

