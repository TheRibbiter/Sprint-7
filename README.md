# Urban Grocers QA Engineering Project

## Overview
This project is designed to test the API endpoints of Urban Grocers using a suite of automated tests. The tests cover basic CRUD operations (GET, POST, PUT, DELETE) to ensure that the API functions correctly and returns the expected data. 

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- A GitHub account linked to TripleTen.

## Installation
Follow these steps to set up the project on your local machine:

1. **Link Your GitHub Account**
    - Click the “Link GitHub account” button on the TripleTen platform.
    - Follow the prompts to authorize and link your GitHub account.

2. **Clone the Repository**
    - Open your preferred terminal emulator (Git Bash on Windows).
    - Navigate to the directory where you want to store your projects.
    - Clone the repository using the following command:
      ```bash
      git clone https://github.com/your-username/hm07-qa-us.git
      ```
    - Navigate into the project directory:
      ```bash
      cd hm07-qa-us
      ```

3. **Install Dependencies**
    - Run the following command to install the project dependencies:
      ```bash
      npm install
      ```

## Configuration
1. **Set the Test URL**
    - Open `config.js` in your project directory.
    - Replace the placeholder API URL with the unique link generated after launching the Urban Grocers server.
    - Save the changes.

## Running the Test Suite
To run the test suite, follow these steps:

1. **Start the Server**
    - On the TripleTen platform, click the “start server” button to get your server URL.
    - Ensure the server is running and accessible.

2. **Run the Tests**
    - In your terminal, run the following command to execute the test suite:
      ```bash
      npm test
      ```
    - The tests will run, and the results will be displayed in the terminal.

## Test Details
The test suite includes the following tasks:

### Task 1: Tests for GET Requests
- **Objective:** Verify the functionality of a GET endpoint from the Urban Grocers API.
- **Tests:**
  - Check the response status code.
  - Parse the response and check that the response body contains the expected data.

### Task 2: Tests for POST Requests
- **Objective:** Verify the functionality of a POST endpoint from the Urban Grocers API.
- **Tests:**
  - Check the response status code.
  - Parse the response and check that the response body contains the expected data.

### Task 3: Tests for PUT Requests
- **Objective:** Verify the functionality of a PUT endpoint from the Urban Grocers API.
- **Tests:**
  - Check the response status code.
  - Parse the response and check that the response body contains the expected data.

### Task 4: Tests for DELETE Requests
- **Objective:** Verify the functionality of a DELETE endpoint from the Urban Grocers API.
- **Tests:**
  - Check the response status code.
  - Parse the response and check that the response body contains the expected data.

## Contributing
If you wish to contribute to this project, please follow the standard GitHub fork and pull request workflow.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Thanks to the Urban Grocers team for providing the API documentation and support throughout the development of this project.
