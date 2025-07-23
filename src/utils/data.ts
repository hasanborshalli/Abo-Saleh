// Mock data for the real estate website
export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    year: number;
    image: string;
}
export const certificates: Certificate[] = [
    {
        id: "cert-001",
        title: "Professional License",
        issuer: "Government Of Dubai",
        year: 2023,
        image: "./dubai.jpg",
    },
    {
        id: "cert-002",
        title: "Institution registration certificate",
        issuer: "Ministry of Finance of Lebanon",
        year: 2025,
        image: "./lebanon.png",
    },
    {
        id: "cert-003",
        title: "Trade Registry Certification",
        issuer: "Istanbul Chamber of Commerce Directorate",
        year: 2019,
        image: "./turkey.jpeg",
    },
    {
        id: "cert-004",
        title: "Building permit",
        issuer: "Nabatieh Municipality",
        year: 2025,
        image: "./build.png",
    },
];
export interface TeamMember {
    id: string;
    name: string;
    position: string;
    image: string;
}
export const teamMembers: TeamMember[] = [
    {
        id: "team-001",
        name: "Mohamad Suhail Abo Saleh",
        position: "Chairperson",
        image: "./t1.jpeg",
    },
    {
        id: "team-002",
        name: "Wissam Ramadan",
        position: "Executive Officer",
        image: "./t2.jpeg",
    },
    {
        id: "team-003",
        name: "Eng. Safi Awada",
        position: "Supervisor",
        image: "./t3.jpeg",
    },
    {
        id: "team-004",
        name: "Sarah Al Fares",
        position: "Accounting Officer",
        image: "./t5.png",
    },
];
