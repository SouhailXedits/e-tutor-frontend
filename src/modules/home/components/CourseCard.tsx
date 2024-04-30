function CourseCard({ course }: any) {
  console.log(course);
  return (
    <div className=" flex gap-4">
      <img src="/Course-image.webp" alt=" course thumbnail" />
      <div className=" space-y-2">
        <p className=" flex gap-3 text-sm font-light text-gray-500">
          course by :
          {course.instructors.map((instructor: any) => (
            <span className=" text-gray-800" key={instructor.id}> 
              {instructor.firstName} {instructor.lastName}
            </span>
          ))}
        </p>

        <p className=" text-lg font-medium mb-2">{course.title}</p>
        <div className=" flex gap-3">
          <span className=" text-primary-500">${course.price}</span>
          {course.discount > 0 && (
            <span className=" text-gray-400 line-through">
              ${course.discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
//  {
//     createdAt: '2024-04-23T07:29:03.768Z',
//     updatedAt: '2024-04-23T07:29:03.768Z',
//     id: 26,
//     title: 'Unbranded Plastic Fish',
//     subtitle: 'Intelligent Metal Ball',
//     topic: 'Refined Frozen Gloves',
//     level: 'Expert',
//     duration: 10,
//     description: '{"text": "hi"}',
//     subjects: [ 'Ai', 'Machine learninig' ],
//     audience: [ 'strudnets' ],
//     requirements: [ 'Human (Optional)' ],
//     welcomeMessage: 'maiores animi deleniti',
//     congratsMessage: 'aut modi placeat',
//     price: 0,
//     discount: 0,
//     thumbnail: {
//       id: 'f39d372c-3552-4b62-a954-7957f9a7d497',
//       path: 'http://localhost:4000/api/v1/files/00477a23065504f1277c9.jpeg'
//     },
//     trailer: {
//       id: 'f39d372c-3552-4b62-a954-7957f9a7d497',
//       path: 'http://localhost:4000/api/v1/files/00477a23065504f1277c9.jpeg'
//     },
//     instructors: [
//       {
//         createdAt: '2024-04-17T07:10:53.938Z',
//         updatedAt: '2024-04-17T07:10:53.938Z',
//         deletedAt: null,
//         id: 49,
//         socialId: null,
//         firstName: null,
//         lastName: null,
//         username: null,
//         title: null,
//         bigoraphie: null,
//         persenalWebsite: null,
//         linkedin: null,
//         twitter: null,
//         facebook: null,
//         instagram: null,
//         whatsapp: null,
//         youtube: null
//       },
//       {
//         createdAt: '2024-04-16T15:38:54.787Z',
//         updatedAt: '2024-04-16T15:38:54.787Z',
//         deletedAt: null,
//         id: 31,
//         socialId: null,
//         firstName: null,
//         lastName: null,
//         username: null,
//         title: null,
//         bigoraphie: null,
//         persenalWebsite: null,
//         linkedin: null,
//         twitter: null,
//         facebook: null,
//         instagram: null,
//         whatsapp: null,
//         youtube: null
//       }
//     ]
//   }
