'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stateById = exports.stateBy = exports.citiesById = exports.citiesBy = exports.states = exports.cities = undefined;

var _Cidades = require('./Cidades.json');

var _Cidades2 = _interopRequireDefault(_Cidades);

var _Estados = require('./Estados.json');

var _Estados2 = _interopRequireDefault(_Estados);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function citiesBy(key, value) {
    var entries = _Cidades2.default.filter(function (element) {
        return element[key] === value;
    });

    return entries;
}

function citiesById(id) {
    return citiesBy('ID', String(id));
}

function stateBy(key, value) {
    var entries = _Estados2.default.find(function (element) {
        return element[key] === value;
    });

    return entries;
}

function stateById(id) {
    return stateBy('ID', String(id));
}

exports.cities = _Cidades2.default;
exports.states = _Estados2.default;
exports.citiesBy = citiesBy;
exports.citiesById = citiesById;
exports.stateBy = stateBy;
exports.stateById = stateById;