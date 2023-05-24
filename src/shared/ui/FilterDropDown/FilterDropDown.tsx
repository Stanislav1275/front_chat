import {useState} from "react";
import DropDown from "../DropDown/DropDown";
import {Dropdown} from "primereact/dropdown";

const FilterDropDown = ({cities} : {cities: any[]} ) => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    return (
        <div className="card flex justify-content-center align-items-center">
            <label htmlFor="dd-city">Выберите фильтр</label>

            <span className="p-float-label">
                {/*<DropDown elements={[]} placeholder={"фильтровать по"}/>*/}
                <Dropdown
                    inputId="dd-city"
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.value)}
                    options={cities}
                    optionLabel="name"
                    className="w-full md:w-14rem" />
            </span>
        </div>
    )
}
export default FilterDropDown