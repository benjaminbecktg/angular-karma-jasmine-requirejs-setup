/*
In the specs, need to define the external library dependencies as well as the library you wish to test.
Best to specify external dependencies first and in order to avoid dependencies issue
*/
define(['angular', 'angularMocks', 'sampleController'], function(angular, mocks, sampleController){

	describe('Sample Controller Example ', function() {

		// load the angular app
		beforeEach(module('myApp'));

		var SampleController,
		scope;

		/*
		The $injector will strip leading / trailing underscores when inspecting function's arguments 
		to retrieve dependencies. This is useful since we can do $rootScope = _$rootScope_; without
		confusion and later in the tests use $rootScope. 
		An indicator of leading _$ helps to remember that those are injected variables.
		*/
		beforeEach(inject(function (_$rootScope_, _$controller_) {
			scope = _$rootScope_.$new();
			SampleController = _$controller_('sampleController', {
				$scope: scope
			});
		}));

		// The test and asserts.
		it('says Hello Karma', function () {
			expect(scope.greetKarma).toEqual('Hello Karma!');
		});
	});

});
