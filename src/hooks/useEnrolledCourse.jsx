import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



 const useEnrolledCourses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledCourses = [] } = useQuery({
        queryKey: ['enrolled-courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled-courses?email=${user?.email}`)
            return res.data;
        },
    })

    return [enrolledCourses, refetch]

}
export default useEnrolledCourses;