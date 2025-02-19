fetch('students.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const students = xmlDoc.getElementsByTagName("student");
        const tableBody = document.getElementById("studentTableBody");

        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            const studentID = student.getElementsByTagName("studentID")[0].textContent;
            const lastName = student.getElementsByTagName("lastName")[0].textContent;
            const firstName = student.getElementsByTagName("firstName")[0].textContent;
            const age = student.getElementsByTagName("age")[0].textContent;
            const course = student.getElementsByTagName("course")[0].textContent;
            const email = student.getElementsByTagName("email")[0].textContent;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${studentID}</td>
                <td>${lastName}</td>
                <td>${firstName}</td>
                <td>${age}</td>
                <td>${course}</td>
                <td>${email}</td>
            `;
            tableBody.appendChild(row);
        }
    })
    .catch(error => console.error('Error:', error));
