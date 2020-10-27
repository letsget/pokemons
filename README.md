## Pokemon app for KODE
[View Demo](https://pokemons-for-kode.000webhostapp.com/)

- To login the app, please use:
  - login — `kode@kode.ru`
  - password — `Enk0deng`
  - code - `1234 or any combination of numbers`

### Description

The app fetches pokemons from an [API](https://pokemontcg.io/) and displays them to a user. The pokemon cards are shown in rows of four. In total, 12 cards are fetched per page, but you can change the number in a "loadPokemons" function located in actions.jsx file. 

As the user scrolls down to the bottom of the page, he sees a paging functionality, which allows him to navigate to the next or to any desired page. A user can click on any of the pokemons on the page and navigate to a detailed page with information on a selected pokemon. On this page, a user may view the detailed info and return to the main page.

### Functionality

- [ ] Fake authorization with a verification code. Actual authorization needs to be processed by backend, the app uses a simple function to check if a user is registered and all authorization check happens on the client side;
- [ ] OTP - a user needs to enter a verification code, which needs to be generated by backend and sent to either a user's phone as an sms or to his email address. For demonstration purposes of the app, you may enter any code;
- [ ] A user session is stored to the local storage, which means that a user may close the tab/browser and return to it later without the need for a repeated login;
- [ ] Logout functionality is done by clearing local storage;
- [ ] Displaying a list of pokemons on the page;
- [ ] Detailed page leading to information of a chosen pokemon;
- [ ] Paging functionality to fetch more pokemons/navigate across pages of the app;

### Stack

- [ ] React/hooks/functional components;
- [ ] Redux for state-management;
- [ ] Routing for creating navigation across the app pages (including private routes);
- [ ] Semantic-ui-react was used for scaffolding the app and for creating simple app interfaces;
- [ ] ShortID library was used for generating unique keys in mapping of elements;

### Bottlenecks and potential issues

State management of the app may be improved by using **reselect** and **redux-persist** packages. I haven't used them in my app becuase I lack solid knowlege of these libraries. They are certainly on my to-do-list. The visual interface of the app may be enhanced by using custom CSS or better theme interface. Overall, the app is working according to instuctions listed in the assignment. The app is not perfectly scaled to small mobile screens and responsiveness of the app may be improved.

If you happen to find critical bugs or issues or if you have any suggestions on how to improve the app, feel free to contact me at andrewbond@mail.ru








