default: start

.PHONY: start
start: 
	docker-compose run nodebootstrap-cli-example node application.js ${ARGS}

.PHONY: stop
stop: 
	docker-compose down

.PHONY: logs
logs: 
	docker-compose logs -f nodebootstrap-cli-example

.PHONY: build
build:
	docker-compose build --no-cache

.PHONY: install-dependencies
install-dependencies:
	docker-compose run nodebootstrap-cli-example npm install

.PHONY: install-package
install-package:
	docker-compose run nodebootstrap-cli-example npm install -S ${package}

.PHONY: install-dev-package
install-dev-package:
	docker-compose run nodebootstrap-cli-example npm install -D ${package}

.PHONY: test
test:
	docker-compose run nodebootstrap-cli-example npm run test