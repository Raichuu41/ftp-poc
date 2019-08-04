// this will be our dockerfile
let buildStr = [];
// list of dependencies to install, important: key name has to be equal to the id of the checkbox input
const dependencies = {
    "autoconfig": false, "automake": false, "libbz2": false,
    "g++": false, "gcc": false, "imagemagick": false
};

function setPort() {
    if (document.getElementById('port').value === '') {
        return 8080;
    } else {
        return document.getElementById('port').value;
    }
}

function updatePreview(build) {
    document.getElementById('recipe').value = build.join("\n");
    console.log(buildStr);
    /*
    var client = new XMLHttpRequest();
    client.open('GET', 'recipe.txt');
    client.onreadystatechange = function () {
        textArea.value = client.responseText;
    };
    client.send();
    */
}

function selectOS(OS) {
    //add needed OS
    if (OS === 'ubuntu') {
        buildStr[0] = 'FROM educloud:ubuntu';
    } else if (OS === 'centOS') {
        buildStr[0] = 'FROM educloud:centOS\n';
    }
}

function setDependencies() {
    for (key in dependencies) {
        if (dependencies.hasOwnProperty(key)) {
            //alternative method if value is not set by checkbox
            if (key === 'something' || key === 'somethingelse') {
                // method to read from non-checkbox
            }
            //only works for checkboxes
            dependencies[key] = document.getElementById(key).checked;
        }
    }
}

function installDependencies() {
    // clear array first to prevent duplicate files
    buildStr = [];
    buildStr.push('RUN sudo apt-get purge -y python.* && sudo apt-get update && sudo apt-get install -y --no-install-recommends \\');
    for (let key in dependencies) {
        if (dependencies.hasOwnProperty(key) && dependencies[key] === true) {
            buildStr.push(key + ' \\');
        }
    }
    //*************************************
    // PUSH YOUR STATIC INSTRUCTIONS HERE!!!!
    //*************************************

    /*
    Installing Python Modules based on selection
     */
    const selectionValue = document.getElementById('selectionPackage').value;
    buildStr.push('RUN pip3 install \\');  // default begin for any Python module install
    if (selectionValue === 'Standard') {
        buildStr.push('PIP STANDARD SET');
    } else if (selectionValue === 'Machine Learning') {
        // based on Top 10 List: https://www.edureka.co/blog/python-libraries/
        /* this includes: Tensorflow, Scikit-Learn, Numpy, Keras, PyTorch, LightGBM, Eli5,
        Scipy, Theano and Pandas
        */
        buildStr.push('tensorflow scikit-learn numpy Keras ' +
            'https://download.pytorch.org/whl/cpu/torch-1.0.1-cp37-cp37m-win_amd64.whl ' +
            'torchvision lightgbm eli5 scipy Theano pandas')

    } else if (selectionValue === 'Data Science') {
        buildStr.push('PIP DATA SCIENCE SET');
    } else if (selectionValue === 'Mathematics') {
        buildStr.push('PIP MATHEMATICS SET');
    }
    // at last set port to which the file should be exposed to
    buildStr.push('EXPOSE ' + setPort());
    // show notification that the build was successful
    displaySuccess();
    // update the preview for advanced mode
    updatePreview(buildStr);
}

function displaySuccess() {
    let x = document.getElementById('successMessage');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }
}

function runBuilder() {
    for (let key in dependencies) {
        dependencies[key] = document.getElementById(key).checked;
    }
    // setDependencies();
    installDependencies();
}

