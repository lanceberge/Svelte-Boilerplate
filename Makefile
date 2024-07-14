build:
	docker build -t svelte-boilerplate .

run:
	docker run -p 5173:5173 svelte-boilerplate

db:
	initdb -D ~/pgsql/data
	pg_ctl -D ~/pgsql/data
	createdb test_db
	psql -d test_db -f db/init_table.sql
	psql -d test_db -f db/add_data.sql
