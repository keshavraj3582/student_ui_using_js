async function deleteStudentData() {
    const studentId = document.getElementById('studentIdInput').value;

    if (!studentId) {
        alert("Please enter a student ID.");
        return;
    }

    try {
        let response = await fetch(`https://localhost:7124/api/StudentApi/${studentId}`, {
            method: 'DELETE'
        });
        
        if (response.status === 200) {
            document.getElementById('deleteStatus').textContent = 'Student data deleted successfully.';
        } else if (response.status === 404) {
            document.getElementById('deleteStatus').textContent = 'Student data not found.';
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
