import './products'

describe('Module: Products', () => {

  describe('Controller: ProductsComponent', () => {
    
    beforeEach(angular.mock.module('app.components.products'))
    
    beforeEach(angular.mock.inject(($componentController: any) => {
      this.$ctrl = $componentController('products', {
        Products: {
          products: [{ name: 'asd', price: 0 }],
        },
      })
    }))

    it('should have products injected from service', () => {
      expect(this.$ctrl.products.length).toBe(1)
    })

  })

})
