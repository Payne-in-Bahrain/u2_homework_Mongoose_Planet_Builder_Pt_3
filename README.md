
<img src="https://i.imgur.com/ONAAEVZ.jpg" width="80%">

# Mongoose Planet Builder - Part 3

## Intro

In this part of the Mongoose Planet Builder lab, you'll be expanding the functionality of your app to associate explorers with planets. This will involve creating routes and controllers for explorers, creating an explorers schema and mongoose model, and allowing users to associate an explorer with a planet.

## Goal

The goal of this part of the lab is to allow users to associate explorers with planets.
## Exercises

👉 Refer to `mongoose-movies` as needed!

1. **Create Explorer Routes and Controllers:**

    - **Explorer Model:**
        Create an explorer schema with the following properties:

        | Property | Type    | Validations      | Default Value |
        |----------|---------|------------------|---------------|
        | `name`   | `String`| Required         | n/a           |
        | `age`    | `Number`| Required         | n/a           |

        Now, create a mongoose model for the explorer using this schema.

    - **Explorer Routes:**
        Create routes for explorers with the following functionalities:

        - `GET /explorers/new`: Display a form to add a new explorer.
        - `GET /explorers`: List all explorers.
        - `POST /explorers`: Create a new explorer.
        - `POST /planets/:planetId/explorers`: Allow users to submit the explorer id in the request body to associate the explorer with the specified planet.

2. **Update Planet's Detail Page:**

    - **Show Page (moviesCtrl.show):**
        Update the planet's detail page (`show` view) to display the explorers currently associated with that planet and include the form to associate additional explorers.

    - **Routes (planets.js):**
        Modify the planets routes and controllers as needed to accommodate the changes. Ensure that the explorers are properly populated in the planet's detail page.

## Bonuses

1. Add styling to the explorer-related pages to enhance the user experience.

### This is the final deliverable. If you haven't yet made a pull request, please do so.  If you have already made a pull reuquest, you do not need to do a second one, just push your code. 
