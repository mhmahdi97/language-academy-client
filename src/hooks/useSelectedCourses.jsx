import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";




const useSelectedCourses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selectedCourses = [] } = useQuery({
        queryKey: ['selected-courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selected-courses?email=${user?.email}`)
            return res.data;
        },
    })

    return [selectedCourses, refetch]

}
export default useSelectedCourses;