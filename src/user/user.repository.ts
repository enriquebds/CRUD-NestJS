import { CreateUserRequest, User } from "./user.interfaces";
import { randomUUID } from "crypto";

export class UserRepository {
    private users = [];

    async create(user: CreateUserRequest) {

        const body = {
            id: randomUUID(),
            email: user.email,
            name: user.name,
            password: user.password,
        }

        this.users.push(body)
    }

    async list (): Promise<User[]> {
        return this.users
    }

    async listById (id: string): Promise<User> {
        const findUser = this.users.find(user => user.id === id)

        console.log(findUser)

        return findUser
    }
}