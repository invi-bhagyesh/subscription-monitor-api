const errorMiddleware = (err, req, res, next) => {
    try {
        let error = {...err};

        error.message = err.message;

        console.error(err);

        //Mongoose bad ObjectID
        if (err.name == 'CastError'){
            const message = "Resource Not Found";
            error = new Error(message);
            error.statusCode = 404;
        }
        //Mongoose duplicate key
        if (err.code ==11000){
            const message = "Duplicate Field Found";
            error = new Error(message);
            error.statusCode = 400;
        }
        //Mongoose Validation error
        if (err.name == 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '))
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({success:false, error: error.message || "Server error"});
    } catch(error){
    next(error);
    }
};

export default errorMiddleware;