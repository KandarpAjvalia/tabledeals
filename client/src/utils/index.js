// eslint-disable-next-line import/prefer-default-export
export const formatTime = (timeString) => {
	// eslint-disable-next-line prefer-const
	let [hour, minute] = timeString.split(':').slice(0, 2)
	const suffix = hour >= 12 ? 'PM' : 'AM'
	hour %= 12
	if (hour === 0) {
		hour = 12
	}
	return `${hour}:${minute} ${suffix}`
}
