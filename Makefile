init:
	mkdir -p .couchdb/data
	mkdir -p .couchdb/log
	mkdir -p .couchdb/etc
	# for cluster
	# mkdir -p .couchdb-slave/data
	# mkdir -p .couchdb-slave/log
	# mkdir -p .couchdb-slave/etc
	@brew update

up:
	@echo "🚀 boot...."
	@docker-compose -f stack.yml up

down:
	@echo "🚫 stop..."
	@docker-compose -f stack.yml stop
	@docker-compose -f stack.yml rm

restart: stop boot
	@echo "🚫 ... 🚀"

build:
	@echo "🤖 Building SPA"
	cd spa; npm run build; npm run docker:build
	@echo "🤖 Building WEB"
	cd web;	npm run build; npm run docker:build
	@echo "🤖 Building APP"
	cd app; npm run build

clean:
	@echo "none"

build-spa:
	cd spa; npm run build

.PHONY: init