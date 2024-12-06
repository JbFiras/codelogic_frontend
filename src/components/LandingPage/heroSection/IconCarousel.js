import React, {useEffect, useState} from "react";
import {
    FaPython,
    FaReact,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiGo,
    SiNextdotjs,
    SiJavascript,
    SiVuedotjs,
    SiKubernetes,
    SiDjango,
    SiJenkins,
    SiJetbrains,
    SiJira,
    SiAwslambda,
    SiAwsamplify,
    SiAwssecretsmanager,
    SiAxios,
    SiBlockchaindotcom,
    SiGithub,
    SiGithubactions,
    SiGitlab,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiSwagger,
    SiFlutter,
    SiAndroid,
    SiAndroidstudio,
    SiFirebase, SiCplusplus, SiGraphql, SiFastapi, SiZapier, SiNotion, SiMailchimp
} from "react-icons/si";
import styles from "@/styles/LogoCarousel.module.css";

const icons = [
    { component: SiJetbrains, name: "Jetbrains", color: "#3776AB" },
    { component: FaPython, name: "Python", color: "#3776AB" },
    { component: SiDjango, name: "Django", color: "#3776AB" },
    { component: SiGo, name: "Go", color: "#3776AB" },
    { component: SiNextdotjs, name: "Next.js", color: "#3776AB" },
    { component: FaReact, name: "React", color: "#3776AB" },
    { component: SiVuedotjs, name: "Vue.js", color: "#3776AB" },
    { component: SiJavascript, name: "JavaScript", color: "#3776AB" },
    { component: FaDocker, name: "Docker", color: "#3776AB" },
    { component: FaAws, name: "AWS", color: "#3776AB" },
    { component: SiKubernetes, name: "Kubernetes", color: "#3776AB" },
    { component: SiJenkins, name: "Jenkins", color: "#3776AB" },
    { component: SiJira, name: "Jira", color: "#3776AB" },
    { component: SiAwslambda, name: "AwsLambda", color: "#3776AB" },
    { component: SiAwsamplify, name: "AwsAmplify", color: "#3776AB" },
    { component: SiAwssecretsmanager, name: "AwsSecretsManager", color: "#3776AB" },
    { component: SiAxios, name: "Axios", color: "#3776AB" },
    { component: SiBlockchaindotcom, name: "BlockChain", color: "#3776AB" },
    { component: SiGithubactions, name: "GithubActions", color: "#3776AB" },
    { component: SiGithub, name: "Github", color: "#3776AB" },
    { component: SiGitlab, name: "Gitlab", color: "#3776AB" },
    { component: SiMysql, name: "Mysql", color: "#3776AB" },
    { component: SiPostgresql, name: "Postgresql", color: "#3776AB" },
    { component: SiFirebase, name: "Firebase", color: "#3776AB" },
    { component: SiSwagger, name: "Swagger", color: "#3776AB" },
    { component: SiPostman, name: "Postman", color: "#3776AB" },
    { component: SiFlutter, name: "Flutter", color: "#3776AB" },
    { component: SiAndroid, name: "Android", color: "#3776AB" },
    { component: SiAndroidstudio, name: "AndroidStudio", color: "#3776AB" },
    { component: SiCplusplus, name: "C++", color: "#3776AB" },
    { component: SiGraphql, name: "Graphql", color: "#3776AB" },
    { component: SiFastapi, name: "FastAPI", color: "#3776AB" },
    { component: SiZapier, name: "Zapier", color: "#3776AB" },
    { component: SiMailchimp, name: "Mailchimp", color: "#3776AB" },
];

export default function IconCarousel() {
    const [duplicatedIcons, setDuplicatedIcons] = useState([]);

    useEffect(() => {
        setDuplicatedIcons([...icons, ...icons]);
    }, []);
    return (
        <>
            <h3 className="container-fluid text-center">
                Empowering businesses to achieve remarkable success by leveraging advanced tools and innovative technologies
                <br/>tailored to their unique needs.
            </h3>
            <div className={`${styles.carouselContainer} container-fluid`}>
                <div className={`${styles.carousel}`}>
                {duplicatedIcons?.map((icon, index) => {
                            const IconComponent = icon.component;
                            return (
                                <div key={index} className={`${styles.iconWrapper}`}>
                                    <IconComponent size={50} color={icon.color} />
                                    <p className={`${styles.iconText}`}>{icon.name}</p>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </>
    );
}
