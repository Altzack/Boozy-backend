## Boozy API

### A platform to connect through drink recipes

Browse, create and share custom mixed drink recipes

<p float="left">
<img width="200" alt="BoozySS" src="https://user-images.githubusercontent.com/47507987/98051890-a9e6e900-1de9-11eb-88a4-d092b84d57e2.png">
<img width="200" alt="Screen Shot 2020-11-03 at 3 37 55 PM" src="https://user-images.githubusercontent.com/47507987/98052275-9daf5b80-1dea-11eb-8a36-4845422b1dbb.png">
<img width="200" alt="BoozySS" src="https://user-images.githubusercontent.com/47507987/98052146-4315ff80-1dea-11eb-93d4-0f357bda59a6.png">
</p>

- Live link: https://boozy.vercel.app/

- Tech stack: (PERN) PostgreSQL, Express, React, Node

## Schema

### Drink

````json
{
alcohol: "foo"
instructions: "foo"
juices: "foo"
liqueurs: "foo"
mixers: "foo"
modified: "11/06/2020"
other: "foo"
title: "foo"
}```

### Endpoints

<ul>
<li>GET/drinks get all drinks</li>
<li>POST/drinks post a drink</li>
<li>GET/drinks/id to get a specific drink by id</li>
<li>PATCH/drinks/id edit a drink</li>
<li>DELETE/drinks/id delete a drink</li>
</ul>
````
