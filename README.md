<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">FASTISERV</h1>
</p>
<p align="center">
    <em><code>A fastify web server with some basic use case functionalitys</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Dantescur/fastiserv" alt="license">
	<img src="https://img.shields.io/github/last-commit/Dantescur/fastiserv?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Dantescur/fastiserv?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Dantescur/fastiserv?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Sequelize-52B0E7.svg?style=flat&logo=Sequelize&logoColor=white" alt="Sequelize">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/Fastify-000000.svg?style=flat&logo=Fastify&logoColor=white" alt="Fastify">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [Running fastiserv](#-running-fastiserv)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

## Overview

<code>FASTISERV is a modern, fast, and scalable web service framework built on top of Fastify. It leverages TypeScript for type safety, Sequelize for ORM, and Docker for easy deployment and scalability. Designed with simplicity and performance in mind, FASTISERV aims to provide a solid foundation for building efficient web applications and services.</code>

---

## Features

- Fastify Framework: Utilizes Fastify for its high performance and low overhead, making your web services fast and efficient.
- TypeScript Support: Full TypeScript support for type safety and better development experience.
- Sequelize ORM: Integrated Sequelize ORM for easy database management and operations.
- Docker Ready: Comes with a Dockerfile for easy containerization and deployment.
- Modular Structure: Organized in a modular structure for better maintainability and scalability.
- JWT Authentication: Built-in JWT authentication for secure access to resources.
- Environment Configuration: Uses dotenv for easy environment configuration management.

---

## Repository Structure

```sh
└── fastiserv/
    ├── Dockerfile
    ├── config
    │   └── config.ts
    ├── database_development.sqlite
    ├── package.json
    ├── pnpm-lock.yaml
    ├── src
    │   ├── app.ts
    │   └── modules
    │       └── user
    │           ├── user.controller.ts
    │           ├── user.route.ts
    │           └── user.schema.ts
    ├── tsconfig.json
    └── utils
        └── types.ts
```

---

## Modules

<details closed><summary>.</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [pnpm-lock.yaml](https://github.com/Dantescur/fastiserv/blob/master/pnpm-lock.yaml) | <code> The pnpm-lock.yaml file ensures that the project's dependencies are consistent across installations. It locks the versions of the packages installed, making sure that every install results in the exact same file structure in node_modules across all environments. This file is generated and updated by pnpm when dependencies are installed or updated.</code>                                    |
| [Dockerfile](https://github.com/Dantescur/fastiserv/blob/master/Dockerfile)         | <code> The Dockerfile specifies the steps to create a Docker container for the project. It uses node:20 as the base image, sets up the working directory at /app, copies the project files, and installs the dependencies using pnpm. It then builds the project and sets the container to expose port 3000, with the command to run the built application.</code>                                             |
| [package.json](https://github.com/Dantescur/fastiserv/blob/master/package.json)     | <code> The package.json file serves as the heart of the project's configuration, including metadata like the project's name (fastserv), version (1.0.0), and scripts for development, building, and starting the application. It lists both production and development dependencies necessary for the project, such as Fastify, Sequelize, TypeScript, and various utilities and types for development.</code> |
| [tsconfig.json](https://github.com/Dantescur/fastiserv/blob/master/tsconfig.json)   | <code>The tsconfig.json file configures TypeScript for the project, specifying compiler options such as the ECMAScript target version (es2016), module system (NodeNext), and the output directory for compiled files (dist). It enables strict type-checking options, interop between ES modules and CommonJS, and more, ensuring that the TypeScript compiler understands how to process the project's code. |
| </code>                                                                             |

</details>

<details closed><summary>src</summary>

| File                                                                    | Summary                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [app.ts](https://github.com/Dantescur/fastiserv/blob/master/src/app.ts) | <code> The app.ts file is the main entry point for the FASTISERV application. It sets up and configures the Fastify server, including essential plugins and middleware for security and functionality. Key features include: |

- Environment Configuration: Utilizes dotenv for loading environment variables, including the server's secret key and port number.
- Fastify Setup: Initializes a Fastify instance with pretty logging enabled for better readability during development.
- JWT Authentication: Registers the @fastify/jwt plugin for handling JWT-based authentication, including a custom decorator for verifying tokens and a pre-handler hook for setting the JWT instance on requests.
- Cookie Support: Integrates @fastify/cookie for handling cookies, particularly for storing access tokens.
- Schema Registration: Dynamically adds user-related JSON schemas for validation.
- Routes: Sets up a health check endpoint and registers user-related routes with a specific prefix (api/users).
- Graceful Shutdown: Listens for termination signals to gracefully shut down the server and close the database connection.
  This file orchestrates the application's core functionality, ensuring that all components work together seamlessly to provide a secure and efficient web service.</code> |

</details>

<details closed><summary>src.modules.user</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [user.route.ts](https://github.com/Dantescur/fastiserv/blob/master/src/modules/user/user.route.ts)           | <code>The user.route.ts file defines the HTTP routes for user-related operations within the Fastiserv application. It utilizes the Fastify framework to register routes for creating a user, logging in, getting user details, and logging out. Each route is associated with a specific controller function from user.controller.ts and includes schema validation for requests and responses using schemas defined in user.schema.ts. Authentication is enforced on routes that require a user to be logged in.</code>                                                      |
| [user.schema.ts](https://github.com/Dantescur/fastiserv/blob/master/src/modules/user/user.schema.ts)         | <code>The user.schema.ts file defines the input validation schemas for user-related operations using Zod, a TypeScript-first schema declaration and validation library. It includes schemas for creating a user (createUserSchema), user login (loginSchema), and their respective response schemas. These schemas ensure that the data received and sent by the API endpoints are correctly structured and typed, providing a robust validation mechanism for the application's user module.</code>                                                                          |
| [user.controller.ts](https://github.com/Dantescur/fastiserv/blob/master/src/modules/user/user.controller.ts) | <code>The user.controller.ts file contains the controller logic for handling user-related operations. It defines asynchronous functions to create a user, log in, retrieve user details, and log out. These functions interact with the application's database using Sequelize to perform CRUD operations. The login function also handles JWT token creation and sets a cookie for session management. Error handling and response formatting are integral parts of these functions, ensuring that appropriate feedback is provided to the client for each operation.</code> |

</details>

<details closed><summary>utils</summary>

| File                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [types.ts](https://github.com/Dantescur/fastiserv/blob/master/utils/types.ts) | <code>The types.ts file contains custom type definitions and interfaces used throughout the Fastiserv application. These types include extensions of existing Fastify or JWT library types to integrate more seamlessly with the application's specific needs. It extend Fastify's request and reply objects with custom properties or methods, or define types for user payloads in JWT tokens. This file helps maintain type safety and consistency across the application, making it easier to develop and refactor.</code> |

</details>

<details closed><summary>config</summary>

| File                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [config.ts](https://github.com/Dantescur/fastiserv/blob/master/config/config.ts) | <code>The config.ts file is responsible for configuring and initializing key components of the Fastiserv application, such as the Sequelize ORM. It defines the database connection settings and initializes Sequelize with these settings. Additionally, it defines the User model, specifying its attributes and options according to the application's data structure requirements. This file acts as a central point for database-related configuration, making it easier to manage and update the application's data layer.</code> |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version 4.5`

### Installation

1. Clone the fastiserv repository:

```sh
git clone https://github.com/Dantescur/fastiserv
```

2. Change to the project directory:

```sh
cd fastiserv
```

3. Install the dependencies:

```sh
npm install
```

### Running `fastiserv`

Use the following command to run fastiserv:

```sh
npm run build && node dist/src/app.js
```

### Tests

Use the following command to run tests:

```sh
npm test
```

---

## Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Dantescur/fastiserv/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Dantescur/fastiserv/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Dantescur/fastiserv/issues)**: Submit bugs found or log feature requests for the `fastiserv` project.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Dantescur/fastiserv
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## License

This project is protected under the [MIT LICENSE](./LICENSE) License.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
