import React from "react";
import Dialog from "../../dialog/Dialog.jsx";
import LoginForm from "../../../features/LoginForm/LoginForm";
import PhoneCallForm from "../phoneCallModal/PhoneCallForm.jsx";
import {useDispatch, useSelector} from "react-redux";
import {closeCall, openCall} from "../modalsSlice.js";
import {isCallModelOpen} from "../selectors.js";

const PhoneCallPopup=() => {
const dispatch = useDispatch();
const isCallOpen = useSelector(isCallModelOpen);
  return (
          <Dialog isFooter={false} close = {() => {
              dispatch(closeCall())
          }} open = {() => {dispatch(openCall())}} isOpen={isCallOpen} primeReactIconClassName="pi-phone">
             <PhoneCallForm/>
          </Dialog>
  )
}
export default PhoneCallPopup