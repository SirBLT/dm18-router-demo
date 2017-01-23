angular.module('myApp')
.controller('detailCtrl', function($scope, productsService, $stateParams) {
  /**
   * 1. We need to fetch the specific product
   * 2. Get the product ID from the url bar
   * 3. Use productsService to get this product
   * 4. We need to display it.
   */
  productsService.getOneProduct($stateParams.id).then(function(product) {
    $scope.product = product;
  })
})