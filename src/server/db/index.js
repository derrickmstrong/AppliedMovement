import * as mysql from 'mysql';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'patientportal',
  connectionLimit: 10,
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
export default {
	queries
};