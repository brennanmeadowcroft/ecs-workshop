ecr-login:
	$(aws ecr get-login --no-include-email --region us-west-2)

publish:
	echo "Building image"
	docker build -t public-api .
	
	echo "Publishing image"
	docker tag public-api:latest 249584073387.dkr.ecr.us-west-2.amazonaws.com/public-api:latest
	docker push 249584073387.dkr.ecr.us-west-2.amazonaws.com/public-api:latest

push:
	make ecr-login && make publish