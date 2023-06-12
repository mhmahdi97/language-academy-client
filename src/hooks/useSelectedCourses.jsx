import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";




const useSelectedCourses = () => {
    const { user, loading } = useContext(AuthContext);
    const { refetch, data: selectedCourses = [] } = useQuery({
        queryKey: ['selected-courses', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected-courses?email=${user?.email}`)
            return res.json();
        },
    })

    return [selectedCourses, refetch]

}
export default useSelectedCourses;