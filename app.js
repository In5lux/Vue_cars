const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image });

const cars = [
	car('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'images/focus.jpg'),
	car('Ford', 'Mondeo', 'Dan', 2018, '+7 929 143 65 67', 'images/mondeo.jpg'),
	car('Porshe', 'Panamera', 'Nik', 2020, '+7 916 143 65 67', 'images/panamera.jpg')
];

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false
	},
	methods: {
		selectCar: function (index) {
			this.car = cars[index];
			this.selectedCarIndex = index
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
	}
});