const car = (name, model, owner, year, phone, image, id) => ({ name, model, owner, year, phone, image, id });
const log = (text, type, date = new Date()) => ({ text, type, date });

const cars = [
	car('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'images/focus.jpg', 0),
	car('Ford', 'Mondeo', 'Dan', 2018, '+7 929 143 65 67', 'images/mondeo.jpg', 1),
	car('Porshe', 'Panamera', 'Nik', 2020, '+7 916 143 65 67', 'images/panamera.jpg', 2)
];

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		logs: [],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false
	},
	methods: {
		selectCar(index) {
			this.car = cars[index];
			this.selectedCarIndex = index
		},
		newOrder() {
			this.modalVisibility = false;
			this.logs.push(log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok'));
		},
		cancelOrder() {
			this.modalVisibility = false;
			this.logs.push(log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cnl'));
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredCars() {
			return this.cars.filter(car => {
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value) {
			return value.toLocaleString()
		}
	}
});