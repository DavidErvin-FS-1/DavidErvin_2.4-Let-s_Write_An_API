# 2.4 - Let's Write An API <!-- omit from toc -->

I decided to use [Lorcana API](https://lorcana-api.com), which is an API for fetching Disney Lorcana trading card information.

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
