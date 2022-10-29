const Employee = require('../lib/Employee'); 
const denzel = new Employee('denzel washington', 2, 'wheresmyoscar@test.com', "Employee"); 

describe('name', () => { 
    it('Return employee name', () => { 
        expect(denzel.name).toBe('denzel washington')




    })





}); 
describe('id', () => { 
    it('return id number', () => { 
        expect(emp.id).toBe(2)



    }) 

}); 
describe('role', () => { 
    it('return employee', () => { 
        expect(denzel.getRole()).toBe('Employee')
    }) 



}); 