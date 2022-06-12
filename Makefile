DB_NAME:=psql-db
SCRAPING_NAME:=python-scraping
RM := rm -rf
DATA_DIR:=./db/data

all:start

start:
	@echo ""
	@echo "------------------------"
	@echo "Start the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose up -d
	@echo ""
	@echo "The docker-compose environment has been successfully built."
	@echo ""
	@docker-compose ps
	@echo ""

build:
	@echo ""
	@echo "------------------------"
	@echo "Build the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose build
	@echo ""
	@echo "The docker-compose environment has been successfully built."
	@echo ""

stop:
	@echo ""
	@echo "------------------------"
	@echo "delete the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose rm
	@echo ""
	@echo "The docker-compose environment has been successfully delete."
	@echo ""


down:
	@echo ""
	@echo "------------------------"
	@echo "Close the docker-compose environment"
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose down --rmi all --volumes --remove-orphans
	@echo ""
	@echo "The docker-compose environment has been successfully close."
	@echo ""

# dbやcacheは保持したまま再起動
restart: down start

attach-db:
	docker exec -it $(DB_NAME) /bin/bash

del-cache:
	@echo ""
	@echo "------------------------"
	@echo "clean cache ..."
	@echo ""
	find . -name "__pycache__" -type d | xargs $(RM)
	@echo ""
	@echo "clean cache success"
	@echo "------------------------"
	@echo ""

del-db:
	@echo ""
	@echo "------------------------"
	@echo "delete db ..."
	@echo ""
	$(RM) $(DATA_DIR)
	@echo ""
	@echo "delete db success"
	@echo "------------------------"
	@echo ""

clean:del-cache

fclean:clean del-db

# dbやcacheも削除してから再起動
re:fclean restart

# lint
lint:
	gofmt -l -w ./server

doer:
	@echo ""
	@echo "do'er saiko---!!!!"
	@echo ""

.PHONY: all start build restart down attach-db del-db del-cache clean fclean re lint doer