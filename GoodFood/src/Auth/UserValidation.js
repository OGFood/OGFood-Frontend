

const minPasswordLength = 6
const maxPasswordLength = 12

// const minUsernameLength
// const maxUsernameLength

const isNotEmpty = (str) => {
	return str.length > 0;
}

const validatePassword = (pass) => {
	return pass.length >= minPasswordLength && pass.length <= maxPasswordLength && isNotEmpty(pass)
}

const validateEmail = (email) => {
	return email.includes("@") && email.includes(".") && isNotEmpty(email)
}

/**
 * Searches for a matching username, returns true if found.
 *
 * @param   {string}   userNameSearch The username to search for
 * @param   {string[]} userList The array to search through.
 */
const usernameAlreadyExists = (userNameSearch, userList) => {
	return userList.find(user => userNameSearch === user.username)
}

/**
 * Searches for a matching username, returns true if found.
 *
 * @param   {string}   emailSearch The email to search for
 * @param   {string[]} userList The array to search through.
 */
const emailAlreadyInUse = (emailSearch, userList) => {
	return userList.find(user => emailSearch === user.email)
}

const passwordErrorMessage = (pass) => {
	const tooShort = pass.length < minPasswordLength && isNotEmpty(pass)
	const tooLong = pass.length > maxPasswordLength && isNotEmpty(pass)
	if (tooShort) return "Password must be longer than 5 character"
	if (tooLong) return "Password cannot be longer than 12 characters"
}

const emailErrorMessage = (email) => {
	if (!validateEmail(email) && isNotEmpty(email)) return "Please enter a valid email"
}

const usernameErrorMessage = () => {
	return null
}

const userNotFoundMessage = "A user with that name could not be found."
export { minPasswordLength, maxPasswordLength, validatePassword, validateEmail, isNotEmpty, passwordErrorMessage, emailErrorMessage, usernameErrorMessage, userNotFoundMessage, usernameAlreadyExists, emailAlreadyInUse }