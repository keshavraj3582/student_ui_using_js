document.getElementById('postDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const studentIdValue = document.getElementById('studentId').value;
    const genderValue = document.getElementById('gender').value;
    const nationalityValue = document.getElementById('nationality').value;
    const PlaceofBirthValue = document.getElementById('PlaceofBirth').value;
    const StageIDValue = document.getElementById('StageID').value;
    const GradeIDValue = document.getElementById('GradeID').value;
    const sectionIDValue = document.getElementById('SectionID').value;
    const topicValue = document.getElementById('topic').value;
    const semesterValue = document.getElementById('Semester').value;
    const relationValue = document.getElementById('Relation').value;
    const raisedhandsValue = document.getElementById('raisedhands').value;
    const VisITedResourcesValue = document.getElementById('VisITedResources').value;
    const announcementsViewValue= document.getElementById('AnnouncementsView').value;
    const DiscussionValue= document.getElementById('Discussion').value;
    const ParentAnsweringSurveyValue = document.getElementById('ParentAnsweringSurvey').value;   
    const ParentschoolSatisfactionValue = document.getElementById('ParentschoolSatisfaction').value;
    const StudentAbsenceDaysValue = document.getElementById('StudentAbsenceDays').value;
    const Student_MarksValue = document.getElementById('Student_Marks').value;
    const classIDValue = document.getElementById('Class').value;

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

    const apiUrl = 'http://localhost:5180/api/Studentapi/';

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




// JavaScript code for handling form submission
// document.getElementById('postDataForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(this);

//     // Create an object with the expected format
//     const postData = {
//         studentId: formData.get('studentId'),
//         gender: formData.get('gender'),
//         nationalIty: formData.get('nationalIty'),
//         placeofBirth: formData.get('placeofBirth'),
//         stageId: formData.get('stageId'),
//         gradeId: formData.get('gradeId'),
//         sectionId: formData.get('sectionId'),
//         topic: formData.get('topic'),
//         semester: formData.get('semester'),
//         relation: formData.get('relation'),
//         raisedhands: parseInt(formData.get('raisedhands')),
//         visItedResources: parseInt(formData.get('visItedResources')),
//         announcementsView: parseInt(formData.get('announcementsView')),
//         discussion: parseInt(formData.get('discussion')),
//         parentAnsweringSurvey: formData.get('parentAnsweringSurvey'),
//         parentschoolSatisfaction: formData.get('parentschoolSatisfaction'),
//         studentAbsenceDays: formData.get('studentAbsenceDays'),
//         studentMarks: parseInt(formData.get('studentMarks')),
//         class: formData.get('class')
//     };

//     fetch('http://localhost:5180/api/StudentApi', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json', // Set the content type to JSON
//         },
//         body: JSON.stringify(postData), // Convert the data to JSON
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Data successfully posted to the API:', data);
//         // You can add further handling here
//     })
//     .catch(error => {
//         console.error('Error posting data to the API:', error);
//         // Handle the error here
//     });
// });

// function SubmitForm(event) {

//     event.preventDefault();
//     const studentId = document.getElementById('studentId').value;
//     const gender = document.getElementById('gender').value;
//     const nationality = document.getElementById('nationality').value;
//     const PlaceofBirth = document.getElementById('PlaceofBirth').value;
//     const StageID = document.getElementById('StageID').value;
//     const GradeID = document.getElementById('GradeID').value;
//     const sectionID = document.getElementById('SectionID').value;
//     const topic = document.getElementById('topic').value;
//     const semester = document.getElementById('Semester').value;
//     const relation = document.getElementById('Relation').value;
//     const raisedhands = document.getElementById('raisedhands').value;
//     const VisITedResources = document.getElementById('VisITedResources').value;
//     const announcementsView = document.getElementById('AnnouncementsView').value;
//     const AnnouncementsView = document.getElementById('AnnouncementsView').value;
//     const Discussion = document.getElementById('Discussion').value;
//     const ParentschoolSatisfaction = document.getElementById('ParentschoolSatisfaction').value;
//     const StudentAbsenceDays = document.getElementById('StudentAbsenceDays').value;
//     const Student_Marks = document.getElementById('Student_Marks').value;
//     const classID = document.getElementById('Class').value;
   
//     const formData = {
//         studentId:studentId,
//         gender:gender,
//         nationality:nationality,
//         PlaceofBirth:PlaceofBirth,
//         StageID:StageID,
//         GradeID:GradeID,
//         sectionID:sectionID,
//         topic:topic,
//         semester:semester,
//         relation:relation,
//         raisedhands:raisedhands,
//         VisITedResources:VisITedResources,
//         announcementsView:announcementsView,
//         Discussion:Discussion,
//         ParentschoolSatisfaction:ParentschoolSatisfaction,
//         StudentAbsenceDays:StudentAbsenceDays,
//         Student_Marks:Student_Marks,
//         classID:class


// };

 

//     // Make an HTTP POST request to your API endpoint

//     try {

//         const response = await fetch('https://localhost:7124/api/studentapi/', {

//             method: 'POST',

//             headers: {

//                 'Content-Type': 'application/json',

//             },

//             body: JSON.stringify(formData),

//         });

 

//         if (response.ok) {

//             console.log('Form submitted successfully:', response.json());

//             // Add logic to handle successful submission

//         } else {

//             console.error('Error submitting form:', response.statusText);

//             // Add logic to handle errors

//         }

//     } catch (error) {

//         console.error('Error:', error);

//         // Add logic to handle errors

//     }
//  // Log the retrieved data (you can process this data as needed)
//     console.log('studentId:', studentId);
//     console.log('Gender:', gender);
//     console.log('Nationality:', nationality);
//     console.log('placeOfBirth:', PlaceofBirth);
//     console.log('stageID:', StageID);
//     console.log('gradeID:', GradeID);
//     console.log('sectionID:', sectionID);
//     console.log('topic:', topic);
//     console.log('semester:', semester);
//     console.log('relation:', relation);
//     console.log('raisedhands:', raisedhands);
//     console.log('visITedResources:', VisITedResources);
//     console.log('announcementsView:', announcementsView);
//     console.log('discussion:', Discussion);
//     console.log('parentAnsweringSurvey:', parentAnsweringSurvey);
//     console.log('parentschoolSatisfaction:', ParentschoolSatisfaction);
//     console.log('studentAbsenceDays:', StudentAbsenceDays);
//     console.log('student_Marks:', Student_Marks);

//     console.log('classID:', classID);

 

 

//     // // ... Log other attribute values ...

 

//     // // Reset the form

//     document.getElementById('postDataForm').reset();

// }

 
