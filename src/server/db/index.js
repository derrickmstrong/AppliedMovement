import * as mysql from 'mysql';
import queries from './queries/queries';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'appliedmovement',
  password: '1234567',
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

export default {
	queries
};