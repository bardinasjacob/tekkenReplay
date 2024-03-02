import connectDB from "../connect";

interface SampleData{
    message: string;
}

export async function GET(req: Request, res: Response) {
    try{
        await connectDB
        const data: SampleData = {
            message: "Sample Message",
        };
        res = Response.json(data)
        return res;
    }
    catch(error){
        console.error("Error handling request ", error);
        res.json()
    }
  }