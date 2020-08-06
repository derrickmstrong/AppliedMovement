import { Query } from '../'


const all = () =>
	Query(`
    SELECT
        chirps.*,
        users.name
    FROM chirps
    JOIN users ON users.id = chirps.userid
    ORDER BY chirps.id DESC
`);

const one = (id) =>
	Query(
		`
    SELECT
        chirps.*,
        users.name
    FROM chirps
    JOIN users ON users.id = chirps.userid
    WHERE chirps.id = ?
`,
		[id]
	);

const insert = (userid, content) =>
	Query(`INSERT INTO chirps (userid, content) VALUE (?)`, [[userid, content]]);

const update = (id, content) => Query(`UPDATE chirps SET content = ? WHERE id = ?`, [content, id]);

const destroy = (id) => Query(`DELETE FROM patientinfo WHERE id = ?`, [id]);

export default {
	all,
	one,
	insert,
	update,
	destroy
};