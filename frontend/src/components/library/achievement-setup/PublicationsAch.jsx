import {Button, CircularProgress, Grid, IconButton,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {createPublicationAch, getPublicationAch, updatePublicationAch} from "../../../actions/publicationAchAction";
import {clearErrors} from "../../../actions/productAction";
import TextField from "@mui/material/TextField";
import MetaData from "../../Layouts/MetaData";
import Loader from "../../Layouts/Loader";
import {PUBLICATIONACH_SETUP_RESET} from "../../../constants/libraryConstants";
const Publications = ({year, month}) => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {loading, success, publicationsAch, error} = useSelector((state) => state.publicationsAch);
    const [NoOfRecordsInstitutionsAcademicPublicationsInTheInstitutionalRepository, setNoOfRecordsInstitutionsAcademicPublicationsInTheInstitutionalRepository] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("NoOfRecordsInstitutionsAcademicPublicationsInTheInstitutionalRepository", NoOfRecordsInstitutionsAcademicPublicationsInTheInstitutionalRepository);

        formData.set("year", year);
        formData.set("month", month);

        if (publicationsAch != null) {
            dispatch(updatePublicationAch(year, month, formData));
        } else {
            dispatch(createPublicationAch(formData));
        }
    }
    useEffect(() => {

        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getPublicationAch(year, month));

    }, [dispatch, year, month, error, enqueueSnackbar]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        if (success) {
            enqueueSnackbar("Publications Setup Done", {variant: "success"});
            dispatch({type: PUBLICATIONACH_SETUP_RESET});
        }
    }, [dispatch, year, month, error, success, navigate, enqueueSnackbar]);


    return (
        <>
            <MetaData title="Publications achievement"/>
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
                                                        label="No. Of Records Institution’s Academic Publications in the Institutional Repository"
                                                        variant="outlined"
                                                        size="small"
                                                        required
                                                        value={NoOfRecordsInstitutionsAcademicPublicationsInTheInstitutionalRepository}
                                                        onChange={e => {
                                                            setNoOfRecordsInstitutionsAcademicPublicationsInTheInstitutionalRepository(parseInt(e.target.value.toString()));
                                                        }}/>
                                                </div>
                                                <div className="flex flex-col gap-2">

                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <input form="mainform" type="submit"
                                                   className="backgroundgreen uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
                                                   value={publicationsAch != null ? "Update":"Submit"}/>
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

export default Publications;

