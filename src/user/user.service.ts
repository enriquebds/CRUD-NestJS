import { CreateUserRequest } from "./user.interfaces";
import { UserRepository } from "./user.repository";


const createUserService = async ({email, name, password}: CreateUserRequest) => {
    const user = {
        email,
        name,
        password
    }
   
    return user
}

export default createUserService