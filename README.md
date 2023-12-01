# 2.4 - Let's Write An API <!-- omit from toc -->

For this assignment I chose to use [Lorcana API](https://lorcana-api.com), an open-source API for getting **_Disney Lorcana_** trading card information, as an external API to write my own API.

While its documentation is none existent due to recent set release, the Discord community is welcoming and most helpful.

- GitHub: [Dogloverblue/Lorcana-API](https://github.com/Dogloverblue/Lorcana-API)
- Discord: [https://discord.gg/NbVyvRuf9r](https://discord.gg/NbVyvRuf9r)

---

<div align=center>

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/axios-%23483699.svg?style=for-the-badge&logo=axios&logoColor=%23483699.svg)

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Dotenv](https://img.shields.io/badge/dotenv-%23000.svg?style=for-the-badge&logo=dotenv&logoColor=ECD53E)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

---

![NPM](https://img.shields.io/badge/WARNING:_JEST_TESTING_HAS_NOT_BEEN_IMPLEMENTED_YET-eed202?style=for-the-badge)

Coming Soon

</div>

## Table of Contents <!-- omit from toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Enviroment Variables](#enviroment-variables)
- [Running the Application](#running-the-application)

## Installation

1. Clone the repository:
   ```bash
     git clone https://github.com/DavidErvin-FS-1/DavidErvin_2.4-API.git
   ```
2. Install dependencies:
   ```bash
     npm install
   ```

## Usage

This application is used to get all cards made by [Ravensburger](https://www.ravensburger.us/start/index.html) for the Disney Lorcana trading card game. It can also get cards filtered by set id.

### API Endpoints

- `GET /`: **Root endpint**, returns a JSON response indicating that the service is running.
- `GET /api`: **API Status**, returns a JSON response indicating that the API is up.
- `GET /api/cards`: Retrieve all Lorcana cards and information.
- `GET /api/cards/:set_id`: Retrieve all Lorcana cards in a specific set.
  - **_`:set_id`_** can be set as **`TFC`** for _The First Chapter_ or **`RFB`** for _Rise of the Floodborn_
    - eg. /api/cards/TFC

## Enviroment Variables

Ensure you have a `.env` file in the root directory with the following variables:

- `PORT`: Port on which the server will run.

## Running the Application

Run the following command to start the server:

```bash
npm run dev
```

the server will be accessible at: `http://localhost:{PORT}`
