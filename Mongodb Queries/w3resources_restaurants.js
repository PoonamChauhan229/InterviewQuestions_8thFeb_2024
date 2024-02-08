//1. Write a MongoDB query to display all the documents in the collection restaurants.
db.restuarants.find()

//Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
db.restuarants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1})

//3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
db.restuarants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})

//5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
db.restuarants.find({"borough":"Bronx"})

//6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.restuarants.find({"borough":"Bronx"}).limit(5)

//7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
db.restuarants.find({"borough":"Bronx"}).skip(5).limit(5)

//8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
db.restuarants.find({grades:{$elemMatch:{score:{$gt:90}}}})

//9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
db.restuarants.find({grades:{$elemMatch:{score:{$gt:80,$lt:100}}}})

//10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
db.restuarants.find({'address.coord':{$lt:-95.754168}})

//11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
db.restuarants.find({$and:[
        {'cuisine':{$ne:"cuisine"}},
        {'grades.score':{$gt:70}},
        {'address.coord':{$lt:-65.754168}}
    ]
})

//12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
//Note : Do this query without using $and operator.
db.restuarants.find({
    $and:[
    {'cuisine':{$ne:"American"}},
    {'grades.score':{$gt:70}},
    {'address.coord':{$lt:-65.754168}}
    ]
})
//or
db.restuarants.find({
    'cuisine':{$ne:"American"},
    'grades.score':{$gt:70},
    'address.coord':{$lt:-65.754168}
})

//13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
db.restuarants.find({
    "cuisine":{$ne:"American"},
    "grades.grade":{$eq:"A"},
    "borough":{$ne:"Brooklyn"}
})


