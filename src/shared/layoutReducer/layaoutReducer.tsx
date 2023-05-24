import {commonLoadingStatus} from "./types";
import {ReactElement} from "react";
import {ProgressSpinner} from "primereact/progressspinner";

export const layoutReducer = (process: commonLoadingStatus, Component: ReactElement, data: any, isSpinner = false, ErrorMessage? : ReactElement) => {
    // @ts-ignore

    if(ErrorMessage == undefined){
        ErrorMessage = <div>ошибка сервера</div>
    }
    switch (process) {
        case "loading": {
            if (isSpinner)
                // @ts-ignore

                return <ProgressSpinner width={200} height={200}/>
            // @ts-ignore

            else return <Component data = {data}/>
        }
        case "idle" : {
            // @ts-ignore
            return <Component data = {data}/>
        }
        case "error" : {
            // @ts-ignore
            return <div>ошибка</div>
        }
        default : // @ts-ignore
            return <Component data = {data}/>;
    }

}