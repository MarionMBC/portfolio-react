
import syncpro from "../../img/1.png";
import journal from "../../img/2.png";
import alura from "../../img/3.png";


export const allProjects = [
    {
        img: syncpro,
        label: "Syncpro"
    },
    {
        img: journal,
        label: "Journal"
    },
    {
        img: alura,
        label: "Alura"
    },
];

const [SyncPro, Journal, Alura] = allProjects;
export const initialTabs = [SyncPro, Journal, Alura];

export function getNextIngredient(
    projects
) {
    const existing = new Set(projects);
    return allProjects.find((project) => !existing.has(project));
}
