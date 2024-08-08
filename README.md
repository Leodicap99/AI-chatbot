# My SentiSum Assignment (Aditya Sankara Kumar)

## Tech stack being used
1. JavaScript
2. React
3. Material UI

## General information
1. I have created all the mock API in the mocks folder
2. I tried to use ChatGPT as a base design
3. My input handles both click of the submit button or click enter when textfield is in focus
4. I have assigned a users text with a background color of primary main (light blue in mui) and grey for AI text
5. I have used prettier to format my code
6. I have used eslint for fixing any js errors i have in my project

## ChatComponent details

### Use states
1. inputValue for the users input
2. messages for cumulative messages of both users and ai having the structure:-
   {
     text: '....',
     sender: '' //can be either ai or user
     thumbsUp: '' //only for sender as ai which is empty string by default and primary if clicked
     thumbsDown: '' //same as above
   } 
3.