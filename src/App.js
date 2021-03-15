import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Container,
	TextField,
	Paper,
	Grid,
	Checkbox,
	FormControlLabel,
	Button
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	row: {
		padding: theme.spacing(0.5, 2)
	},
	label: {
		lineHeight: 2.2,
		textAlign: "left"
	},
	input: {
		height: 4
	},
	button: {
		height: 4
	},
	alignRight: {
		textAlign: "right"
	}
}))

export default function App() {
	const classes = useStyles()

	//checkbox
	const [checkMiddleName, setCheckMiddleName] = useState(true)
	const handleCheckMiddleName = (e) => {
		setCheckMiddleName(e.target.checked)
	}

	//default data for name
	const [fullName, setFullName] = useState({
		firstName: "",
		middleName: "",
		lastName: ""
	})
	const handleChangeName = (e) => {
		const value = e.target.value
		setFullName({
			...fullName,
			[e.target.name]: value
		})
	}
	//set default name when click autofill button
	const defaultName = {
		firstName: "Nhi",
		middleName: "Getonnnn",
		lastName: "Le"
	}

	const setDefaultName = () => {
		const inputMiddleName = document.querySelector(
			"input[name='middleName']"
		)
		if (inputMiddleName.disabled === false) {
			setFullName(defaultName)
		} else {
			setFullName({
				...defaultName,
				middleName: fullName.middleName
			})
		}
	}

	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<Paper className={classes.paper} elevation={3}>
							<Grid container className={classes.row}>
								<Grid item xs={4} className={classes.label}>
									First name
								</Grid>
								<Grid item xs={8}>
									<TextField
										variant='outlined'
										fullWidth={true}
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
										name='firstName'
										value={fullName.firstName}
										onChange={handleChangeName}
									/>
								</Grid>
							</Grid>
							<Grid container className={classes.row}>
								<Grid item xs={4} className={classes.label}>
									Middle name
								</Grid>
								<Grid item xs={8}>
									<TextField
										variant='outlined'
										fullWidth={true}
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
										value={fullName.middleName}
										name='middleName'
										onChange={handleChangeName}
										disabled={!checkMiddleName}
									/>
								</Grid>
							</Grid>
							<Grid container className={classes.row}>
								<Grid item xs={12} className={classes.label}>
									<FormControlLabel
										control={
											<Checkbox
												checked={checkMiddleName}
												onChange={handleCheckMiddleName}
												name='checkedA'
											/>
										}
										label='Middle name'
									/>
								</Grid>
							</Grid>
							<Grid container className={classes.row}>
								<Grid item xs={4} className={classes.label}>
									Last name
								</Grid>
								<Grid item xs={8}>
									<TextField
										variant='outlined'
										fullWidth={true}
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
										value={fullName.lastName}
										name='lastName'
										onChange={handleChangeName}
									/>
								</Grid>
							</Grid>
							<Grid container className={classes.row}>
								<Grid
									item
									xs={12}
									className={classes.alignRight}>
									<Button
										variant='contained'
										color='primary'
										onClick={setDefaultName}>
										Autofill
									</Button>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={1}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
