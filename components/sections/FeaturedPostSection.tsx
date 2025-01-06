import React from 'react'
import { Button } from '../ui/button'
import ProjectCard from '../common/projectCard'
import Link from 'next/link'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import ListLayout from '../layout/ListLayout'
const POSTS_PER_PAGE = 5
function FeaturedPostSection() {
  // const projects = project.getPages();
  const sortedPosts = sortPosts(allProjects)
  const posts = allCoreContent(sortedPosts)

  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">Featured Projects.</h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Discover a handpicked showcase of my top projects, illustrating my tech expertise and
        passion.
      </p>
      {posts.map((post, i) => {
        return <ProjectCard key={i} post={post} />
      })}
      <div className=" text-center">
        <Link href="/project">
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </>
  )
}

export default FeaturedPostSection
