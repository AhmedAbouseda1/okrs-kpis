// import {Button, Grid, Icon, styled,} from "@mui/material";
// import React, {useState} from "react";
// import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
// import {Span} from "../../../components/Typography";
// import {InputSetupDTO} from "../../../../modal/librarySetup/InputSetupDTO";
// import {HumanResourcesDTO} from "../../../../modal/librarySetup/HumanResourcesDTO";
// import PropTypes from "prop-types";
// import {getYearMonthSetup} from "../../../redux/actions/LibraryActions";
//
// const TextField = styled(TextValidator)(() => ({
//     width: "100%",
//     marginBottom: "16px",
// }));
//
//
//
// const HumanResources = ({inputSetupDTOThisMonth})=> {
//     const [state, setState] = useState(0);
//     const handleChange = (event) => {
//         event.persist();
//         setState({...state, [event.target.name]: event.target.value});
//     };
//     let  humanResourcesDTO= new HumanResourcesDTO();
//
//     const {
//         noPrimaryUserGroup,
//         openingHoursTotal,
//         totalNumOfHours,
//         noOfStaff,
//         staffHoursTotal,
//     } = state;
//     const handleSubmit = (event) => {
//         // getYearMonthSetup("2021 - 8");
//         humanResourcesDTO.noPrimaryUserGroup = noPrimaryUserGroup;
//         humanResourcesDTO.openingHoursTotal = openingHoursTotal;
//         humanResourcesDTO.totalNumOfHours = totalNumOfHours;
//         humanResourcesDTO.noOfStaff = noOfStaff;
//         humanResourcesDTO.staffHoursTotal = staffHoursTotal;
//
//         inputSetupDTOThisMonth.humanResourcesDTO = humanResourcesDTO;
//
//         // inputSetupThisMonth.setHumanResourcesDTO((item) => ({
//         //     ...item,
//         //     humanResourcesDTO: humanResourcesDTO
//         // }));
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
//                             name="noPrimaryUserGroup"
//                             label="No. primary user group (target audiences)"
//                             value={noPrimaryUserGroup || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="openingHoursTotal"
//                             label="Opening hours total"
//                             value={openingHoursTotal || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="totalNumOfHours"
//                             label="Total number of hours to complete a specified number of inter library loans or electronic document delivery transactions"
//                             value={totalNumOfHours || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                     </Grid>
//                     <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="noOfStaff"
//                             label="No. of staff"
//                             value={noOfStaff || ""}
//                             onChange={handleChange}
//                             errorMessages={["this field is required"]}
//                             validators={["required"]}
//                         />
//
//                         <TextField
//                             sx={{mb: 4}}
//                             type="number"
//                             name="staffHoursTotal"
//                             label="Staff hours total"
//                             value={staffHoursTotal || ""}
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
// // Setting default props for the Header
// HumanResources.defaultProps = {
//     children: new InputSetupDTO(),
// };
//
// // Typechecking props for the Header
// HumanResources.propTypes = {
//     children: InputSetupDTO,
// };
// export default HumanResources;
