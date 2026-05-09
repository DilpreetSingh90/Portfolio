import React from 'react';
import Skill from './Skill';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills">
            <h2 className='skillTitle'>I have experience with these technologies</h2>
            <div className="skillsGrid">
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="logo for Java" title="Java" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="logo for Spring Boot" title="Spring Boot" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="logo for Python" title="Python" />
                <div className="skill-text">Micronaut</div>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="logo for Redis" title="Redis" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="logo for Kafka" title="Kafka" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="logo for MongoDB" title="MongoDB" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="logo for MySQL" title="MySQL" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-plain-wordmark.svg" alt="logo for ElasticSearch" title="ElasticSearch" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="logo for Javascript" title="Javascript" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="logo for React" title="React" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="logo for Node" title="Node" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="logo for Git" title="Git" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="logo for Docker" title="Docker" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="logo for Jenkins" title="Jenkins" />
                <div className="skill-text">Cloud</div>
                <div className="skill-text">Agentic AI/LLM</div>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="logo for Kubernetes" title="Kubernetes" />
            </div>            
    </div>
  )
}

export default Skills;