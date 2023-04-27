import { Body, Controller, Delete, Post, Get, Patch, Res, Param  } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserRequest } from "./user.interfaces";
import { UserRepository } from "./user.repository";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserRepository) {}

    @Post()
    async createUser (@Body() body: CreateUserRequest) {
        this.userService.create(body)

        return body
    }

    @Get()
    async listUsers () {
        const users = this.userService.list()

        return users
    }

    @Get('/:id')
    async listUserbyId (@Param('id') id: string) {
        const user = this.userService.listById(id)

        return user
    }
}