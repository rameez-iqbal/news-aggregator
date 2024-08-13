In the project directory, you can simply run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Run Project using Docker:
 
First need to build the docker image

### `docker build .`

then check the docker images using:

### `docker images`

need to copy the docker imageId to run container

run the following commond to run the app

## `docker run -p 3000:3000 07f388d279bc`
