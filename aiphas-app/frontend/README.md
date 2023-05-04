# Sample Frontend
This is a sample frontend simulating a patient portal in a hospital built using `react-redux`. It features
- a `login`/ `logout`/ `register` interface for doctors, equipped with authorization backed by [JWT](https://jwt.io/introduction).
- a dashboard to view patient information.


## Local Setup and Development
create a `.env` file at the `aiphas-app/frontend` directory with the following env vars:
```bash
# Make sure your port doesn't clash with the backend port.
NODE_ENV = development
PORT = 3000
MONGO_URI = <YOUR_MONGO_URI>
JWT_SECRET = <YOUR_JWT_SECRET>
```
Make sure your port doesn't clash with the backend port.

use the `Makefile` to run any of the components.
```bash
make run.dev.frontend
make run.dev.backend
make run.dev
```

## Running Dockerized Application
This frontend has been dockerized and you can run it with
```bash
make run.frontend
```

## Directory Layout
```
frontend/src
├── App.js
├── App.test.js
├── app
│   └── store.js
├── components
│   ├── Header.jsx
│   ├── PatientForm.jsx
│   ├── PatientItem.jsx
│   └── Spinner.jsx
├── features
│   ├── auth
│   └── patients
├── index.css
├── index.js
├── pages
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── reportWebVitals.js
└── setupTests.js
```