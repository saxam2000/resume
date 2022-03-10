import ContactSection from "./ContactSections";
import EducationSection from "./EducationSection";
import authReducer from "./authReducer";
import WorkSection from "./WorkSection"
import DocumentReducer from "./DocumentReducer";
import { combineReducers } from 'redux';
import {firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";


export default combineReducers({
    ContactSection:ContactSection,EducationSection:EducationSection,WorkSection:WorkSection,firebase:firebaseReducer,firestore:firestoreReducer,auth:authReducer,DocumentReducer:DocumentReducer});