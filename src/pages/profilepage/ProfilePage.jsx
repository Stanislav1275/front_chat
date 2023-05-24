import "./ProfilePage.scss"
import {Button} from "primereact/button";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../shared/api/auth/authSlice.js";
import {useNavigate} from "react-router-dom";
export const ProfilePage = () => {
	const dispatch = useDispatch();
	const nav = useNavigate()

	return (
		<div className="profile_page">
			<label htmlFor="fio">ФИО</label>
			<div id = "fio" className="fio">
				Аристов Станислав Викторович
			</div>
			<label htmlFor="db">ФИО</label>

			<div id = "db" className="db">
				15.03.2004
			</div>
			<label htmlFor="passport">ФИО</label>

			<div id = "passport" className="passport">
				631295848
			</div>
			<label htmlFor="snills">СНИЛС</label>

			<div id = "snills" className="snills">
				253984742
			</div>
			<div className="exit">
				<Button
					onClick={() => {
						dispatch(logoutUser())
						nav("/")
					}}
				>
					Выйти из аккаунта
				</Button>
			</div>
		</div>
	)
}