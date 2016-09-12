var planets = [
	{
		name: "mercury",
		info: "Mercury is the closest planet to the Sun. It orbits in a highly elliptical orbit ranging from 46 million km (29 million miles) from the Sun out to 70 million km (43.5 million miles)",
		image: "img/mercury.gif"
	},
	{
		name: "venus",
		info: "Venus is the second closest planet to the Sun and orbits in an almost circular orbit at 108 million km. As it orbits, Venus comes closer to Earth than any other planet in the solar system and can come to within about 40 million km.",
		image: "img/venus.gif"
	},
	{
		name: "earth",
		info: "The third closest planet to the Sun is Earth and is the largest and densest of the inner planets. Earth orbits in a reasonably circular at 150 million km and is the first of the planets to have a moon. Earth is of course the only place that we know of that has life.",
		image: "img/earth.gif"
	},
	{
		name: "mars",
		info: "Mars is the fourth closest planet to the Sun and orbits in an fairly eccentric orbit at around 230 (+-20) million km.",
		image: "img/mars.gif"
	},
	{
		name: "jupiter",
		info: "Jupiter is the fifth closest planet to the Sun and is the first of what are called the outer planets (being outside the asteroid belt). It is by far the largest planet in the solar system having two and a half times as much mass as all the other planets put together and one thousandth the mass of the Sun. This is so large that the Sun and Jupiter actually orbit each other about a point just outside of the Suns surface.",
		image: "img/jupiter.gif"
	},
	{
		name: "saturn",
		info: "Saturn is the sixth closest planet to the Sun. It is the second largest planet in the solar system having a radius 9 times that of Earth (57,000 km) and a mass 95 times that of Earth.",
		image: "img/saturn.gif"
	},
	{
		name: "uranus",
		info: "Uranus is the seventh closest planet to the Sun and the third largest and fourth heaviest of the planets. It diameter (50,000km) is four times that of Earth with a mass over 14 times that of Earth.",
		image: "img/uranus.gif"
	},
	{
		name: "neptune",
		info: "Neptune is the eighth closest planet to the Sun and is (since the relegation of Pluto) the last Planet in the Solar System. It is similar in size and composition to Uranus with a diameter of 49,000km and a mass of over 17 times that of Earth.",
		image: "img/neptune.png"
	},
	{
		name: "pluto",
		info: "Pluto is the second largest dwarf planet after Ceres, and is about 1/6 the mass of the Moon. It has an diameter of 2370km and is made of rock and ice with a thin atmosphere of nitrogen, methane and carbon monoxide. It has a temperature of around -230 degrees C.",
		image: "img/pluto.png"
	},
	{
		name: "sun",
		info: "SUN IS NOT A PLANET LOL",
		image: "img/sun.png"
	}
]

function getInfo() {
	var name = document.getElementById("name").value.toLowerCase()

	for(i = 0; i < planets.length; i++) {
		if(name === planets[i].name) {
			document.getElementById("planetName").innerHTML = planets[i].name
			document.getElementById("icon").src = planets[i].image
			document.getElementById("planetInfo").innerHTML = planets[i].info
			return
		} else {
			document.getElementById("planetName").innerHTML = "Sorry I don't recognize that planet, please try again"
			document.getElementById("planetInfo").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}