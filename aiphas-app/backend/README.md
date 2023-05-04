# Sample Backend
This is a sample backend service for a doctor-patient portal in a hospital written in `Node.js` and `mongoose` for a `MongoDB` backend.

You can find the API [here](https://documenter.getpostman.com/view/157404/2s93eR4vUB). The API has the following functionalities:
- Patients
    - create a patient
    - edit a patient's name
    - get all patients
    - delete a patient
- User
    - Register a user
    - Login a user
    - Get the user data


## Local Setup & Development
create a `.env` file at the `aiphas-app/` directory with the following env vars:
```bash
# Make sure your port doesn't clash with the frontend port.
NODE_ENV = development
PORT = 3001
MONGO_URI = <YOUR_MONGO_URI>
JWT_SECRET = <YOUR_JWT_SECRET>
```

Use the `Makefile` to run any of the components.
```bash
make run.dev.frontend
make run.dev.backend
make run.dev
```

## Running the Dockerized Backend
This backend has been dockerized and you can run it 
```bash
make run.backend
```


## Directory Layout
```
backend
├── README.md
├── config
│   └── db.js
├── controllers
│   ├── patientController.js
│   └── userController.js
├── middleware
│   ├── README.md
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models
│   ├── patientModel.js
│   └── userModel.js
├── routes
│   ├── patientRoutes.js
│   └── userRoutes.js
└── server.js
```