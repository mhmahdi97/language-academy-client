import React from 'react';
import useEnrolledCourses from '../../../hooks/useEnrolledCourse';

const PaymentHistory = () => {
    const [enrolledCourses] = useEnrolledCourses();

    console.log(enrolledCourses)


    return (
        <div className="w-full mt-12">
            <div className="font-semibold h-[60px]">
                <h3 className="text-3xl">Payment History</h3>
        
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {course.slogan}
                                </td>
                                <td >${course.price}</td>
                                <td >${course.transactionId}</td>
                                <td >${course.date}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;