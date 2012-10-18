# Represent

[![Build Status](https://secure.travis-ci.org/sprice/represent.png)](http://travis-ci.org/sprice/represent)

A simple wrapper for the district and politician data from [Represent](http://represent.opennorth.ca/).

## Usage

```
npm install represent
```

### Boundary Sets

Example response: http://represent.opennorth.ca/boundary-sets/federal-electoral-districts/?format=apibrowser

```javascript
represent.boundarySets("federal-electoral-districts", function(error, data) {});
```

### Boundaries

Example response: http://represent.opennorth.ca/boundaries/toronto-wards/?format=apibrowser

```javascript
represent.boundaries("toronto-wards", function(error, data) {});
```

#### From latitude and longitude

Example response: http://represent.opennorth.ca/boundaries/?contains=45.524,-73.596&format=apibrowser

```javascript
represent.boundariesLatLon(45.524, -73.596, function(error, data) {});
```

### Postal Codes

Example response: http://represent.opennorth.ca/postcodes/L5G4L3/?format=apibrowser

```javascript
represent.postalCode("L5G4L3", function(error, data) {});
```

### Representatives from latitude and longitude

Example response: http://represent.opennorth.ca/representatives/?point=45.524,-73.596&format=apibrowser

```javascript
represent.representativesLatLon(45.524, -73.596, function(error, data) {});
```

## Todos

* add caching

## License

MIT licensed. See LICENSE file.
