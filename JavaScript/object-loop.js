var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
};

// student.name
// key = the iterator variable and requires bracket syntax to work
for (var key in student) {
    console.log(key + " => " + student[key]);
}