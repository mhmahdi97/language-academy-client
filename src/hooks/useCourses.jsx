import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCourses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: courses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['all-courses'],
        queryFn: async() => {
            const res = await axiosSecure('/all-courses');
            return res.data;
        }
    })

    return [courses, loading, refetch]
}

export default useCourses;