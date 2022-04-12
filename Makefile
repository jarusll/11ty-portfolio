build:
	docker build -t portfolio .

run:
	docker run -p 8080:8080 -v $(PWD):/app -v :/app/node_modules portfolio

stop:
	docker kill $$(docker ps -q)
