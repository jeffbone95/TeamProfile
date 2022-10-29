const Employee = require('../lib/Employee'); 
const Intern = require('../lib/Intern'); 

const prospect = new Intern('Ryan Gosling', 2, 'iwrotethatnotebook@test.com', 'school', "Intern"); 


describe('school', () => { 
    it('recalls school attended', () => { 
        expect(prospect.school).toBe('school')
    }) 
}) 
describe('Role', () => { 
it('Should return school name', () => {
expect(prospect.getRole()).toBe('Intern');
})  
}); 


