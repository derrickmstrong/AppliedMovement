import { Query } from '../';

const all = () =>
  Query(`
    SELECT * FROM patientportal.patientinfo;
`);

const one = (id) =>
  Query(
    `
    SELECT *
        FROM patientportal.patientinfo
        WHERE id = ?`,
    [id]
  );

const insert = (userid, content) =>
  Query(`INSERT INTO chirps (userid, content) VALUE (?)`, [[userid, content]]);

const update = (id, content) =>
  Query(`UPDATE chirps SET content = ? WHERE id = ?`, [content, id]);

const destroy = (id) => Query(`DELETE FROM patientinfo WHERE id = ?`, [id]);

export default {
  all,
  one,
  insert,
  update,
  destroy,
};
