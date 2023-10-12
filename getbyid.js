async function fetchStudentData() {
    const studentId = document.getElementById('studentIdInput').value;

    if (!studentId) {
        alert("Please enter a student ID.");
        return;
    }

    try {
        let response = await fetch(`https://localhost:7124/api/StudentApi/${studentId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        const userData = document.getElementById('userData');
        userData.innerHTML = `
            <tr>
                <td>${data.studentId || 'N/A'}</td>
                <td>${data.gender || 'N/A'}</td>
                <td>${data.nationalIty || 'N/A'}</td>
                <td>${data.placeofBirth || 'N/A'}</td>
                <td>${data.stageId || 'N/A'}</td>
                <td>${data.gradeId || 'N/A'}</td>
                <td>${data.sectionId || 'N/A'}</td>
                <td>${data.topic || 'N/A'}</td>
                <td>${data.semester || 'N/A'}</td>
                <td>${data.relation || 'N/A'}</td>
                <td>${data.raisedhands || 'N/A'}</td>
                <td>${data.visItedResources || 'N/A'}</td>
                <td>${data.announcementsView || 'N/A'}</td>
                <td>${data.discussion || 'N/A'}</td>
                <td>${data.parentAnsweringSurvey || 'N/A'}</td>
                <td>${data.parentschoolSatisfaction || 'N/A'}</td>
                <td>${data.studentAbsenceDays || 'N/A'}</td>
                <td>${data.studentMarks || 'N/A'}</td>
                <td>${data.class || 'N/A'}</td>
            </tr>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
}

