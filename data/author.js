// DevOps Expertise
import AwsIcon from "assets/devicon/aws.svg?component";
import DockerIcon from "assets/devicon/docker.svg?component";
import GitHubIcon from "assets/devicon/github.svg?component";
import GitLabIcon from "assets/devicon/gitlab.svg?component";
import GrafanaIcon from "assets/devicon/grafana.svg?component";
import JenkinsIcon from "assets/devicon/jenkins.svg?component";
import KubernetesIcon from "assets/devicon/kubernetes.svg?component";
import LinuxIcon from "assets/devicon/linux.svg?component";
import SnykIcon from "assets/devicon/snyk.svg?component";
import SonarCloudIcon from "assets/devicon/sonarcloud.svg?component";
import SonarQubeIcon from "assets/devicon/sonarqube.svg?component";
// Backend Expertise
import BachIcon from "assets/devicon/bash.svg?component";
import FlaskIcon from "assets/devicon/flask.svg?component";
import PostgresIcon from "assets/devicon/postgresql.svg?component";
import PythonIcon from "assets/devicon/python.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";

const author = {
    author_image: "/author.png",
    name: "Daniel De Campos",
    position: "DevOps Engineer",
    email: "danieldecampos.v@gmail.com",
    location: "Buenos Aires City, Argentina",
    github: "ddecampos",
    socials: {
        github: "https://github.com/ddecampos",
        linkedin: "https://www.linkedin.com/in/danieldek/"
    },
    expertises: {
        "DevOps": [
            {
                name: "AWS",
                icon: AwsIcon,
                description: "",
            },
            {
                name: "Docker",
                icon: DockerIcon,
                description: "",
            },
            {
                name: "GitHub",
                icon: GitHubIcon,
                description: "",
            },
            {
                name: "GitLab",
                icon: GitLabIcon,
                description: "",
            },
            {
                name: "Grafana",
                icon: GrafanaIcon,
                description: "",
            },
            {
                name: "Jenkins",
                icon: JenkinsIcon,
                description: "",
            },
            {
                name: "Kubernetes",
                icon: KubernetesIcon,
                description: "",
            },
            {
                name: "Linux",
                icon: LinuxIcon,
                description: "",
            },
            {
                name: "Snyk",
                icon: SnykIcon,
                description: "",
            },
            {
                name: "SonarCloud",
                icon: SonarCloudIcon,
                description: "",
            },
            {
                name: "SonarQube",
                icon: SonarQubeIcon,
                description: "",
            }
        ],
        "Backend": [
            {
                name: "Bach",
                icon: BachIcon,
                description: "",
            },
            {
                name: "Flask",
                icon: FlaskIcon,
                description: "",
            },
            {
                name: "Postgres",
                icon: PostgresIcon,
                description: "",
            },
            {
                name: "Python",
                icon: PythonIcon,
                description: "",
            }
        ]
    },
    timeline: [
        {
            icon: Academy,
            currently: true,
            title: "DevOps Analyst at Accusys Technology",
            subtitle: "02/2023 — Present",
            description: "Specialist in the implementation of DevOps best practices.",
        },
        {
            icon: Academy,
            title: "Backend Developer at Buenos Aires City Government",
            subtitle: "08/2019 — 01/2023",
            description: "Geographic information systems developer.",
        },
        {
            icon: Academy,
            title: "SQL Developer at XYGO",
            subtitle: "08/2018 — 07/2019",
            description: "Management, design and optimization of relational databases.",
        },
        {
            icon: Academy,
            title: "University",
            subtitle: "2011 - 2017",
            description: "I pursued a degree in Systems Engineering at Universidad Bicentenaria de Aragua.",
        },
        {
            icon: Home,
            title: "Born in 1991, Sep 28",
            subtitle: "Maracay, Venezuela.",
            description: "",
        }
    ],
};

export default author;
