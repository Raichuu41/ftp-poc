# FTP_POC - Dockerfile Creator for custom stacks
FTP_POC allows the user to create his own custom stack (Dockerfile) for the online cloud solution in an easily accessible user-friendly way.
Select the available options to create your own suitable Dockerfile. An advanced mode with an editable preview of the Dockerfile is available if the available options are not enough.

# Live Deployment
Check out this [live deployment](https://romanpulgrabja.github.io/FTP_POC/) to see the Dockerfile Creator live in action based on the current master branch.

# Instructions for use
1. Select your Python Module set. It includes a set of common modules ready for use.
2. Select if the user should have Sudo Access for this custom stack.
3. If required, check the additional dependencies that are available.
   If the available options are not enough, you can add more options yourself.
4. Enter the port that the stack should listen to. By default it is 8080.
5. Click on Build to generate your Dockerfile.
6. If the available options are not enough for your needs, you can open the advanced mode by clicking on the Advanced 
button. It allows you to edit the Dockerfile template manually. 
If you want to undo your changes, click on the Reset button.

# Instructions to run the PyTest tests
The PyTest tests are used to test the GUI and the possible interactions for functionality.
The tests **require** you to have Chrome installed on your system together with the corresponding **webdriver** installed.

You can get the latest chrome webdriver for your Chrome version [here](https://chromedriver.chromium.org/downloads).
Your current Chrome Version can be found under *More -> Help -> About Chrome*. 

Once downloaded, make sure to add the location of the *chromedriver.exe* to your **System environment variables**
in the System Path. You can verify a successful installation by opening a CMD terminal and enter *chromedriver*.
On success it will initiate a run instance, on failure it will be an unknown command.

When the requirements are fulfilled, you can run the tests by entering *pytest* in your command terminal
within your project directory. Make sure to have **Python 3.7** installed for the tests to run.

For missing dependencies, you can run *pip install -r requirements.txt* to install the packages listed 
in the requirements.txt.

# Notes for contributors
A collection of notes if you want to contribute to this project.
## New PyTest tests ##
For new test scenarios, make sure to follow the same file structure.
1. Downloaded files belong to the *./downloads folder*
2. Locators for Selenium are located under *locators.py*
3. Test functions with Selenium are located under *test_selenium.py*. Any new
Test file has to begin with **test_** in the file name.

## Extending the Index HTML ##
To extend the current single page index.html, make sure to follow the points below.
1. Guarantee the scalability of the page to work on any window size
2. Use bootstrap to prettify the page
3. Keep it working independently (no additional plugins, packages etc. required by the user)

