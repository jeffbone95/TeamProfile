const Management = require('../lib/Management'); 
const Manage = new Management('Kenneth',2,'kenny@test.com', 6, "Manager"); 




describe('officeNumber', () => { 
    expect(Manage.officeNumber).toBe(6) 
}) 


describe('JobTitle', () => { 
    expect(Manage.getJobTitle()).toBe('Management'); 
})