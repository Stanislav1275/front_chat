import React from "react";
import {Button} from "primereact/button";
import {Dialog as PrimeReactDialog} from 'primereact/dialog';
import "./Dialog.scss"

const Dialog = ({
                    isOpen,
                    close,
                    open,
                    children,
                    postfix = null,
                    primeReactIconClassName = 'pi-user-edit',
                    isFooter = true,
                    className = "",
                    header = null
                }) => {
    const footerContent = (
        <div className={"align-items-center justify-content-center flex"}>
            <Button
                label="Ещё нет аккаунта?"
                icon="pi pi-times"
                onClick={() => {
                    // setVisible(false)
                    open()
                }}
                className="p-button-text align-content-center"/>

        </div>
    );

    return (
        <div className={"card flex justify-content-center" + " " + className}>
            <i className={`pi ${primeReactIconClassName}`}

                onClick={
                () => {
                    open()

                }}>
                {/*{postfix}*/}
            </i>
            {/*<Button label="Show" icon="pi pi-external-link" onClick={() => {*/}
            {/*    setIsOpen(true)*/}

            {/*}}/>*/}
            <PrimeReactDialog
                maximized={false}
                resizable={false}
                header={header}
                visible={isOpen}
                style={{width: '50vw'}}
                onHide={() => {
                    close()
                }}
                footer={isFooter ? footerContent : null}
            >
                {children}
            </PrimeReactDialog>
        </div>
    )
}
export default Dialog