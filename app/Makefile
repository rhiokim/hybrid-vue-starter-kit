NAME="haroo"

init:

build:
	npm run build

docker:
	docker build --tag $(NAME) --build-arg env=.env.production .

start:
	docker run -dit -p 9000:80 --name $(NAME) $(NAME):latest

stop:
	docker rm -f $(NAME)

clean:
	docker rmi $(NAME)

.PHONY: init