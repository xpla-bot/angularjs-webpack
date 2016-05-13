/// importujemy moduł
import './products'

describe('Module: Products', () => {

  describe('Controller: ProductsComponent', () => {

    /// wstrzykujemy go do
    beforeEach(angular.mock.module('app.components.products'))

    /// wstrzykiwanie kontrolera komponentu
    beforeEach(angular.mock.inject(($componentController: any) => {
      //5/ mockowanie zależności kontrolera
      this.$ctrl = $componentController('products', {
        Products: {
          products: [{ name: 'asd', price: 0 }],
        },
      })
    }))

    //3/ test 
    it('should have products injected from service', () => {
      expect(this.$ctrl.products.length).toBe(1)
    })

  })

})
