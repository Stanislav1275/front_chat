import React, {useEffect, useState} from "react";
import {Dropdown} from 'primereact/dropdown';
// import {getPointLoadingStatus} from "../../../entities/point/selectors";


export default function DropDown({elements, placeholder, dispatch}) {
    // const pointsLoadingString = useAppSelector(getPointLoadingStatus);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const selectedCountryTemplate = (option, props) => {

        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">

                <div>{option.name}</div>
            </div>
        );
    };
    useEffect(() => {
        dispatch(selectedCountry)
    }, [selectedCountry])
    return (
        <div className="card flex justify-content-center">

            <Dropdown
                showOnFocus
                emptyMessage = {<div>ошибка сервера</div>}
                required
                inputId="dd-city"
                value={selectedCountry}
                onChange={(e) => {
                    if(e.value != selectedCountry?.name){
                        setSelectedCountry(e.value)
                    }
                }}
                options={elements}
                optionLabel="name"
                placeholder={placeholder}
                filter
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-full md:w-14rem"/>
        </div>
    )
}