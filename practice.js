schools = [
	{
		name: "Florida State University",
		abbv: "FSU",
		population: 40000,
		state: "Florida",
		city: "Tallahassee"
	},
	{
		name: "New York University",
		abbv: "NYU",
		population: 50000,
		state: "New York",
		city: "New York City"
	},
	{
		name: "University of Central Florida",
		abbv: "UCF",
		population: 30000,
		state: "Florida",
		city: "Orlando"
	},
	{
		name: "School of Hard Knocks",
		abbv: "SHK",
		population: 1000000,
		state: "Pain",
		city: "Orlando"
	},
	{
		name: "School of Hard Knocks",
		abbv: "SHK",
		population: 1000000,
		state: "Pain",
		city: "Orlando"
	},
	{
		name: "Flatiron School",
		abbv: "FS",
		population: 50,
		state: "CO",
		city: "Denver"
	},
	{
		name: "School of Rock",
		abbv: "SOR",
		population: 35,
		state: "Michigan",
		city: "Detroit"
	},
]
// # 1 -> list all of the schools in Florida
  const floridaSchools = schools.filter(school => school.state == "Florida")
  // console.log(floridaSchools)
  

// # 2 -> get the average population of all schools
const populationAvg = schools.reduce((acc, currentValue) => acc + currentValue.population, 0) / schools.length
// console.log(populationAvg)

// # 3 -> find the school located in new york city
const newYorkSchool = schools.find(school => school.city == "New York City")
// console.log(newYorkSchool)

// # 4 -> order all schools by population
// => a.population > b.population
function sortByPopulation(schools) {
  return schools.sort((a, b) => a.population - b.population)
}
// console.log(sortByPopulation(schools))


// # 5 -> find the school with the abbreviation of "FS"

function findFsSchool(schools) {
  return schools.find(school => 
    school.abbv == "FS"
  )
}
console.log(findFsSchool(schools))