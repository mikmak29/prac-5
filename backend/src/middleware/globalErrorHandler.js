export const globalErrorHandler = (err, req, res, next) => {
	const result = {
		error: err.stack,
		messsage: err.messsage,
	};
	console.log(result);
	res.status(500).send(result);
};
