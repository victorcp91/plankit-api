exports.createPlant = (req, res, next) => {
	//Create plant in db
	res.status(201).json({
		message: 'Plant created successfully!',
		plant: {id: new Date().toISOString(), ...req.body}
	});
};

exports.getPlants = (req, res, next) => {
	res.status(200).json({
		plants:[
			{
			"id": 1,
			"name":{
					"popular": {
							"default": "popular name",
							"pt-br": "nome popular"
					}, 
					"other":{
							"default": ["other name", "other name 2"],
							"pt-br": ["outro nome", "outro nome 2"]
					}
			},
			"order": "Rosales",
			"family": "Amaranthaceae",
			"subfamily": null,
			"tribe": null,
			"subtribe": null,
			"gender": "Amaranthoideae",
			"specie": "Iresine herbstii",
			"origin": ["BR"],
			"light": "direct", 
			"flowering": null, 
			"planting": ["whole_year"], 
			"fruits": "edible", 
			"propagation": ["seedling"], 
			"watering_frequency":{
					"times": 2,
					"frequency": "month" 
			},
			"size": "medium", 
			"care": 1,
			"characteristics":[1,2,3],
			"deseases": [1,2],
			"info": "text"
			}
		]
	});
};