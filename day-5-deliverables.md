# Day (5) delieverables

## Task requirements

Create a web page that fetches data from the [Rick and Morty
API](https://rickandmortyapi.com/documentation/#get-all-characters), and
displays a list of characters.

### Requirements:

- Use the Fetch API (in async/await format) to retrieve the character data from
  the following endpoint: `https://rickandmortyapi.com/api/character`.
- Handle any potential errors that may occur during the API request and display
  an error message on the webpage if an error occurs.
- Only display the list of characters whose status is "alive" (filter out other
  status types). *Hint: use the query parameter `status=alive`.*
- If the number of characters returned is greater than 50, only display the
  first 50 characters returned.
- Once the character data is retrieved successfully, iterate through the list of
  characters and create `<li>` elements for each alive character and display the
  character's: **name**, **image**, **location**, **species**, and **gender**.
- Display the resulting list of alive character names on the webpage.
- Apply simple CSS styling to make the character list display properly. Write
  your CSS styles in the `./styles.css` file.
- Take a screenshot/gif/video of your work and attach it to your submission to showcase your application.

#### [Click to see the attached starter project](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/tree/master/Rick%20and%20Morty).
