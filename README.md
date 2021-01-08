# React App + Django API

This project consists of two internal projects:

- *students*: the Django project containing the REST API along with all the backend code;
- *frontend*: the React project with all the Node dependencies, settings and things related to the frontend.

## Run it locally

In order to run the projects locally you need to have Node, npm and `python3` installed on your machine.

### Running the Django project

First, create a Python virtual environment to isolate the projects:

```bash
python3 -m venv vitual_env
```

Then, activate it:

```bash
source ./virual_env/bin/activate
```

`cd` into the _venv_ and clone the project from GitHub:

```bash
git clone https://github.com/PranjulAgarwal/django-react-proj.git
```

Add the Django dependencies:

```bash
pip install django djangorestframework django-cors-headers
```

Finally, `cd` into the _django-react-proj_ folder and run the project:

```bash
python manage.py runserver
```

That's it!

Access the address http://localhost:8000/api/students/ and check if the API is up.

### Running the React project

First, `cd` the _frontend_ directory and run:

```bash
npm install
npm start
```