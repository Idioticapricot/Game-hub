import useData from "./UseData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}
const usePlatform =()=> useData<Platform>('/platforms/lists/parents')
export default usePlatform;