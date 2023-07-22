import { useQuery } from "@tanstack/react-query";

const useCollege = () => {
    const { data: allCollege = [], isLoading } = useQuery({
        queryKey: ["colleges"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/colleges")
            return res.json()
        }
    })
    return [allCollege, isLoading];
};

export default useCollege;