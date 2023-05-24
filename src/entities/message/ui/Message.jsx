import "./Message.scss"

export const Message = ({children, who, isYourSelf}) => {
    let clazz = isYourSelf?"yourself":"foreign";
    return (
        <div className={`messageItem ${clazz}`}>
            <div>
                <h6>
                    От {who}
                </h6>
            </div>
            <div>
                <h6>
                    {children}
                </h6>
            </div>
        </div>
    )
}