import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyCourses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myCourses = [] } = useQuery({
        queryKey: ['instructor-courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/instructor-courses?email=${user?.email}`)
            return res.data;
        },
    })

    return [myCourses, refetch]

}
export default useMyCourses;