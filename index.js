import cities from './Cidades.json';
import states from './Estados.json';

function citiesBy(key, value)
{
    const entries = cities.filter(element => (element[key] === value));

    return entries;
}

function citiesById(id)
{
    return citiesBy('ID', String(id));
}

function stateBy(key, value)
{
    const entries = states.find(element => (element[key] === value));

    return entries;
}

function stateById(id)
{
    return stateBy('ID', String(id));
}

export { cities, states, citiesBy, citiesById, stateBy, stateById };
