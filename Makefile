server:
	python -m SimpleHTTPServer

save:
	git add -A
	git commit -m "Update at $(shell date)"
	git push origin master

.PHONY: server save
