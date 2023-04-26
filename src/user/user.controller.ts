import { Controller, Post } from "@nestjs/common";
import { Request, Response } from "express";
import createUserService from "./user.service";

@Controller('/user')
export class UserController {
    @Post()
    async createUserController (req: Request, res: Response) {
        const { email, name, password } = req.body

        const createdUser = await createUserService({email, name, password})

        return res.json(createdUser)
    }
}