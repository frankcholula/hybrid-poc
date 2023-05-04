# Mock AIPHAS application
this is a mock hospital application simulating a patient portal. 
- a frontend client written in `react-redux`.
- a backend server written in `nodejs` and `mongoose`.


## Installation & Running
build and installation commands are in the Makefile.
```bash
make all
```
This is currently using `Mongo Atlas` so make sure you have a `.env` file with the right credentials in both the `frontend` and `aiphas-app` directories.


## Directory Layout
```bash
aiphas-app
├── Makefile
├── README.md
├── backend
├── frontend
├── node_modules
├── package-lock.json
├── package.json
└── redacted
```