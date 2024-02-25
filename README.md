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
	<img src="https://img.shields.io/github/license/Dantescur/fastiserv?style=flat&color=0080ff" alt="license">
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

| File                                                                                | Summary                         |
| ----------------------------------------------------------------------------------- | ------------------------------- |
| [pnpm-lock.yaml](https://github.com/Dantescur/fastiserv/blob/master/pnpm-lock.yaml) | <code>► INSERT-TEXT-HERE</code> |
| [Dockerfile](https://github.com/Dantescur/fastiserv/blob/master/Dockerfile)         | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/Dantescur/fastiserv/blob/master/package.json)     | <code>► INSERT-TEXT-HERE</code> |
| [tsconfig.json](https://github.com/Dantescur/fastiserv/blob/master/tsconfig.json)   | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src</summary>

| File                                                                    | Summary                         |
| ----------------------------------------------------------------------- | ------------------------------- |
| [app.ts](https://github.com/Dantescur/fastiserv/blob/master/src/app.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.modules.user</summary>

| File                                                                                                         | Summary                         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| [user.route.ts](https://github.com/Dantescur/fastiserv/blob/master/src/modules/user/user.route.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [user.schema.ts](https://github.com/Dantescur/fastiserv/blob/master/src/modules/user/user.schema.ts)         | <code>► INSERT-TEXT-HERE</code> |
| [user.controller.ts](https://github.com/Dantescur/fastiserv/blob/master/src/modules/user/user.controller.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>utils</summary>

| File                                                                          | Summary                         |
| ----------------------------------------------------------------------------- | ------------------------------- |
| [types.ts](https://github.com/Dantescur/fastiserv/blob/master/utils/types.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>config</summary>

| File                                                                             | Summary                         |
| -------------------------------------------------------------------------------- | ------------------------------- |
| [config.ts](https://github.com/Dantescur/fastiserv/blob/master/config/config.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

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

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
