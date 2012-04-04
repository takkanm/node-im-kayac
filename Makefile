build:
	coffee -c -o lib src/*.coffee

clean:
	rm ./lib/*.js
