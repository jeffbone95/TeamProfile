const Engineer = require('../lib/Engineer'); 
const machine = new Engineer('Christain Bale', 2, 'iwasinthemachinest@test.com', 'git@github.com', 'Engineer'); 

describe('github', () => { 
it('Return guthub address', () => { 
    expect(machine.github).toBe('git@github.com'); 
})


}); 

describe('Role', () => { 
    it('Return Engineer', () => { 
        expect(machine.getRole()).toBe('Engineer'); 



    })






}); 