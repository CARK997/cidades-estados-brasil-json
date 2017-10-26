import { citiesBy, citiesById, stateBy, stateById } from './dist/index';

const MINAS_GERAIS = {
    ID: '11',
    Sigla: 'MG',
    Nome: 'Minas Gerais',
};
const BELO_HORIZONTE = {
    ID: '1630',
    Nome: 'Belo Horizonte',
    Estado: '11',
};

describe('citiesBy', () =>
{
    it('should return correct city', () =>
    {
        expect(citiesBy('Nome', 'Belo Horizonte')).toEqual([BELO_HORIZONTE]);
    });

    it('should return correct cities for a state ID', () =>
    {
        expect(citiesBy('Estado', '22')).toEqual([
            { ID: '4398', Nome: 'Alto Alegre', Estado: '22' },
            { ID: '4399', Nome: 'Amajari', Estado: '22' },
            { ID: '4400', Nome: 'Boa Vista', Estado: '22' },
            { ID: '4401', Nome: 'Bonfim', Estado: '22' },
            { ID: '4402', Nome: 'Cantá', Estado: '22' },
            { ID: '4403', Nome: 'Caracaraí', Estado: '22' },
            { ID: '4404', Nome: 'Caroebe', Estado: '22' },
            { ID: '4405', Nome: 'Iracema', Estado: '22' },
            { ID: '4406', Nome: 'Mucajaí', Estado: '22' },
            { ID: '4407', Nome: 'Normandia', Estado: '22' },
            { ID: '4408', Nome: 'Pacaraima', Estado: '22' },
            { ID: '4409', Nome: 'Rorainópolis', Estado: '22' },
            { ID: '4410', Nome: 'São João da Baliza', Estado: '22' },
            { ID: '4411', Nome: 'São Luiz', Estado: '22' },
            { ID: '4412', Nome: 'Uiramutã', Estado: '22' },
        ]);
    });
});

describe('citiesById', () =>
{
    it('should return correct city by ID field', () =>
    {
        expect(citiesById(1630)).toEqual([BELO_HORIZONTE]);
    });
});

describe('stateBy', () =>
{
    it('should return correct state', () =>
    {
        expect(stateBy('Nome', 'Minas Gerais')).toEqual(MINAS_GERAIS);
        expect(stateBy('Sigla', 'MG')).toEqual(MINAS_GERAIS);
    });
});

describe('stateById', () =>
{
    it('should return correct state by ID field', () =>
    {
        expect(stateById(11)).toEqual(MINAS_GERAIS);
    });
});
