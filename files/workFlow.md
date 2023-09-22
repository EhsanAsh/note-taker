![Ehsan@sh](./Favicon.ico)

# User Story

> AS A small business owner,
> *I WANT* to be able to write and save notes,
> *SO THAT* I can organize my thoughts and keep track of tasks I need to complete.

---

# Acceptance Criteria

### GIVEN a note-taking application,
- *WHEN I* open the Note Taker,
  *THEN I* am presented with a landing page with a link to a notes page.
- *WHEN I* click on the link to the notes page,
  *THEN I* am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.
- *WHEN I* enter a new note title and the note’s text,
  *THEN* a Save icon appears in the navigation at the top of the page.
- *WHEN I* click on the Save icon,
  *THEN* the new note I have entered is saved and appears in the left-hand column with the other existing notes.
- *WHEN I* click on an existing note in the list in the left-hand column,
  *THEN* that note appears in the right-hand column.
- *WHEN I* click on the Write icon in the navigation at the top of the page,
  *THEN I* am presented with empty fields to enter a new note title and the note’s text in the right-hand column.

---

# Algorithm:

> 1. Start the note-taking application.
> 2. Display a landing page with a link to the notes page.
> 3. When the link is clicked, navigate to the notes page.
> 4. On the notes page, show a list of existing notes in the left-hand column and empty fields for note title and text in the right-hand column.
> 5. Detect text input into the new note title and text fields.
> 6. When text is entered, display a Save icon at the top navigation.
> 7. On clicking the Save icon, store the new note and update the list in the left-hand column.
> 8. Allow selection of an existing note from the left-hand column.
> 9. Display the selected note's title and text in the right-hand column.
> 10. Add a Write icon in the top navigation for creating a new note.
> 11. When Write icon is clicked, clear the fields in the right-hand column for a new note.

--- 

## Tasks:

### Development Phase:

- Set up the application environment (HTML, CSS, JavaScript).
- Create the landing page with navigation to the notes page.
- Implement the notes page layout, separating the left-hand column for the note list and right-hand column for note input.
- Develop functions to detect and handle text input for new note title and text.
- Implement a function to display the Save icon when text is entered.
- Create a function to save the new note and update the list in the left-hand column.
- Add a click event listener for selecting an existing note and displaying it in the right-hand column.
- Implement the Write icon function to clear the input fields for new notes.

### Testing Phase:

- Test the application's initial landing page to ensure it navigates to the notes page.
- Test that existing notes are properly listed in the left-hand column.
- Test input fields for entering a new note title and text.
- Validate that the Save icon appears only after text input.
- Test the save function to ensure that it adds the new note to the left-hand column and saves it.
- Verify that clicking an existing note displays its details in the right-hand column.
- Test the Write icon functionality to confirm it clears the input fields for new notes.

### Deployment Phase:

- Document the process for starting and using the note-taking application.
- Optimize the application for both mobile and desktop interfaces.
- Implement error handling and logging for data input and storage issues.
- Deploy the application to the Heroku server for user access.

---

## Pattern Recognition:

> This problem exemplifies a typical note-taking application focusing on CRUD (Create, Read, Update, Delete) operations. It integrates UI/UX elements, event-driven programming, and data storage techniques commonly seen in modern web applications.

---

## PseudoCode:

`Initialize Application()
  Display LandingPage()
    IF User clicks on 'Link to Notes Page'
      Navigate to NotesPage()
      DISPLAY ExistingNotes() in LeftColumn
      DISPLAY EmptyFields() in RightColumn for NewNote
NotesPage()
  IF NewNoteTitle and NewNoteText fields have TextInput
    DISPLAY SaveIcon in TopNavigation
  IF SaveIcon is clicked
    SaveNewNote()
    UpdateNotesList() in LeftColumn
  IF ExistingNote is clicked in LeftColumn
    DisplayExistingNoteDetails() in RightColumn
  IF WriteIcon is clicked in TopNavigation
    ClearFields() in RightColumn for NewNoteInput
FUNCTION DisplayLandingPage()
  // Code to display landing page with navigation to notes page
FUNCTION NavigateToNotesPage()
  // Code to navigate to the notes page and initialize it
FUNCTION DisplayExistingNotes()
  // Code to display list of existing notes in the left-hand column
FUNCTION DisplayEmptyFields()
  // Code to display empty fields in the right-hand column for new note
FUNCTION SaveNewNote()
  // Code to save a new note to the storage and refresh list in left-hand column
FUNCTION UpdateNotesList()
  // Code to update the list of notes in the left-hand column
FUNCTION DisplayExistingNoteDetails()
  // Code to display an existing note's title and text in the right-hand column
FUNCTION ClearFields()
  // Code to clear fields in the right-hand column for new note input`