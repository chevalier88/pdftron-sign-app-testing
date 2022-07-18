import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from '../firebase/firebaseSlice';
import AssignReducer from '../components/FakeDocusign/Assign/AssignSlice.js';
import SignDocumentReducer from '../components/SignDocument/SignDocumentSlice.js';
import ViewDocumentReducer from '../components/ViewDocument/ViewDocumentSlice.js';

export default configureStore({
  reducer: {
    firebase: firebaseReducer,
    assign: AssignReducer,
    signDoc: SignDocumentReducer,
    viewDoc: ViewDocumentReducer,
  },
});
