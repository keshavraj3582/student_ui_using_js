document.getElementById('postDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const studentIdValue = document.getElementById('studentId').value;
    const genderValue = document.getElementById('gender').value.trim()==""?null:document.getElementById('gender').value;
    const nationalityValue = document.getElementById('nationality').value.trim()==""?null:document.getElementById('gender').value;
    const PlaceofBirthValue = document.getElementById('PlaceofBirth').value.trim()==""?null:document.getElementById('gender').value;
    const StageIDValue = document.getElementById('StageID').value.trim()==""?null:document.getElementById('gender').value;
    const GradeIDValue = document.getElementById('GradeID').value.trim()==""?null:document.getElementById('gender').value;
    const sectionIDValue = document.getElementById('SectionID').value.trim()==""?null:document.getElementById('gender').value;
    const topicValue = document.getElementById('topic').value.trim()==""?null:document.getElementById('gender').value;
    const semesterValue = document.getElementById('Semester').value.trim()==""?null:document.getElementById('gender').value;
    const relationValue = document.getElementById('Relation').value.trim()==""?null:document.getElementById('gender').value;
    const raisedhandsValue = document.getElementById('raisedhands').value.trim() === "" ? null : parseInt(document.getElementById('raisedhands').value, 10);
    const VisITedResourcesValue = document.getElementById('VisITedResources').value.trim() === "" ? null : parseInt(document.getElementById('VisITedResources').value, 10);
    const announcementsViewValue= document.getElementById('AnnouncementsView').value.trim() === "" ? null : parseInt(document.getElementById('AnnouncementsView').value, 10);
    const DiscussionValue= document.getElementById('Discussion').value.trim() === "" ? null : parseInt(document.getElementById('Discussion').value, 10);
    const ParentAnsweringSurveyValue = document.getElementById('ParentAnsweringSurvey').value.trim()==""?null:document.getElementById('gender').value; 
    const ParentschoolSatisfactionValue = document.getElementById('ParentschoolSatisfaction').value.trim()==""?null:document.getElementById('gender').value;
    const StudentAbsenceDaysValue = document.getElementById('StudentAbsenceDays').value.trim()==""?null:document.getElementById('gender').value;
    const Student_MarksValue = document.getElementById('Student_Marks').value.trim()==""?null:document.getElementById('gender').value;
    const classIDValue = document.getElementById('Class').value.trim()==""?null:document.getElementById('gender').value;

    const postData = {
        studentId: studentIdValue,
        gender:genderValue,
        nationality:nationalityValue,
        PlaceofBirth:PlaceofBirthValue,
        StageID:StageIDValue,
        GradeID:GradeIDValue,
        SectionID:sectionIDValue,
        topic:topicValue,
        Semester:semesterValue,
        Relation:relationValue,
        raisedhands:raisedhandsValue,
        VisITedResources:VisITedResourcesValue,
        AnnouncementsView:announcementsViewValue,
        Discussion:DiscussionValue,
        ParentAnsweringSurvey:ParentAnsweringSurveyValue,
        ParentschoolSatisfaction:ParentschoolSatisfactionValue,
        StudentAbsenceDays:StudentAbsenceDaysValue,
        Student_Marks:Student_MarksValue,
        Class:classIDValue
    };

    const apiUrl='https://localhost:7124/api/studentapi';

   // const apiUrl = 'http://localhost:5180/api/Studentapi/';

    console.log('API URL:', apiUrl);
    console.log('Request Data:', postData);

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(postData), 
    })
    .then(response => {
        if (response.ok) {
            alert('Student ID successfully posted to the API.');
        } else {
            alert('Error posting Student ID to the API.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while posting Student ID to the API.');
    });
});






 
