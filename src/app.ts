import express, {NextFunction, Request, Response} from "express";
import {errorMiddleware, standardCallbackMiddleware} from "./middleware/standard-callback.middleware";

const app = express();


app.use(express.json()
);

app.use(standardCallbackMiddleware);
app.use(errorMiddleware);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json({message: "Hello World"});
    } catch (error) {
        console.log(error)
    }
})
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json({message: "Hello World"});
    } catch (error) {
        console.log(error)
    }
})
app.listen(8080, () => {
    console.log("App listening on 8080");
});