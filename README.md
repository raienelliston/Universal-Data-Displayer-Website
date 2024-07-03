# Universal-Data-Displayer-Website
Website that will quarry any backend server and display the data, changing the layout to accommodate it.

# Current Features
- Can fetch from any backend server
- Can display the data in a table
- Can display the data in a bar graph

# How to run
- Clone the repository
- Put variables into .env
- Run `npm install`
- Run `npm start`

If you are testing this, simply uncomment testing() in app.js to set data to the test value in testing.js.

# Documentation

## Tables

### Datastructure

```js
{
  "key": "id/key of the data", // Required
  "type": "table", // Required
  "columnLabels": ["header1", "header2", "header3"], // Optional
  "rowLabels": ["row1", "row2", "row3"], // Optional
  "config": { // All are required. Top right label needs to be set at false as it's not currently implemented
    "topRightLabel: false 
    },
  "data": [ // Required
    ["data1", "data2", "data3"], // Can be simple arrays like this
    ["data4", "data5", "data6"],
    ["data7", "data8", "data9"],
    [
        {
        value: "data10", // Or be an object with a value and a style that affects the cell
            style: {
                color: 'red',
                backgroundColor: 'yellow'
            }
        },
        {
        value: "data11",
            style: {
                color: 'red',
                backgroundColor: 'yellow'
            }
        },
        {
        value: "data12",
            style: {
                color: 'red',
                backgroundColor: 'yellow'
            }
        }
    ]
  ]
}
```

## Bar Graphs

### Datastructure

```js
{

}
```