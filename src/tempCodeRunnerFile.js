function loadAndSortTowns() {
    return fetch("https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json")
        .then(() => console.log(towns))
        .catch(err => console.log(err));
}
loadAndSortTowns();