OUT_DIR := dist

.PHONY: clean
clean:
	rm -rf $(OUT_DIR)

.PHONY: run
run: 
	node dist/src/index.js
