const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});
test('does the test come up in circle ci', ()=>{
  expect((2)).toBe(2)
})