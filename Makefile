build:
	docker build -t svelte-boilerplate .

run:
	docker run -p 5173:5173 svelte-boilerplate
