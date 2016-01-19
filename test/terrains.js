'use strict';

describe('Terrains', function () {

	beforeEach(function () {
		module('packt');
	});

	describe('Finding all Terrains', function () {
		it('should return all Terrains in the collection', inject(function (Terrains) {
			Terrains.findAll().length.should.be.above(0);
		}));
	});

	describe('Finding a specific terrain', function () {
		it('should return a single terrain in the collection when given a parameter', inject(function (Terrains) {
			var terrain = Terrains.find('swamp');
			should.exist(terrain);
		}));

		it('should return undefined if no terrain is found', inject(function (Terrains) {
			var terrain = Terrains.find('i_dont_exist');
			should.not.exist(terrain);
		}));
	});

});