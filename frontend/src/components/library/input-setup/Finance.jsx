// import {Button, CircularProgress, Grid, Icon, IconButton, styled,} from "@mui/material";
// import React, {useEffect, useState} from "react";
// import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
// import Container from "@mui/material/Container";
// import {Span} from "../../../components/Typography";
// import {InputSetupDTO} from "../../../../modal/librarySetup/InputSetupDTO";
// import {FinanceDTO} from "../../../../modal/librarySetup/FinanceDTO";
//
// const TextField = styled(TextValidator)(() => ({
//     width: "100%",
//     marginBottom: "16px",
// }));
//
// function getFragment(open, toggle, total) {
//     return <React.Fragment>
//         {!open && (
//             <Button onClick={toggle}>Calculate Total Budget
//             </Button>
//         )}
//         {open && (
//             <Container>
//                 Total Budget : {total}
//                 <IconButton onClick={toggle} sx={{mx: 2, verticalAlign: 'middle'}}>
//                     <CircularProgress className="progress"/>
//                 </IconButton>
//             </Container>
//         )}
//     </React.Fragment>;
// }
//
// const Finance = (inputSetupThisMonth = new InputSetupDTO()) => {
//     const [state, setState] = useState(0);
//
//     const [total, setTotal] = useState(0);
//
//
//     const [acquisition, setAcquisition] = useState(0);
//     const [waterAndLighting, setWaterAndLighting] = useState(0);
//     const [variousRequirements, setVariousRequirements] = useState(0);
//     const [maintenance, setMaintenance] = useState(0);
//     const [postAndTelecommunications, setPostAndTelecommunications] = useState(0);
//     const [publishingAndAdvertisingAndReception, setPublishingAndAdvertisingAndReception] = useState(0);
//     const [expensesPrintingAndTranslationsAndJournalsAndCopyright, setExpensesPrintingAndTranslationsAndJournalsAndCopyright] = useState(0);
//     const [publicTransportAndTransitions, setPublicTransportAndTransitions] = useState(0);
//     const [expensesOfVariousService, setExpensesOfVariousService] = useState(0);
//     const [booksAndMediaItems, setBooksAndMediaItems] = useState(0);
//     const [conferences, setConferences] = useState(0);
//     const [trainingPrograms, setTrainingPrograms] = useState(0);
//     const [otherExpenditures, setOtherExpenditures] = useState(0);
//     const [institutionalMeansAllocated, setInstitutionalMeansAllocated] = useState(0);
//     const [open, setOpen] = useState(false);
//
//     const toggle = () => {
//         setTotal(((acquisition == null) ? 0 : parseInt(acquisition.toString())) +
//             ((waterAndLighting == null) ? 0 : parseInt(waterAndLighting.toString())) +
//             ((variousRequirements == null) ? 0 : parseInt(variousRequirements.toString())) +
//             ((maintenance == null) ? 0 : parseInt(maintenance.toString())) +
//             ((postAndTelecommunications == null) ? 0 : parseInt(postAndTelecommunications.toString())) +
//             ((publishingAndAdvertisingAndReception == null) ? 0 : parseInt(publishingAndAdvertisingAndReception.toString())) +
//             ((expensesPrintingAndTranslationsAndJournalsAndCopyright == null) ? 0 : parseInt(expensesPrintingAndTranslationsAndJournalsAndCopyright.toString())) +
//             ((publicTransportAndTransitions == null) ? 0 : parseInt(publicTransportAndTransitions.toString())) +
//             ((expensesOfVariousService == null) ? 0 : parseInt(expensesOfVariousService.toString())) +
//             ((booksAndMediaItems == null) ? 0 : parseInt(booksAndMediaItems.toString())) +
//             ((conferences == null) ? 0 : parseInt(conferences.toString())) +
//             ((trainingPrograms == null) ? 0 : parseInt(trainingPrograms.toString())) +
//             ((otherExpenditures == null) ? 0 : parseInt(otherExpenditures.toString())) +
//             ((institutionalMeansAllocated == null) ? 0 : parseInt(institutionalMeansAllocated.toString())));
//
//         if (total == null)
//             setTotal(0);
//         setOpen(!open);
//     };
//
//
//     const handleChange = (event) => {
//         if (event != null) {
//             event.persist();
//             setState({...state, [event.target.name]: event.target.value});
//         }
//     };
//
//     const {
//         costOfEachElectronicResourceForSpecifiedPeriod
//     } = state;
//
//
//     const handleSubmit = (event) => {
//         let financeDTO = new FinanceDTO();
//         financeDTO.acquisition = acquisition;
//         financeDTO.waterAndLighting = waterAndLighting;
//         financeDTO.variousRequirements = variousRequirements;
//         financeDTO.maintenance = maintenance;
//         financeDTO.postAndTelecommunications = postAndTelecommunications;
//         financeDTO.publishingAndAdvertisingAndReception = publishingAndAdvertisingAndReception;
//         financeDTO.expensesPrintingAndTranslationsAndJournalsAndCopyright = expensesPrintingAndTranslationsAndJournalsAndCopyright;
//         financeDTO.publicTransportAndTransitions = publicTransportAndTransitions;
//         financeDTO.expensesOfVariousService = expensesOfVariousService;
//         financeDTO.booksAndMediaItems = booksAndMediaItems;
//         financeDTO.conferences = conferences;
//         financeDTO.trainingPrograms = trainingPrograms;
//         financeDTO.otherExpenditures = otherExpenditures;
//         financeDTO.institutionalMeansAllocated = institutionalMeansAllocated;
//         financeDTO.costOfEachElectronicResourceForSpecifiedPeriod = costOfEachElectronicResourceForSpecifiedPeriod;
//         inputSetupThisMonth.financeDTO = financeDTO;
//     };
//     return (
//         <div>
//             <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
//                 <Grid container spacing={6}>
//                     <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="Acquisition"
//                             label="Acquisition"
//                             value={acquisition || ""}
//                             onChange={e => {
//                                 setAcquisition(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="WaterAndLighting "
//                             label="Water & lighting "
//                             value={waterAndLighting || ""}
//                             onChange={e => {
//                                 setWaterAndLighting(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="variousRequirements"
//                             label="Various Requirements "
//                             value={variousRequirements || ""}
//                             onChange={e => {
//                                 setVariousRequirements(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="maintenance"
//                             label="Maintenance"
//                             value={maintenance || ""}
//                             onChange={e => {
//                                 setMaintenance(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="trainingPrograms"
//                             label="Training programs"
//                             value={trainingPrograms || ""}
//                             onChange={e => {
//                                 setTrainingPrograms(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="otherExpenditures"
//                             label="Other Expenditures"
//                             value={otherExpenditures || ""}
//                             onChange={e => {
//                                 setOtherExpenditures(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="institutionalMeansAllocated"
//                             label="Institutional Means Allocated"
//                             value={institutionalMeansAllocated || ""}
//                             onChange={e => {
//                                 setInstitutionalMeansAllocated(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         {getFragment(open, toggle, total)}
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="costOfEachElectronicResourceForSpecifiedPeriod"
//                             label="Cost of each electronic resource for specified Period"
//                             value={costOfEachElectronicResourceForSpecifiedPeriod || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                     </Grid>
//                     <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="postAndTelecommunications"
//                             label="Post and telecommunications"
//                             value={postAndTelecommunications || ""}
//                             onChange={e => {
//                                 setPostAndTelecommunications(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="publishingAndAdvertisingAndReception"
//                             label="Publishing, advertising and reception"
//                             value={publishingAndAdvertisingAndReception || ""}
//                             onChange={e => {
//                                 setPublishingAndAdvertisingAndReception(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="expensesPrintingAndTranslationsAndJournalsAndCopyright"
//                             label="Expenses Printing, Translations, Journals And Copyright"
//                             value={expensesPrintingAndTranslationsAndJournalsAndCopyright || ""}
//                             onChange={e => {
//                                 setExpensesPrintingAndTranslationsAndJournalsAndCopyright(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="publicTransportAndTransitions"
//                             label="Public Transport and Transitions"
//                             value={publicTransportAndTransitions || ""}
//                             onChange={e => {
//                                 setPublicTransportAndTransitions(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="expensesOfVariousService"
//                             label="Expenses of various service"
//                             value={expensesOfVariousService || ""}
//                             onChange={e => {
//                                 setExpensesOfVariousService(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="noOfPc"
//                             label="Books and media items"
//                             value={booksAndMediaItems || ""}
//                             onChange={e => {
//                                 setBooksAndMediaItems(parseInt(e.target.value.toString()));
//                                 handleChange()
//                             }} errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         /> <TextField
//                         sx={{mb: 4}}
//                         type="number"
//                         name="conferences"
//                         label="Conferences"
//                         value={conferences || ""}
//                         onChange={e => {
//                             setConferences(parseInt(e.target.value.toString()));
//                             handleChange()
//                         }} errorMessages={["this field is required"]}
//                         validators={["required"]}
//                     />
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
// export default Finance;
