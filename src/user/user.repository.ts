export class UserRepository {
    private users = [];

    async save(user: any) {
        this.users.push(user)
    }
}