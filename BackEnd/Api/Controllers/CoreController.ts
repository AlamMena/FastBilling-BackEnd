import { Request, Response } from "express";
export abstract class CoreController<TEntity>{

    CreateAsync(req: Request, res: Response) {
        const{ name } = req.body;
        return res.send({ repository: "my repo" })
    }
    UpdateAsync(entity: TEntity): Promise<Boolean> {
        return new Promise<Boolean>(func => true);
    }

    DeleteAsync(id: string): Promise<Boolean> {
        return new Promise<Boolean>(func => true);
    }

    GetByIdAsync(id: string): Promise<Boolean> {
        return new Promise<Boolean>(func => true);
    }

}