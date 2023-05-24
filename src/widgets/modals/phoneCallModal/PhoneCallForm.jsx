import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import {InputText} from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";
export default function PhoneCallForm() {
    const toast = useRef(null);
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Мы перезвоним', detail: `на номер  ${formik.values.phone} вам, ${formik.values.name}`});
    };

    const formik = useFormik({
        initialValues: {
            phone:'',
            name : ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.name.trim() ) {
                errors.name = 'Требуется ваше имя';

            }
            if(!data.phone.trim()) {
                errors.phone = 'Требуется номер.';

            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />


                <label htmlFor="phone">Телефон</label>

                <InputMask
                    mask="+7(999)999-9999"
                    placeholder={"+7(___)___-____"}
                    id="in_phone"
                    type="phone"
                    value={formik.values.phone}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('phone') })}
                    onChange={(e) => {
                        formik.setFieldValue('phone', e.target.value);
                    }}
                />
                <label htmlFor="name">Имя</label>
                <InputText
                    name="name"
                    className={classNames({ 'p-invalid': isFormFieldInvalid('name') })}
                    value={formik.values.name}
                    onChange={(e) => {
                        formik.setFieldValue('name', e.target.value);
                    }}
                />
                {getFormErrorMessage('name')}

                <Button label="Заявка на звонок" type="submit" icon="pi pi-phone" />
            </form>
        </div>
    )
}