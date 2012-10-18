# Represent

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

(The MIT License)

Copyright (c) 2012 Shawn Price &lt;shawnp@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
