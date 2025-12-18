export const globalErrorHandler = (err, req, res, next) => {
	const result = {
		error: err.stack,
		message: err.message,
	};
	console.log(result);
	res.status(500).send(result);
};
