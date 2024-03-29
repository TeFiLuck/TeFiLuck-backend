build:
	docker build -f ${file} -t ${tag} .
clean:
	docker rmi -f ${tag}
run:
	docker run -d -p ${port}:${port} --name ${name} ${tag}
