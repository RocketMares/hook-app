const { renderHook } = require("@testing-library/react")
const { useCounter } = require("../../src/hook/useCount")


describe('Prueba de useCount', () => { 
    test('Debe de retornar las pruebas por defecto ', () => { 

      const {counter} =  renderHook(()=>useCounter());

      console.log(counter)

     })
 })