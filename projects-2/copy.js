import cloneDeep from 'lodash/cloneDeep.js';

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
    isSold: false,
    sale: 15,
    seller: { // вложенный список
        name: 'БалтАвтоТрейд Премиум',
        role: 'compony',
        constants: '+7 (499) 648-96-56'
    },
    owners: [ // массив
        {
            name: 'Егор',
            owned_years: 1,
            isOwnerNow: false
        },
        {
            name: 'Наталья',
            owned_years: 2,
            isOwnerNow: true
        }
    ],
    sell() {
        this.isSold = true
    },
    final_price() {
        return this.price - (this.price * this.sale / 100)
    }
}

car.self = car // циплическая ссылка для проверки корректного копирования

const carPrototype = {
    get_owners() {
        const names = this.owners.map(
            function (owner) {
                return owner.name;
            }
        )
        return `Владельцы: ${names.join(', ')}`
    }
}

Object.setPrototypeOf(car, carPrototype)

console.log(car.get_owners())

// const copy_car = cloneDeep(car);
// console.log(copy_car)
const copy_car2 = cloneDeep(car);
console.log(copy_car2)