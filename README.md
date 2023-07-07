##Simple Command-Line Interface
***

__CLI (Command-Line Interface)__ is a command-line interface that allows interacting with a program by entering commands and receiving responses. Users can input commands from the keyboard or use scripts to interact with the program, perform operations, and manage its functions.

CLI enables users to execute various tasks by invoking commands and passing parameters through the command line.
***

****This project describes the creation of a simple CLI for working with a contact list.****
The description of the functionality of each method is documented and can be found in the contacts.js file.
***

The result of each command is captured in a screenshot available through the corresponding link:


 1. Get all contact list (command `node index.js --action="list"`):
 [Go to screenshot](https://monosnap.com/file/DyXKGn0b1AjVYDWNYJ2QfSgWIBanrH)

 2. Get contact by ID (command `node index.js --action="get" --id idCode`).
 If idCode is wrong we  will get null;
 [Go to screenshot](https://monosnap.com/file/42MFxoAcn5nJib2Ut3syKjFUdyp3mv)

 3. Add new contact ('command `node index.js --action="add" --name ... --email ... --phone ...`):
 [Go to screenshot](https://monosnap.com/file/B98rfIgSj4RNpBDBUpG3ZsVK8iwgH8)

 4. Remove contact (command `node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH`).
 If idcode is wrond we will see 'null'.
 [Go to screenshot](https://monosnap.com/file/GwuEOYTUXXDsaNcVdfhgEg0Uwycfo8) 

***

****The entire code is available in the [repository](https://github.com/Iryna-Bigdash/nodejs-homework-01-cli.git).****


 

