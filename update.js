let studentData = null; 
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
        studentData = await response.json();
        document.getElementById('studentId').value = studentData.studentId;
        document.getElementById('gender').value = studentData.gender;
        document.getElementById('nationalIty').value=studentData.nationalIty;
        document.getElementById('placeofBirth').value=studentData.placeofBirth;
        document.getElementById('stageId').value=studentData.stageId;
        document.getElementById('gradeId').value=studentData.gradeId;
        document.getElementById('sectionId').value=studentData.sectionId;
        document.getElementById('topic').value=studentData.topic;
        document.getElementById('semester').value=studentData.semester;
        document.getElementById('relation').value=studentData.relation;
        document.getElementById('raisedhands').value=studentData.raisedhands;
        document.getElementById('visItedResources').value=studentData.visItedResources;
        document.getElementById('announcementsView').value=studentData.announcementsView;
        document.getElementById('discussion').value=studentData.discussion;
        document.getElementById('parentAnsweringSurvey').value=studentData.parentAnsweringSurvey;
        document.getElementById('parentschoolSatisfaction').value=studentData.parentschoolSatisfaction;
        document.getElementById('studentAbsenceDays').value = studentData.studentAbsenceDays;
        document.getElementById('studentMarks').value = studentData.studentMarks;
        document.getElementById('class').value = studentData.class;
        document.getElementById('updateStatus').textContent = 'Data retrieved for update.';
    } catch (error) {
        console.error('Error:', error);
    }
}

async function updateStudentData() {
    if (!studentData) {
        alert("No data retrieved for update. Please fetch data first.");
        return;
    }
    const updatedData = {
        studentId: studentData.studentId,
        gender: document.getElementById('gender').value,
        nationalIty: document.getElementById('nationalIty').value,
        placeofBirth: document.getElementById('placeofBirth').value,
        stageId: document.getElementById('stageId').value,
        gradeId: document.getElementById('gradeId').value,
        sectionId: document.getElementById('sectionId').value,
        topic:document.getElementById('topic').value,
        semester: document.getElementById('semester').value,
        relation: document.getElementById('relation').value,
        raisedhands: document.getElementById('raisedhands').value,
        visItedResources: document.getElementById('visItedResources').value,
        announcementsView: document.getElementById('announcementsView').value,
        discussion: document.getElementById('discussion').value,
        parentAnsweringSurvey: document.getElementById('parentAnsweringSurvey').value,
        parentschoolSatisfaction: document.getElementById('parentschoolSatisfaction').value,
        studentAbsenceDays: document.getElementById('studentAbsenceDays').value,
        studentMarks: document.getElementById('studentMarks').value,
        class: document.getElementById('class').value,
        
    };

    try {
        let response = await fetch(`https://localhost:7124/api/StudentApi/${studentData.studentId}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        if (response.status === 200) {
            document.getElementById('updateStatus').textContent = 'Student data updated successfully.';
            document.getElementById('updateStatus').textContent = 'Student data updated successfully.';
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
