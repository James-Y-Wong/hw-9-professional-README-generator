// TODO: Create a function that returns a license badge based on which license is passed in
// function to render badge at the top of README and in the license section
function renderLicenseBadge(data) {
  let licenseOption = data.license;
  if (licenseOption === 'MIT') {
    return licenseOption = 'MIT'
  };
  if (licenseOption === 'Apache 2.0') {
    return licenseOption = 'Apache_2.0'
  };
  if (licenseOption === 'BSD 3-Clause') {
    return licenseOption = 'BSD_3--Clause'
  };
  if (licenseOption === 'BSD 2-Clause') {
    return licenseOption = 'BSD_2--Clause'
  };
  if (licenseOption === 'GPLv3') {
    return licenseOption = 'GPLv3'
  };
  if (licenseOption === 'None') {
    return licenseOption = 'Unlicense'
  };
};

// TODO: Create a function that returns the license link
// function that adds link to the license chosen
// URL used for badge so when click badge it takes to site
function renderLicenseLink(data) {
  let licenseOption = data.license;
  if (licenseOption === 'MIT') {
    return licenseOption = 'https://opensource.org/licenses/MIT'
  };
  if (licenseOption === 'Apache 2.0') {
    return licenseOption = 'https://www.apache.org/licenses/LICENSE-2.0'
  };
  if (licenseOption === 'BSD 3-Clause') {
    return licenseOption = 'https://opensource.org/licenses/BSD-3-Clause'
  };
  if (licenseOption === 'BSD 2-Clause') {
    return licenseOption = 'https://opensource.org/licenses/BSD-2-Clause'
  };
  if (licenseOption === 'GPLv3') {
    return licenseOption = 'https://www.gnu.org/licenses/gpl-3.0'
  };
  if (licenseOption === 'None') {
    return licenseOption = 'https://choosealicense.com/licenses/unlicense'
  };
};

// TODO: Create a function that returns the license section of README
// function renders specific license info based on user input
function renderLicenseSection(data) {
  let licenseOption = data.license;
  let year = data.year;
  let owner = data.owner;
  if (licenseOption === 'MIT') {
    return licenseOption = `Copyright (c) ${year} ${owner}
  
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  };
  if (licenseOption === 'Apache 2.0') {
    return licenseOption = `Copyright (c) ${year} ${owner}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  };
  if (licenseOption === 'BSD 3-Clause') {
    return licenseOption = `Copyright (c) ${year} ${owner}

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  };
  if (licenseOption === 'BSD 2-Clause') {
    return licenseOption = `Copyright (c) ${year} ${owner}

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  };
  if (licenseOption === 'GPLv3') {
    return licenseOption = `Copyright (c) ${year} ${owner}

    This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.`
  };
  if (licenseOption === 'None') {
    return licenseOption = `
    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <https://unlicense.org>`
  };
};

// function that renders the Test section of README based on whether or not there is a test written for application
function renderTestSection (data) {
  let testOption = data.test;
  let command = data.command;
  if (testOption === 'yes') {
    return `There is a test written for this application. Run command line:
  
    - ${command}`
  } else {
    return "There is currently no test written for this application"
  };
};

// TODO: Create a function to generate markdown for README
// function that generates markdown for README
// used template literals to insert user inputs on prompt
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${renderLicenseBadge(data)}-blue.svg)](${renderLicenseLink(data)})
  
  ## Description
  
  My motivation to build this project is ${data.motivation}. Now this project will ${data.result}. This project solves ${data.solve}. 
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  
  Prerequisites: ${data.prerequisites}
  
  Packages: ${data.package}
  
  ## Usage
  
  Make sure you have all the prerequisites and packages installed. 
  
  - ${data.usage}
  
  ## License
  
  [![License](https://img.shields.io/badge/License-${renderLicenseBadge(data)}-blue.svg)](${renderLicenseLink(data)})
  
  ${renderLicenseSection(data)}
  
  ## Contributing
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
  
  Have you spotted a typo, would you like to fix a link, or is there something you would like to suggest? Browse the source repository of this article and open a pull request. I will do my best to review your proposal in due time.
  
  [Source Repository](https://github.com/${data.github}/${data.contributing})
  
  ## Tests
  
  ${renderTestSection(data)}
  
  ## Questions
  
  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
  
  - [${data.github}](https://github.com/${data.github})
  
  If you have additional questions, please do not hesitate to reach out to me via email.
  
  - ${data.email}
  `;
}

// allows generateMarkdown to be called by index.js
module.exports = generateMarkdown;
