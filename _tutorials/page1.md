---
layout: tutorial
title: Tutorial
name: How to install
active_page: page1
---

# Hello to Tutorial!

Library for **your API** that provides:

- Automated Integration Testing
- Automated Live Documentation

Given an API specification, written in YAML/JSON format, ScanAPI hits the specified
endpoints, runs the test cases, and generates a detailed report of this execution - that can be
also used as the API documentation itself.

With almost none Python knowledge, the user can define endpoints to be hit, the expected behaviors
for each response, and, as a result, receives a full real-time diagnostic of the API!

## Contents

- [Contents](#contents)
- [Requirements](#requirements)
- [How to install](#how-to-install)
- [Basic Usage](#basic-usage)
- [Documentation](#documentation)
  - [ScanAPI CLI](#scanapi-cli)
  - [API Specification Keys](#api-specification-keys)
  - [Environment Variables](#environment-variables)
  - [Custom Variables](#custom-variables)
  - [Python Code](#python-code)
  - [Chaining Requests](#chaining-requests)
  - [API specification in multiple files](#api-specification-in-multiple-files)
  - [Configuration File](#configuration-file)
  - [Hiding sensitive information](#hiding-sensitive-information)
- [Contributing](#contributing)

## Requirements

- [pip][pip-installation]

## How to install

```bash
$ pip install scanapi
```

## Basic Usage

You will need to write the API's specification and save it as an **YAML** or **JSON** file.
For example:

```yaml
api:
  endpoints:
    - name: scanapi-demo # The API's name of your API
      path: http://demo.scanapi.dev/api/ # The API's base url
      requests:
        - name: list_all_devs # The name of the fist request
          path: devs/ # The path of the fist request
          method: get # The HTTP method of the fist request
          tests:
            - name: status_code_is_200 # The name of the first test for this request
              assert: ${{ response.status_code == 200 }} # The assertion
```

And run the scanapi command

```bash
$ scanapi <file_path>
```

Then, the lib will hit the specified endpoints and generate a `scanapi-report.html` file with the
report results.

<p align="center">
  <img
    src="https://raw.githubusercontent.com/scanapi/scanapi/master/images/report-print-closed.png"
    width="700"
    alt="An overview screenshot of the report."
  />
  <img
    src="https://raw.githubusercontent.com/scanapi/scanapi/master/images/report-print-request.png"
    width="700"
    alt="A screenshot of the report showing the request details."
  />
  <img
    src="https://raw.githubusercontent.com/scanapi/scanapi/master/images/report-print-response.png"
    width="700"
    alt="A screenshot of the report showing the response and test details"
  />
</p>

You can find complete examples at [scanapi/examples][scanapi-examples]!



