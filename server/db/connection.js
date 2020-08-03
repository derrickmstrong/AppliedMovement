const mysql = require('mysql2');


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'applied_movement'
});

const orm = {
    // get(users, {name:'sam',email:'sam@email.com'})
    // SELECT * FROM users WHERE name = ? and email` = ?
    get(table, condition, callback){
        let data = this.generateSetData(condition, ' AND ')
        connection.execute(`SELECT * FROM \`${table}\` WHERE ${data.sql}`, data.data, callback)
    },
    insert(table, columnValues, callback){
        let data = this.generateSetData(columnValues, ', ')
        
        connection.execute(`INSERT INTO \`${table}\` SET ${data.sql}`, data.data, callback)
    },
    generateSetData(condition, devider){
        let setString = '';
        let valueArray = [];
        Object.keys(condition).forEach((key,i) => {
            setString += (i>0 ? devider : "") + "`"+key+"` = ?";
            valueArray.push(condition[key]); 
        });
        return {
            sql: setString,
            data: valueArray
        }
    }
}
// SELECT * FROM x WHERE column1 = "sam" AND solumn2 = "free"
// UPDATE x SET column1 = "sam" , solumn2 = "free" WHERE column3 = "some"
module.exports = {orm, connection}