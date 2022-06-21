let nodeGeocoder = require('node-geocoder');
let locationsFile = require('../../locations.json')
var axios = require('axios');
var fs = require('fs');
const { URL } = require('url');

let openstreetmapRateLimit = 1


let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);


async function getGeocode(data) {
    return await geoCoder.geocode(data);
}



async function getPolygonsCoordinates(search_query) {
    if (typeof (search_query) == "string") {


        let rawdata = fs.readFileSync('locations.json');
        locationsFile = JSON.parse(rawdata);
        let result = locationsFile[search_query]

        if (result) {
            return result;
        }

             // let some = await searchOpenstreetmap({county:"Kent",country:"United Kingdom"})
        let results = await searchOpenstreetmapSimple(search_query);
        // let some = await searchOpenstreetmap({county:"Kent",country:"United Kingdom"})
        try {
            let polygonCoordinate = await osmIdToPolygonCoordinates(results[0].osm_id)


            polygonCoordinate = {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: polygonCoordinate.geometries[0].coordinates[0]
                },
                other: results[0],

            }
            locationsFile[search_query] = polygonCoordinate

            let data = JSON.stringify(locationsFile);
            fs.writeFileSync('locations.json', data);

            return polygonCoordinate
        } catch (error) {
            return {}
        }
    }
    if (typeof (search_query) == "object") {
        let { street, county, state, country, postalcode } = search_query
        let rawdata = fs.readFileSync('locations.json');
        locationsFile = JSON.parse(rawdata);
        let result = locationsFile[`${country}+${county}+${state}+${postalcode}+${street}`]
        if (result) {
            return result;
        }
        let results = await searchOpenstreetmap(search_query)
        try {
            let polygonCoordinate = await osmIdToPolygonCoordinates(results[0].osm_id)
            polygonCoordinate = {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: polygonCoordinate.geometries[0].coordinates[0]
                },
                other: results[0],

            }
            locationsFile[`${country}+${county}+${postalcode}+${state}+${street}`] = polygonCoordinate

            let data = JSON.stringify(locationsFile);
            fs.writeFileSync('locations.json', data);

            return polygonCoordinate
        } catch (error) {
            return {}
        }

    }


}


async function searchOpenstreetmap(options) {
    let url = new URL('https://nominatim.openstreetmap.org/search.php')
    options.hasOwnProperty("street") ? url.searchParams.append("street", options.street) : ""
    options.hasOwnProperty("county") ? url.searchParams.append("county", options.county) : ""
    options.hasOwnProperty("state") ? url.searchParams.append("state", options.state) : ""
    options.hasOwnProperty("country") ? url.searchParams.append("country", options.country) : ""
    options.hasOwnProperty("postalcode") ? url.searchParams.append("postalcode", options.postalcode) : ""
    options.hasOwnProperty("format") ? url.searchParams.append("format", options.format) : url.searchParams.append("format", "jsonv2")


    var config = {
        method: 'get',
        url: url.toString(),
        headers: {}
    };
    await sleep(1000);
    try {
        let result = await axios(config)
        if (result.status = 200) {
            return result.data
        } else {
            return []
        }
    } catch (error) {
        console.log(error.config.url)
        return []
    }

}


async function searchOpenstreetmapSimple(search_query) {
    search_query = search_query.trim()
    var config = {
        method: 'get',
        url: `https://nominatim.openstreetmap.org/search.php?q=${search_query}&format=json`,
        headers: {}
    };

    await sleep(1000);
    try {
        let result = await axios(config)
        if (result.status = 200) {
            return result.data
        } else {
            return []
        }
    } catch (error) {
        console.log(error.config.url)
        return []
    }

}


async function osmIdToPolygonCoordinates(osm_id) {
    let some = await buildGeometery(osm_id)
    var config = {
        method: 'get',
        url: `http://polygons.openstreetmap.fr/get_geojson.py?id=${osm_id}&params=0`,
        headers: {}
    };

    try {
        let result = await axios(config)
        if (result.status = 200) {
            return result.data
        } else {
            return {}
        }
    } catch (error) {
        console.log(error.config.url)
        return {}
    }
}

async function buildGeometery(osm_id) {
    var config = {
        method: 'get',
        url: `https://polygons.openstreetmap.fr/index.py?id=${osm_id}`,
        headers: {}
    };

    try {
        let result = await axios(config)
        if (result.status = 200) {
            return result.data
        } else {
            return {}
        }
    } catch (error) {
        console.log(error.config.url)
        return {}
    }
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {
    getGeocode,
    getPolygonsCoordinates,
}