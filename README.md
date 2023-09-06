the 3 A to remember in testing
// Arrange -  this is for the render method and the intial value that need to be accessed by the component
//Action - this is for the click and or any other action that is been used for that element
//Asert - this is used for checking if the value which is visible on the screen is same as expected 

there are 3 diffent quries to find some elements
1. get - throw an error if no match found
2. find - throw an error and retry with Async/Await
3. query - return null if no match found

follow this to know what to write and when: https://www.hannaliebl.com/blog/query-vs-find-vs-get-in-react-testing-library/
 queryBy: should be written when you know that element don't exit in the DOM, because it return null if no element is found.
 // error messaging/alerts are a common thing to assert does not exist in
// the DOM under certain conditions, so use the queryBy... query
expect(screen.queryByRole("alert")).not.toBeInTheDocument();

findBy: 
The most important thing to remember about the find... queries is that they are promise-based. They will retry to find the node/nodes that are being searched for and default to timing out their retry attempts after 1000ms
The findBy/findByAll queries are useful when waiting for an element to appear or disappear in response to an event like a user action (button clicks, form submissions, etc.) or maybe something like a promise resolving (perhaps you are mocking a successful network request and changing the DOM in response to that.)
example:
const button = screen.getByRole("button", { name: "Submit" });
fireEvent.click(button);
await screen.findByText("Form submitted");

getBy: 
should be written for everything else, they return a useful error if the given node/nodes are not found
const nameInput = screen.getByLabelText("Name");
// then run assertions against nameInput, or use it in setting up
// further assertions