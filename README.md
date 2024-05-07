## Prerequisites

You should have either `node` and `npm` installed on your machine

## Install dependencies

To install, run the command:

```bash
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

This repository include the solution of problem(https://projecteuler.net/problem=79) 
Once you get it running on your browser, you will see two sections:

### Result

This is the result for the possible shortest secret passcode calculated based on the given text file in the problem

### Action Card

This is a playground that you can put in your own login attempts to get the possible shortest passcode

It contains

- an input for each login attempt
- an ADD button for building up your list of login attempts
- an RESET button for clearing up the list of login attempts
- text fields for your inputs and possible shortest passcode calculated based on your inputs

## Code

To dig into the core function, you can start from taking a look at method `getShortestPassword` in src/pages/Home/util.ts

To understand the UI components, you can take a look st src/pages/Home/Home.tsx

This is the file structure

```
src
 ┣ pages
 ┃ ┗ Home
 ┃ ┃ ┣ Home.tsx
 ┃ ┃ ┣ Home.module.css
 ┃ ┃ ┣ getServerSideProps.ts
 ┃ ┃ ┣ validation.ts
 ┃ ┃ ┣ constants.ts
 ┃ ┃ ┗ util.ts
 ┃ ┗ index.ts
```