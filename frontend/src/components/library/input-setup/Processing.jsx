// import {Button, Grid, Icon, styled,} from "@mui/material";
// import React, {useEffect, useState} from "react";
// import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
// import {InputSetupDTO} from "../../../../modal/librarySetup/InputSetupDTO";
// import {ProcessingDTO} from "../../../../modal/librarySetup/ProcessingDTO";
// import {Span} from "../../../components/Typography";
//
// const TextField = styled(TextValidator)(() => ({
//     width: "100%",
//     marginBottom: "16px",
// }));
//
// const Processing = (inputSetupThisMonth = new InputSetupDTO()) => {
//     const [state, setState] = useState(0);
//     const handleChange = (event) => {
//         event.persist();
//         setState({...state, [event.target.name]: event.target.value});
//     };
//
//     const {
//         requiredTitlesInCollection,
//         targetPopulationReached,
//         numberOfAcademicPublicationsLast3Years,
//     } = state;
//     const handleSubmit = (event) => {
//         let processingDTO = new ProcessingDTO();
//         processingDTO.requiredTitlesInCollection = requiredTitlesInCollection;
//         processingDTO.targetPopulationReached = targetPopulationReached;
//         processingDTO.numberOfAcademicPublicationsLast3Years = numberOfAcademicPublicationsLast3Years;
//         inputSetupThisMonth.processingDTO = processingDTO;
//     };
//     return (
//
//         <div>
//             <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
//                 <Grid container spacing={6}>
//                     <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="requiredTitlesInCollection"
//                             label="Required Titles in the Collection"
//                             value={requiredTitlesInCollection || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="targetPopulationReached"
//                             label="Target Population Reached"
//                             value={targetPopulationReached || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="numberOfAcademicPublicationsLast3Years"
//                             label="Total number of hours to complete a specified number of inter library loans or electronic document delivery transactions"
//                             value={numberOfAcademicPublicationsLast3Years || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                     </Grid>
//                 </Grid>
//                 <Button color="primary" variant="contained" type="submit">
//                     <Icon>send</Icon>
//                     <Span sx={{pl: 1, textTransform: "capitalize"}}>Save</Span>
//                 </Button>
//             </ValidatorForm>
//         </div>
//     );
// };
//
// export default Processing;
