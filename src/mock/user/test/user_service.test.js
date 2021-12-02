const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('UserService',() => {  
    const login = jest.fn(async (id, password) => [
        {userId : id , password}
    ])
    UserClient.mockImplementation(() => {
        return {
            login,
        }
    })

    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient);
        // login.mockClear();
        // UserClient.mockClear();
    });

    it('userServce - login', async () => {
        await userService.login('ID', 'Password');
        expect(userService.isLogedIn).toBe(true);
        expect(login).toHaveBeenCalledTimes(1);
    })

    it('should filter out only available items', async () => {
        await userService.login('ID', 'Password');
        await userService.login('ID', 'Password');
        expect(login).toHaveBeenCalledTimes(1);

      });
})