import cloneDeep from 'lodash/cloneDeep';

const car = {
    brand: 'Mercedes-Benz',
    equipment: '4.0 AT 63 S 4MATIC',
    release_year: 2023,
    mileage_km: 34,
    transmission_type: 'АКПП',
    wheel: 'Левый',
    power: 639,
    max_speed_kmh: 315,
    clearance: 122,
    country: 'Германия',
    door_number: 5,
    price: 22700000,
    currency: 'rub',
    isSold: False,
    sale: 0,
}

const copy_car = _.cloneDeep(car);