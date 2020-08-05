import * as mysql from 'mysql2';
import config from '../src/server/config';

const pool = mysql.createPool(config.mysql);

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