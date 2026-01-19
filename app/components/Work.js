import React from 'react'
import ProjectCard from './SkillCard'

const Work = () => {
  return (
    <section id="skill" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-medium mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard
            title="Web Development"
            desc="Next.js"
          />
          <ProjectCard
            title="Languages"
            desc="C, C++, Java, JavaScript, Python"
          />
          <ProjectCard
            title="Data Science"
            desc="AI/ML"
          />
        </div>
      </section>
  )
}

export default Work
