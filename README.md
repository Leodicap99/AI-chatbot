# My SentiSum Assignment (Aditya Sankara Kumar)

## Tech stack being used
1. JavaScript
2. React
3. Material UI
4. Redux toolkit

## General information
1. I have created all the mock API in the mocks folder
2. I tried to use ChatGPT as a base design
3. I have designed it in such a way that users chat history is read only
4. I have assigned a users text with a background color of primary main (light blue in mui) and grey for AI text
5. I have used prettier to format my code
6. I have used eslint for fixing any js errors i have in my project

## Pre-requisites
1. Ensure you have Node.js installed and npm installed. You can check if it is installed by running the following commands:

```sh
node -v
npm -v
```
## Installation steps
1. git clone https://github.com/Leodicap99/sentisum-assignment.git
2. cd sentisum-assignment
3. npm install

## Running the Application
```sh
npm start
```
## Reason behind technical choices
* As I have mentioned I have used Material UI as my UI library as I have prior experience with it.
* Dark mode functionality is pretty easy to implement with this compared to using context apis.
* For mocking the AI response I used a regular promise with a 0.5 second delay to mimic an actual fetch call with a randomized list of info about sentisum.
* I used redux store to handle all of the chats data management like add, edit etc
* I used 2 different arrays in redux to manage the current chat as well as all the other chats

## Reason behind my design choices
* I have used ChatGPT's interface as my base model and build on top of that. 
* We have our navbar on top mentioning the app name and dark mode functionality.
* Our ChatGPT like interface for the chat
* I have made our chat history as read only as I felt it aligned more with the instructions given to me

## Things I have left out
* Allow the user to convert the text into bold/italics using the standard shortcuts. This needs to be stored and rendered everywhere accordingly.(Bonus extension)

## Flow of the Application
1. Firstly you will be presented with a standard chat application
   <img width="1512" alt="image" src="https://github.com/user-attachments/assets/41b02fac-a783-4cbf-8f49-74d5b805af08">
2. Hover over the AI response and give it a thumbsup or thumbsdown if you liked the info!
   <img width="1501" alt="image" src="https://github.com/user-attachments/assets/b22e07ba-9c49-48ae-a019-08b3956418ab">
3. The app supporst enter while in the text field to enter your questions instead of manually clicking on send
4. The save chat option opens up a feedback form which you can provide.
   <img width="1511" alt="image" src="https://github.com/user-attachments/assets/15902950-7557-42b2-be26-84e8c2b0cd53">

5. Use the menu bar on your top left corner to access chat history
   <img width="1512" alt="image" src="https://github.com/user-attachments/assets/6af61a79-721b-4eb5-ac08-1e95a980db76">
6. If you want to go back to chatting with the AI use the menu icon again and click on New Chat.
   
   <img width="255" alt="image" src="https://github.com/user-attachments/assets/99763591-158a-4934-ab9f-d3d55b27b76a">

7. The previous chat is set to read only where the user can see his/her submitted feedback by clicking on "SHOW FEEDBACK" button
   <img width="1511" alt="image" src="https://github.com/user-attachments/assets/7a6b3223-2989-4cca-aace-c21192546771">



