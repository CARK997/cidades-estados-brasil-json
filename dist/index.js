'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stateById = exports.stateBy = exports.cityById = exports.cityBy = exports.states = exports.cities = undefined;

var _Cidades = require('./Cidades.json');

var _Cidades2 = _interopRequireDefault(_Cidades);

var _Estados = require('./Estados.json');

var _Estados2 = _interopRequireDefault(_Estados);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cityById(id) {
    var city = _Cidades2.default[id];

    if (city) {
        return city;
    }

    return '';
}

function cityBy(key, value) {
    var city = _Cidades2.default.find(function (element) {
        return element[key] === value;
    });

    return city;
}

function stateById(id) {
    var state = _Estados2.default[id];

    if (state) {
        return state;
    }

    return '';
}

function stateBy(key, value) {
    var state = _Estados2.default.find(function (element) {
        return element[key] === value;
    });

    return state;
}

// function cep(value) {}

exports.cities = _Cidades2.default;
exports.states = _Estados2.default;
exports.cityBy = cityBy;
exports.cityById = cityById;
exports.stateBy = stateBy;
exports.stateById = stateById;