
app-image:
	@docker build . -f docker/app-image/Dockerfile -t app-image:local

dev-up:
	$(info ************  There are no dev dependencies to start ************)