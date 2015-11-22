main:
	git add -A
	git commit -m ":cd: Update at $(shell date)"
	git push origin gh-pages

server:
	python -m SimpleHTTPServer

.PHONY: main server 
