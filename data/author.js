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
    position: "DevOps | AWS | Docker | k8s | IaC",
    // position2: "| Docker | k8s",
    email: "danieldecampos.v@gmail.com",
    location: "Buenos Aires City, Argentina",
    github: "danielldecampos",
    socials: {
        github: "https://github.com/danielldecampos",
        linkedin: "https://www.linkedin.com/in/danielldecampos/"
    },
    expertises: {
        "DevOps Skills": [
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
        "Software Development Skills": [
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
            title: "DevOps Analyst at Secretaría de Innovación y Transformación Digital",
            subtitle: "01/2023 — Present",
            description: "Design, manage and analyze big data from the AWS cloud.",
        },
        {
            icon: Academy,
            title: "Backend Developer at Secretaría de Innovación y Transformación Digital",
            subtitle: "08/2019 — 01/2023",
            description: "Maintaining systems focused on geospatial data and public digital services, integrating APIs, databases, and analysis tools to enhance decision-making.",
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
