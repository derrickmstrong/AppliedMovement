import * as mysql from 'mysql';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "patientportal",
	password: "4894608Ejd!",
	connectionLimit: 10
});

export const Query = (query, values) => {
	const sql = mysql.format(query, values);

	return new Promise((resolve, reject) => {
		pool.query(sql, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

import queries from './queries/queries';
//import users from './queries/users';
export default {
	queries,
	//users
};