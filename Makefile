build:
	docker build -t portfolio . --no-cache

run:
	docker run -p 8080:8080 portfolio

stop:
	docker kill $$(docker ps -q)


