import { ICourse } from "../../types/course";

function CourseCard({ course }: { course: ICourse }) {
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
